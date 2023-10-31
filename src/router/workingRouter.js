import express from "express";
import { working } from "../controller/workingController";

const workingRouter = express.Router();

workingRouter.get("/", working);

export default workingRouter;
