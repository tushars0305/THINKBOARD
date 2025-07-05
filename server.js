import express from "express"
// const express = require("express"); // same as above one but diff syntax and type in package.json


const app = express()
app.get("/api/notes",(req,res)=>{
    res.status(200).send("you got note")
})
app.post("/api/notes",(req,res)=>{
    res.status(200).json("create new notes")
})
app.put("/api/notes/:id",(req,res)=>{
    res.status(200).json("update new note")
})
app.delete("/api/notes/:id",(req,res)=>{
    res.status(200).json("delete note")
})

app.listen(5001 , () =>{
    console.log("Server Started at PORT 5001");
})