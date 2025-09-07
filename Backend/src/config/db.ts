import mongoose from "mongoose";

const URL="mongodb://127.0.0.1:27017/inventorymanagementsystem";

mongoose.connect(URL);

const db=mongoose.connection;
db.on("connected",()=>console.log("Connected to MongoDB"));
db.on("disconnected",()=>console.log("Disconnected from MongoDB"));
db.on("error",(err)=>console.log("Error connecting to MongoDB",err));

export default db;




