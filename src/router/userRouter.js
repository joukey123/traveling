import express from "express";
import { user } from "../controller/userController";

const userRouter = express.Router();

userRouter.get("/", user);

export default userRouter;
