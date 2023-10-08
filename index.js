import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnect from "./config/dbConnect.js";
import questionsRouter from "./routes/questionsRouter.js";
import extraInfoRouter from "./routes/extraInfoRouter.js";
import userRouter from "./routes/userRouter.js";

dotenv.config();
dbConnect();

const app = express();

app.use(cors());
app.use(express.json());
app.use(questionsRouter);
app.use(extraInfoRouter);
app.use(userRouter);
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server is running on Port: ${PORT}`));
