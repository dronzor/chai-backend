
import connectDB from "./db/index.js"
import dotenv from "dotenv"
import { app } from "./app.js"
// import { DB_NAME } from "./constants";
// import mongoose from "mongoose";
// import express from "express";
// const app=express()

dotenv.config({
    path: "./.env"
})

connectDB().
    then(()=>{
        app.on("error", (error) => {
            console.log(error);
            throw error
        }
        )
        app.listen(process.env.port ||8000,()=>{
            console.log(`serverv is running on port ${process.env.port}`);
        })
    }
    )
    .catch((err)=>{
        console.log(`mongoDB failed to load !!!`,err);
    })

/*
(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        express.on("error",(error)=>{
            console.log('err',error);
            throw error
        })
        app.listen(process.env.port,()=>{
            console.log(`app listening on port on ${process.env.port}`);
        })
    } catch (error) {
        console.log(error);
        throw error
    }
})
*/
