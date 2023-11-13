import express from "express";
import rootRouter from "./router/rootRouter";
import travelRouter from "./router/travelRouter";
import workingRouter from "./router/workingRouter";
import togetherRouter from "./router/togetherRouter";
import userRouter from "./router/userRouter";

const app = express();

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use("/img", express.static("img"));
app.use("/static", express.static("assets"));
app.use(express.urlencoded({ extended: true }));
app.use("/", rootRouter);
app.use("/travel", travelRouter);
app.use("/working", workingRouter);
app.use("/together", togetherRouter);
app.use("/user", userRouter);

export default app;
