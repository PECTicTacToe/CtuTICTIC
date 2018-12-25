const mongoose = require("mongoose");
const { Schema } = mongoose;

const vehicleSchema = new Schema({
  id: String
});
mongoose.model("vehicles", vehicleSchema);
