import express from "express";
// import dotenv from "./env";
import mongoose from "mongoose";


const app = express()

// dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect("mongodb+srv://lama:lama@cluster0.xvpa7ry.mongodb.net/?retryWrites=true&w=majority");
        console.log("Connected to MongoDB")
      } catch (error) {
        throw error;
      }
};

mongoose.connection.on("disconnected", ()=>{
  console.log("mongoDB disconnected...")
})
mongoose.connection.on("connected", ()=>{
  console.log("mongoDB connected..")
})


app.get("/", (req,res)=>{
  res.send("hello first request");
})


app.listen(5000, ()=>{
    connect();
    console.log("Connected to backend....");
})


// mongoose.connect("mongodb://127.0.0.1:27017/booking");

// app.listen(8000,function(){
//   console.log('Server is running.....');
// });