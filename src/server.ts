import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { createConnection } from "./node_api/Connection";
import { router as authRouter } from "./node_api/routes/authRouter";

dotenv.config();
const PORT = process.env.PORT || 8080;
const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers");
  next();
});

app.use("/auth", authRouter);
const start = (): void => {
  try {
    createConnection()
      .then(() => {
        console.log("Connected to database");
      })
      .catch((error) => {
        console.log("Error connecting to database:", error);
      });
    app.listen(PORT, () => {
      console.log("Application started on port:" + PORT + "!");
    });
  } catch (e) {
    console.log("Error:" + e);
  }
};
start();
