const express = require("express");

const app = express();

const port = 8000;

app.get("/*", (req, res) => {
  console.log(new Date(Date.now()), ":", "HTTP/1.0", req.ip, "path:", req.path);
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
  ]);
});

app.listen(port, () => {
  console.log(`example app listening on port ${port}...`);
});
