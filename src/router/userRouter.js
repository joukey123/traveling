import express from "express";
import { logout } from "../controller/userController";

const userRouter = express.Router();

userRouter.get("/logout", logout);

export default userRouter;
