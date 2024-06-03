import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";
import testRoute from "./routes/test.route.js";
import userRoute from "./routes/user.route.js";
const app = express();
console.log(process.env.CLIENT_URL);
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);
app.use("/api/test", testRoute);
app.use("/api/users", userRoute);

const port = 9000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
