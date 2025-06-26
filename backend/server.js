const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const  route  = require("./routes/Route");

dotenv.config();

const app = express();


app.use(cors({
    origin:"http://localhost:3000",
    credentials:true,
}));

app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 8000;
const MONGO_URL = process.env.MONGO_URL;


//routes
app.use("/api",route);


app.listen(PORT,()=>{
            console.log("server running");
});


mongoose
        .connect(MONGO_URL,{
            serverSelectionTimeoutMS: 5000, // Timeout after 5s (not 30s default)
            socketTimeoutMS: 45000, 
            })
        .then(()=>{
        console.log("Mongo connected");

            })
        .catch((error)=>{
            console.log(error);
        });

