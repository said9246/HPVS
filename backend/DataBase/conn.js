const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URI).then(()=>{
    console.log("connection build...");
}).catch((e) =>{
    console.log(e);
});