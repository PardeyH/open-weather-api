import express from "express";
import { apiKey } from "./apiKey.js";
import axios from "axios";
import bodyParser from "body-parser";

const port = 3000;
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
});