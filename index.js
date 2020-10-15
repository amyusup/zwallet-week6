const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// var multer = require('multer');
// var upload = multer();
const cors = require("cors");
// const rIndex = require("./src/Routes/Index");
const topupRoute = require("./src/Routes/Topup");
const userRoute = require("./src/Routes/Users");
const transferRoute = require("./src/Routes/Transfer");
const authRoute = require("./src/Routes/Auth");
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
  bodyParser.json()
);

// app.use(upload.any());
app.use(express.static('public'))
app.use(cors());

app.get('/', function (req, res) {
  res.send('AKHIRNYA BERHASIL DI DEPLOY')
})
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/topup", topupRoute);
app.use("/api/v1/users",  userRoute);
app.use("/api/v1/transfer", transferRoute);

app.listen(process.env.PORT || 8000, () => {
  console.log(`Sever running on port 8000`);
});

// DB_HOST=db4free.net
// DB_USER=amyusup26
// DB_PASS=12345678
// DB_NAME=zwallet_amy
