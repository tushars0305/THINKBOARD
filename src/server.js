import express from "express"
// const express = require("express"); // same as above one but diff syntax and type in package.json
import notesRoutes from "./routes/notesRoutes.js";

const app = express()

app.use("/api/notes",notesRoutes); 



app.listen(5001 , () =>{
    console.log("Server Started at PORT:5001");
});