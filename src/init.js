import app from "./server";

const PORT = process.env.PORT || 4000;

const handleListening = () => {
  console.log(`Server : 🚀 http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
