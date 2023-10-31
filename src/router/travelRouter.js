import express from "express";
import { travel } from "../controller/travelController";

const travelRouter = express.Router();

travelRouter.get("/", travel);

export default travelRouter;
