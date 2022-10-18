import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import UserRouter from "./routes/user.js";
import AuthRouter from "./routes/auth.js";
import ProductRouter from "./routes/product.js";
import CartRouter from "./routes/cart.js";
import OrderRouter from "./routes/order.js";
import StripeRouter from "./routes/stripe.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log("MongoDB connected!!");
    })
    .catch((err) => console.log(err));

app.use("/api/auth", AuthRouter);
app.use("/api/users", UserRouter);
app.use("/api/products", ProductRouter);
app.use("/api/carts", CartRouter);
app.use("/api/orders", OrderRouter);
app.use("/api/checkout", StripeRouter);

app.listen(8800, () => {
    console.log("server is ruuning on port 8800.");
});
