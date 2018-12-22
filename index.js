const express = require("express");
const app = express();
const axios = require("axios");
const url = "https://reqres.in/api/users?page=2";
app.get("/", async (req, res) => {
  const response = await axios.get(url);
  res.send({ data: response.data });
});
const PORT = 5000;
app.listen(PORT, () => console.log(`Server started at ${PORT}`));
