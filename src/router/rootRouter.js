import express from "express";
import { home } from "../controller/travelController";
import { join, login } from "../controller/userController";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.get("/join", join);
rootRouter.get("/login", login);

export default rootRouter;
