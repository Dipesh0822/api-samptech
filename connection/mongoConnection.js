var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/sampTech", {
  useNewUrlParser: true,
  useFindAndModify: false,
  autoIndex: false ,
  useUnifiedTopology: true,
  poolSize: 10,
  // ssl: true,
  // sslValidate: false
});
var db = mongoose.connection;
db.on("error", err  => {
  console.log("err", err)
});
db.on("connected", (err) => {
    if(err) {
        console.log(err)
    } else {
        console.log("mongoose is connected")
    }
});
db.on('disconnected', function(){
    console.log("Mongoose default connection is disconnected");
});
db.on("reconnected", () => {
  console.log("Connection Reestablished");
});
db.on("close", () => {
    console.log("Connection Closed");
});
