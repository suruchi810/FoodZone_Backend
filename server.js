import express from "express"
import cors from "cors"
import dotenv from "dotenv";
dotenv.config(); 
import {connectDB} from './config/db.js'
import foodRouter from "./routes/foodRoutes.js";
import userRouter from "./routes/userRouter.js";
import cartRouter  from "./routes/cartRoutes.js";
import orderRouter from "./routes/orderRoutes.js";

const app = express()
const port = 4000

app.use(express.json())
app.use(cors({ origin: "https://foodzone-frontend-hutg.onrender.com" }));

//DB connection
connectDB();

//api endPoints
app.use("/api/food", foodRouter)
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res)=>{
    res.send("API working");
})

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
    
})