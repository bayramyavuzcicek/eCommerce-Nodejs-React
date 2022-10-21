import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import authRoutes from './routes/auth.js'
import userRoutes from './routes/user.js'
const app = express();
dotenv.config();


//database conneciton
const connection = async()=>{
    await mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log("connection has been successfully")
    }).catch(err=>{console.log(err)});
}
connection();


//middleware
app.use(express.json());

app.use("/api/auth",authRoutes)
app.use("/api/user",userRoutes)

app.listen(process.env.PORT, ()=>{
    console.log(`backend is runnin on ${process.env.PORT}`);
})