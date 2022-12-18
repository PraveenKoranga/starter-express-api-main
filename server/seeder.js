import mongoose from "mongoose";
import dotenv from "dotenv";
import { connectDb } from "./database/db.js";
import { Users } from "./Products/Users.js";
import Order from "./models/OrderModel.js";
import { productsDetails } from "./Products/Products.js";
import User from "./models/User.js";
import Product from "./models/ProductModel.js";

dotenv.config();
connectDb();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    const createUser = await User.insertMany(Users);
    const adminUser = createUser[0]._id;
    const sampleData = productsDetails.map((product) => {
      return { ...product, user: adminUser };
    });
    await Product.insertMany(sampleData);
    console.log("data imported!");
    process.exit();
  } catch (error) {
    console.log(`error while imported data: ${error}`);
    process.exit(1);
  }
};

const dataDestroy = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    console.log("data destroyed");
    process.exit();
  } catch (error) {
    console.log(`${error}`);
  }
};

if (process.argv[2] === "-d") {
  dataDestroy();
} else {
  importData();
}
