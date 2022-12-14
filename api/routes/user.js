import express from 'express';
import User from '../models/User.js'
import {verifyTokenAndAuthorization,verifyTokenAndAdmin} from './verifyToken.js'
const router = express.Router();

//update
router.put("/:id",verifyTokenAndAuthorization,async(req,res)=>{
    
    if(req.body.password) { 
        const salt = bcrypt.genSaltSync(10);
        req.body.password = bcrypt.hashSync(req.body.password, salt);
    }
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
        res.status(200).json(updatedUser)
    } catch (err) {
        res.status(500).json(err)
    }


});

//delete
router.delete("/:id",verifyTokenAndAuthorization,async(req,res)=>{
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted")
    } catch (err) {
        res.status(500).json(err);
    }
})

//get user
router.get("/find/:id",verifyTokenAndAdmin,async(req,res)=>{
    try {
        const user = await User.findById(req.params.id);
        const {password, ...others} = user._doc;
        res.status(200).json(others)
    } catch (err) {
        res.status(500).json(err);
    }
})

//get all user
router.get("/",verifyTokenAndAdmin,async(req,res)=>{
    const query = req.query.new;
    try {

        const users = query ? await User.find().sort({_id:-1}).limit(1) : await User.find();
        
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
})


//get user stats 
//total number of users per month
router.get("/stats", verifyTokenAndAdmin, async(req,res)=>{
    const date = new Date();
    const lastyear = new Date(date.setFullYear(date.getFullYear() - 1 ))
    try {
       const data = await User.aggregate([
        {
            $match : {
                createdAt : {
                    $gte : lastyear // condition
                }
            }
        },   
        {
            $project : {
                month : {
                    $month: "$createdAt" //createdAt tarih bilgisinden ay bilgisini ??ek 
                }
            }
        },   
        {
            $group: {
                _id: "$month",  // grupla
                total: {$sum : 1 }  //her grupta toplam ka?? ki??i varsa toplam??n?? g??ster
            }
        },   
       ]);
       res.status(200).json(data); 
    } catch (err) {
        res.status(500).json(err)
    }
})


export default  router;