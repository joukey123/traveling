import express from "express";

const PORT = 4000;
const app = express();

const handleListening = () => {
  console.log(`Server : 🚀 http://localhost:${PORT}`);
};

const handleHome = (req, res) => {
  return res.send("<h1>home</h1>");
};

app.get("/", handleHome);
app.listen(PORT, handleListening);
