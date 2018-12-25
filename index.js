const express = require("express");
const app = express();
const axios = require("axios");
const mongoose = require("mongoose");
require("./models/Vehicle");
mongoose
  .connect(
    "mongodb://user1234:ctu12345@ctu-shard-00-00-8ojtk.mongodb.net:27017,ctu-shard-00-01-8ojtk.mongodb.net:27017,ctu-shard-00-02-8ojtk.mongodb.net:27017/test?ssl=true&replicaSet=CTU-shard-0&authSource=admin&retryWrites=true"
  )
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));
const Vehicle = mongoose.model("vehicles");
const url = "https://reqres.in/api/users?page=2";
app.get("/", async (req, res) => {
  const { data } = await axios.get(url);
  const { id } = data.vehicle_identification;
  const vehicle = new Vehicle({
    id
  });
  await vehicle.save();
  res.send({ data });
});
const PORT = 5000;
app.listen(PORT, () => console.log(`Server started at ${PORT}`));
