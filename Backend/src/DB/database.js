const mongoose= require('mongoose')
require('dotenv').config()

const connectDB= async()=>{
    try{
        mongoose.connect(process.env.DB_URL)
        .then(()=>console.log("Database connected"))
    }
    catch(err){
    console.error("Connection failed",err)

    }
}

module.exports=connectDB;