import express from 'express';
import bcrypt from 'bcryptjs'
import JWT from 'jsonwebtoken'

import User from '../models/User.js';

const router = express.Router();


//REGISTER
router.post("/register", async(req,res)=>{

    //hashing the password 
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);
    //create a new user
    const newUser = new User ({
        username: req.body.username,
        email:req.body.email,
        password:hashedPassword, 
    })

    //save and response
    try {
        
        const user = await newUser.save();
        const {password, ...others} = user._doc;
        res.status(201).json(others);
    } catch (err) {
        res.status(500).json(err);
    }
})


//LOGIN
router.post("/login", async(req,res)=>{

    //find user
    const user = await User.findOne({username: req.body.username});
    !user && res.status(404).json("User has been not found!");
    
    //verify password
    const isPassword = bcrypt.compareSync(req.body.password, user.password);
    !isPassword && res.status(401).json("Wrong Credentials");

    //JWT
   
    const access_token = JWT.sign({
        id: user._id,
        isAdmin: user.isAdmin
    },process.env.JWT_SECRETKEY,
    {
        expiresIn:"3d"
    })
   

    //send response
    const {password, ...others} = user._doc;
    res.status(200).json({...others,access_token});
        
})




export default  router;