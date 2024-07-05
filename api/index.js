const express = require("express");
const app = express();
app.use(express.json());

const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL)
        .then(()=>{console.log("Connected to MongoDB")})
        .catch((err)=>{
            console.log(err);
        });

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Server is running.");
});

const cors = require("cors");
app.use(cors());

const userRoute = require("./routes/user");
app.use("/api/users", userRoute);

const authRoute = require("./routes/auth");
app.use("/api/auth", authRoute);

const productRoute = require("./routes/product");
app.use("/api/products", productRoute);

const cartRoute = require("./routes/cart");
app.use("/api/carts", cartRoute);

const orderRoute = require("./routes/order");
app.use("/api/orders", orderRoute);

const stripeRoute = require("./routes/stripe");
app.use("/api/checkout", stripeRoute);
