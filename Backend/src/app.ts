// app.ts
import express from "express";
import  inventoryRoutes from "./routes/inventoryRoutes";
import productRoutes from "./routes/productRoutes";
import roleRoutes from "./routes/RoleRoutes";
import providerRoute from "./routes/providerRoutes";
import warehouseRoute from "./routes/warehouseRoutes";
import connectDB from "./config/db";
import ApplicationUser from "./routes/ApplicationUser";
const app = express();
app.use(express.json());

connectDB();
app.use("/inventory", inventoryRoutes);
app.use("/products", productRoutes);
app.use("/roles", roleRoutes);
app.use("/providers", providerRoute);
app.use("/warehouses", warehouseRoute);
app.use("/auth",ApplicationUser)
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
