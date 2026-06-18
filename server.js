const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// serve static frontend files
app.use(express.static("public"));

// default route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/training", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "training.html"));
});

app.get("/coaching", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "coaching.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "contact.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});