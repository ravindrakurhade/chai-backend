// require('dotenv').config({path: './env'})
import dotenv from 'dotenv';
import connectDB from "./db/index.js";
import { app } from './app.js'
dotenv.config({
    path: './.env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8080, () => {
        console.log(`Server is running at port: ${process.env.PORT}`);
    })
})
.catch((err) =>{
    console.log();
})







/* 1st approach
import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from "express";
const app = express();

// database connection is {try/catch best approach}  or promise use to handle errors
// Database is another Continent (async / await approach use )

//IIFEs in js
(async () => {
    try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    app.on("error", (error) =>{
        console.log("Error connecting", error);
        throw error
    })
    app.listen(process.env.PORT, () => {
        console.log(`App is listening on ${process.env.PORT}`);
    });
    } catch (error) {
        console.error("ERROR: ", error);
        throw err
    }
})

*/