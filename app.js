const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(express.static("frontend"));
app.use(bodyParser.json());

const dataSchema = new mongoose.Schema({
    rating: Number,
    comment: String,
    name: String,
});

const Data = mongoose.model("Data", dataSchema);

mongoose
    .connect(
        "mongodb+srv://jojogret:jojogret@super.sho6ec4.mongodb.net/?retryWrites=true&w=majority&appName=super",
    )
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });

app.post("/data", (req, res) => {
    const { rating, comment, name } = req.body;
    const newData = new Data({ rating, comment, name });

    newData
        .save()
        .then(() => {
            res.send("Data saved to MongoDB");
        })
        .catch((error) => {
            res.status(400).send("Error saving data to MongoDB");
        });
});

// Endpoint to fetch all data from MongoDB
app.get("/data", (req, res) => {
    Data.find()
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
            res.status(500).send("Error fetching data from MongoDB");
        });
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/frontend/index.html");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});