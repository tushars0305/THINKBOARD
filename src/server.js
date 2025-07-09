import express from "express"
// const express = require("express"); // same as above one but diff syntax and type in package.json
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "../src/config/db.js";

import dotenv from "dotenv";
dotenv.config(); 
const PORT = process.env.PORT || 5001;


const app = express()
connectDB();

app.use(express.json());// middleware hai ye
app.use("/api/notes",notesRoutes); 



app.listen(PORT , () =>{
    console.log("Server Started at PORT:", PORT);
});