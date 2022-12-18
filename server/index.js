import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import cors from "cors";
import errorHandler from "./middleware/error.js";
import courseRoute from "./routes/courseRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import privateRoute from "./routes/private.js";
import profileRouter from "./routes/profileRoute.js";
import blogRoutes from "./routes/blogRoute.js";
import reviewRoute from "./routes/reviewRoute.js";

const port = process.env.PORT || 8030;

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

// routes
app.use("/courses", courseRoute);
app.use("/blog", blogRoutes);
app.use("/auth", authRoutes);
app.use("/profile", profileRouter);
app.use("/private", privateRoute);
app.use("/review", reviewRoute);

// ERROR HANDLER
app.use(errorHandler);

// heroku
if(process.env.NODE_ENV === "production"){
  app.use(express.static("client/build"))
}
// connect to mongo db
const URI = process.env.MONGODB_URL;
mongoose.connect(
  URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connect to database");
  }
);



app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
