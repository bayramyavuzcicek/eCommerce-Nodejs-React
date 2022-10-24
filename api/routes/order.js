import express from 'express';
import Order from '../models/Order.js'
import {verifyTokenAndAuthorization,verifyTokenAndAdmin,verifyToken} from './verifyToken.js'
const router = express.Router();

//CREATE PRODUCT
//any user can creta own cart
router.post("/", verifyToken, async (req,res)=>{
    const order = new Order(req.body);
    try {
        const savedOrder = await order.save();
        res.status(200).json(savedOrder);
    } catch (err) {
        res.status(500).json(err)
    }
})








//UPDATE PRODUCT
//only admin can update orders
router.put("/:id",verifyTokenAndAdmin,async(req,res)=>{
    
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
        res.status(200).json(updatedOrder)
    } catch (err) {
        res.status(500).json(err)
    }


});

//delete product
//admin can delete orders
router.delete("/:id",verifyTokenAndAdmin,async(req,res)=>{
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json("Order has been deleted")
    } catch (err) {
        res.status(500).json(err);
    }
})

//GET USER ORDER
router.get("/find/:userId",verifyTokenAndAuthorization,async(req,res)=>{
    //paramsdan gelen id user id 
    try {
        const Orders = await Order.findOne({userId: req.params.id});
        
        res.status(200).json(Orders)
    } catch (err) {
        res.status(500).json(err);
    }
})

//GET ALL ORDERS 
router.get("/",verifyTokenAndAdmin,async(req,res)=>{
    try {
        const orders = await Order.find();
        res.status(200).json(orders)
    } catch (err) {
        res.status(500).json(err);
    }
})

// GET MONTHLY INCOME

router.get("/income",verifyTokenAndAdmin, async (req,res)=>{
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1 ));
    const previosuMonth = new Date(lastMonth.setMonth(lastMonth.getMonth() - 1)) ;
    
    try {
        const income = await Order.aggregate([
            {$match : {
                createdAt : {
                    $gte : previosuMonth
                }
            }},
            {
                $project : {
                    month : {
                        $month : "$createdAt",
                    },
                    sales: "$amount"
                }
            },
            {
                $group : {
                    _id : "$month",
                    total : {$sum : "$sales"}
                }
            }
        ]);
        res.status(200).json(income)
        
    } catch (err) {
        res.status(500).json(err)
    }


})
export default  router;