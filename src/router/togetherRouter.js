import express from "express";
import { together } from "../controller/togetherController";

const togetherRouter = express.Router();

togetherRouter.get("/", together);

export default togetherRouter;
