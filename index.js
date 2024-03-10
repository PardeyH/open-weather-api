import express from "express";
import { apiKey } from "./apiKey.js";
import axios from "axios";
import bodyParser from "body-parser";

const port = 3000;
const app = express();

const hamburgLat = 53.5502;
const hamburgLon = 9.9920;

app.use(express.static("public"));

app.get("/", async (req, res) => {
    const result = await axios.get(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${hamburgLat}&lon=${hamburgLon}&appid=${apiKey}`);
    console.log(result.data);
    res.render("index.ejs", { content: result.data });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
});