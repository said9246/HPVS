const express = require("express");
const cors=require("cors");
const app = express();
const port = 5000;
const path = require("path")
require("dotenv").config({ path: "./config/.env" });
app.use(cors(
    {
        origin:"*",
        withCredentials:true,
    }

));
require("./DataBase/conn");
const URLS = require("./Router/route");

app.use("/api/v1/",URLS);


app.listen(port,()=>{
    console.log("server starts.............");
})