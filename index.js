const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello World! This app is live!"));

module.exports = app;