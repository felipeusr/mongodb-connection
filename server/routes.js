const express = require("express");
const app = express();
const mongodb = require("./mongodb");

app.get("/autores", (req, res) => {
    mongodb.database.collection("autores").find().toArray((error, results)=>{
        if (error) throw error;
        res.send(results);
    })
});

app.post("/criar", (req, res) => {
    mongodb.database.collection("autores").insertOne({"nome":req.body.autor}, (err, res) => {
        if (err) throw err;
    });
});

module.exports = app;