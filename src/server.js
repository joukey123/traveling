import express from "express";
import globalRouter from "./router/globalRouter";

const PORT = 4000;
const app = express();

const handleListening = () => {
  console.log(`Server : 🚀 http://localhost:${PORT}`);
};

app.use("/", globalRouter);

app.listen(PORT, handleListening);
