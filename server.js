const express = require("express");
const app = express();
const port = 3000;

app.get("/Ping",(req,res)=>{
    res.send("pong")
})

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})