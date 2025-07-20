import express from "express"
// const express = require("express"); // same as above one but diff syntax and type in package.json
import cors from 'cors'
import dotenv from "dotenv";


import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "../src/config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";


dotenv.config(); 
const PORT = process.env.PORT || 5001;


const app = express()


app.use(cors({
    origin:"http://localhost:5173",
}));
app.use(express.json());// this is middleware
app.use(rateLimiter);


app.use((req,res,next)=>{
    console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
    next();
})

app.use("/api/notes",notesRoutes); 


connectDB().then(()=>{
    app.listen(PORT , () =>{
    console.log("Server Started at PORT:", PORT);
    }); 
});
