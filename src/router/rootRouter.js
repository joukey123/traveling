import express from "express";
import { home } from "../controller/travelController";
import { getJoin, postJoin, login } from "../controller/userController";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.get("/login", login);

export default rootRouter;
