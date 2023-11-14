import express from "express";
import rootRouter from "./router/rootRouter";
import travelRouter from "./router/travelRouter";
import workingRouter from "./router/workingRouter";
import togetherRouter from "./router/togetherRouter";
import userRouter from "./router/userRouter";
import session from "express-session";
import { localsMiddleware } from "./router/localsMiddleware";
import MongoStore from "connect-mongo";

const app = express();

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use("/img", express.static("img"));
app.use("/static", express.static("assets"));
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
  })
);

app.use(localsMiddleware);
app.use("/", rootRouter);
app.use("/travel", travelRouter);
app.use("/working", workingRouter);
app.use("/together", togetherRouter);
app.use("/user", userRouter);

export default app;
