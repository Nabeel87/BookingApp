import express from "express";
// import dotenv from "./env";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import cookieParser from "cookie-parser";
import cors from "cors";

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

//middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.use((err, req,res,next)=>{
  const errorStatus = err.status || 500
  const errorMessage = err.message || "Somthing went wrong!"
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack
  })
});

// mongoose.connection.on("connected", ()=>{
//   console.log("mongoDB connected..")
// })


// app.get("/users", (req,res)=>{
//   res.send("hello first request");
// })


app.listen(5000, ()=>{
    connect();
    console.log("Connected to backend....");
})


// mongoose.connect("mongodb://127.0.0.1:27017/booking");

// app.listen(8000,function(){
//   console.log('Server is running.....');
// });