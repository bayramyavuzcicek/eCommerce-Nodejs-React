import express from 'express';
import Cart from '../models/Cart.js'
import {verifyTokenAndAuthorization,verifyTokenAndAdmin,verifyToken} from './verifyToken.js'
const router = express.Router();

//CREATE PRODUCT
//any user can creta own cart
router.post("/", verifyToken, async (req,res)=>{
    const cart = new Cart(req.body);
    try {
        const savedCart = await cart.save();
        res.status(200).json(savedCart);
    } catch (err) {
        res.status(500).json(err)
    }
})








//UPDATE PRODUCT
router.put("/:id",verifyTokenAndAuthorization,async(req,res)=>{
    
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
        res.status(200).json(updatedProduct)
    } catch (err) {
        res.status(500).json(err)
    }


});

//delete product
router.delete("/:id",verifyTokenAndAuthorization,async(req,res)=>{
    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Cart has been deleted")
    } catch (err) {
        res.status(500).json(err);
    }
})

//GET USER CART
router.get("/find/:id",verifyTokenAndAuthorization,async(req,res)=>{
    //paramsdan gelen id user id 
    try {
        const cart = await Cart.findOne({userId: req.params.id});
        
        res.status(200).json(cart)
    } catch (err) {
        res.status(500).json(err);
    }
})

//GET ALL CARTS 
router.get("/",verifyTokenAndAdmin,async(req,res)=>{
    try {
        const carts = await Cart.find();
        res.status(200).json(carts)
    } catch (err) {
        res.status(500).json(err);
    }
})





export default  router;