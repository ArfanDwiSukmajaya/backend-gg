import express from "express";
import dotenv from "dotenv";
import connectToDatabase from "./config/database.js";
import bodyParser from "body-parser";
import cors from "cors";

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

import videoRouter from "./app/routes/videoRoute.js";
import productRouter from "./app/routes/productRoute.js";
import commentRouter from "./app/routes/commentRoute.js";

connectToDatabase();

// app.use(
//   cors({
//     origin: "http://192.168.100.183:5173",

//   })
// );

app.use(cors());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/api/v1/", videoRouter);
app.use("/api/v1/", productRouter);
app.use("/api/v1/", commentRouter);

app.get("/", (req, res) => {
  res.send("this is homepage");
});

app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
