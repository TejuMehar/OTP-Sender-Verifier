
const mongoose = require("mongoose");

const connectDB = async()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/otpDB");
        console.log("Database is Connect")
    }catch(error){
        console.log("Connetion Failed",error);
        process.exit(1);
    }
}


module.exports = connectDB;