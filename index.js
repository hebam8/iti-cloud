const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello ITI");
});

app.listen(process.env.PORT || 6000, () => {
  console.log("Listening On 6000");
});
