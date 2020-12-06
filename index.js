const express = require("express");

const app = express();

const port = 8000;

app.get("/", (req, res) =>
  res.json([
    {
      name: "Bob",
      email: "bob@example.com",
    },
    {
      name: "Ann",
      email: "ann@gmail.com",
    },
    {
      name: "Jake",
      email: "k.jake@hotmail.com",
    },
    {
      name: "Maria",
      email: "maria@yahoo.com",
    },
  ])
);

app.listen(port, () => {
  console.log(`example app listening on port ${port}...`);
});
