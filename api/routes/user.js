import express from 'express';

import {verifyToken} from './verifyToken.js'
const router = express.Router();


router.post("/",verifyToken,(req,res)=>{

});




export default  router;