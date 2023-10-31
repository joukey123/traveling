import express from "express";

const globalRouter = express.Router();

globalRouter.get("/", handleHome);
globalRouter.get("/travel", handleTravel);
globalRouter.get("/working", handleWorking);
globalRouter.get("/together", handleTogether);

const handleHome = (req, res) => {
  return res.send("<h1>home</h1>");
};
const handleTravel = (req, res) => {
  return res.send("<h1>travel</h1>");
};
const handleWorking = (req, res) => {
  return res.send("<h1>Working</h1>");
};
const handleTogether = (req, res) => {
  return res.send("<h1>together</h1>");
};
export default globalRouter;
