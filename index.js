const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello ITI");
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Listening On 3000");
});
