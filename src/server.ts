import express, { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./app/routes/routes";
import httpStatus from "http-status";
import globalErrorHandler from "./app/middlewares/globalErrorHandlers";
require("dotenv").config();
const app = express();
const port = process.env.PORT;

// middlewares parser
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application routes
app.use("/api/v1", router);

async function main() {
  await mongoose.connect(process.env.uri as string);
}

main();

// Define routes
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, world!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// error handler middleware
app.use(globalErrorHandler);

// not found handler
app.use(async (req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Not found",
    errorMessages: [
      {
        path: req.originalUrl,
        message: "API not found",
      },
    ],
  });
  next();
});