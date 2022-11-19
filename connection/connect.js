const mongoose= require("mongoose");
const uri = process.env.MONGODB_URI;
// mongoose.connect('mongodb://localhost:27017/restapi')
mongoose.connect(uri)
.then(console.log("Login successful"))
  .catch(console.error);