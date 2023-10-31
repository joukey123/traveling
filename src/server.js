import express from "express";
import rootRouter from "./router/rootRouter";
import travelRouter from "./router/travelRouter";
import workingRouter from "./router/workingRouter";
import togetherRouter from "./router/togetherRouter";
import userRouter from "./router/userRouter";

const PORT = 4000;
const app = express();

const handleListening = () => {
  console.log(`Server : 🚀 http://localhost:${PORT}`);
};

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use("/", rootRouter);
app.use("/travel", travelRouter);
app.use("/working", workingRouter);
app.use("/together", togetherRouter);
app.use("/user", userRouter);

app.listen(PORT, handleListening);
