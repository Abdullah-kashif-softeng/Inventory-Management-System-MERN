// app.ts
import express from "express";
import  inventoryRoutes from "./routes/inventoryRoutes";
import connectDB from "./config/db";
const app = express();
app.use(express.json());

connectDB();
app.use("/inventory", inventoryRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
