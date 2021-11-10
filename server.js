var express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");
var bodyparser = require("body-parser");

var app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded());
app.use(cors()); //CORS is shorthand for Cross-Origin Resource Sharing. It is a mechanism to allow or restrict requested resources on a web server depend on where the HTTP request was initiated. This policy is used to secure a certain web server from access by other website or domain

mongoose.connect(
  "mongodb://localhost:27017/loginRegisterdb",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("DB Connected!!");
  }
);

const userSchema = new mongoose.Schema({
  name: String,
  phone: String,
  username: String,
  password: String,
});

const User = new mongoose.model("User", userSchema);

app.post("/loginpage", function (req, res) {
  const { username, password } = req.body;
  User.findOne({ username: username }, (err, user) => {
    if (user) {
      if (password == user.password) {
        res.send({ message: "Login Successful", user: user });
      } else {
        res.send({ message: "Password Doesn't Match" });
      }
    } else {
      res.send({ message: "No such Account exists" });
    }
  });
});

app.post("/signuppage", function (req, res) {
  const { name, phone, username, password } = req.body;
  User.findOne({ username: username }, (err, user) => {
    if (user) {
      res.send({message:"Username already exists"});
    } else {
      const user = new User({
        name: name,
        phone: phone,
        username: username,
        password: password,
      });
      user.save((err) => {
        if (err) {
          res.send({message:"Error Occured"});
        } else {
          res.send({ message: "Account Created Successfully,Please Login.." });
        }
      });
    }
  });
});

app.listen(8000, function () {
  console.log("API running on port 8000!!");
});
