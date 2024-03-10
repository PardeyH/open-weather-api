import express from "express";
import { apiKey } from "./apiKey.js";
import axios from "axios";

const port = 3000;
const app = express();

// coordinates for latitude and longitude of Hamburg, Germany
const hamburgLat = 53.5502;
const hamburgLon = 9.9920;

app.use(express.static("public"));

app.get("/", async (req, res) => {
    const result = await axios.get(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${hamburgLat}&lon=${hamburgLon}&units=metric&exclude=minutely,hourly,daily&appid=${apiKey}`);

    console.log(result.data);
    
    const currentData = result.data.current;
    const currentWeather = result.data.current.weather[0];
    
    res.render("index.ejs", { 
        currentTime: convertTimeFormat(currentData.dt),
        weatherIcon: currentWeather,
        sunrise: convertTimeFormat(currentData.sunrise),
        sunset: convertTimeFormat(currentData.sunset),
     });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
});

function convertTimeFormat(time) {
    return new Date(time * 1000).toLocaleString();
}