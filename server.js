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

const User = require("./models/user");
const Room = require("./models/room");

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
      res.send({ message: "Username already exists" });
    } else {
      const user = new User({
        name: name,
        phone: phone,
        username: username,
        password: password,
      });
      user.save((err) => {
        if (err) {
          res.send({ message: "Error Occured" });
        } else {
          res.send({ message: "Account Created Successfully,Please Login.." });
        }
      });
    }
  });
});

app.post("/lodgingPage", function (req, res) {
  const { from, to, roomtype, number } = req.body;
  console.log(req.body);
  Room.find(
    {
      type: roomtype,
      max_occupancy: { $elemMatch: { number: number  }, }
      reserved: {
        $not: {
          $elemMatch: {
            from: { $lte: to.substring(0, 10) },
            to: { $gte: from.substring(0, 10) },
          },
        },
      },
    },
    function (error, rooms) {
      if (error) {
        res.send({
          message: error,
        });
      } else {
        console.log(rooms);
        res.json({
          message: "Room Satisfying Your Condition is found!!",
          room: rooms,
        });
      }
    }
  );
});

app.put("/lodgingPage", function (req, res) {
  console.log(req.body);
  Room.findByIdAndUpdate(
    req.body.id,
    {
      $push: { reserved: { from: req.body.from, to: req.body.to } },
    },
    {
      safe: true,
      new: true,
    },
    function (err, room) {
      if (err) {
        res.send({ message: err });
      } else {
        res.send({ message: "Room Booked Successfully!!" });
      }
    }
  );
});

app.listen(8000, function () {
  console.log("API running on port 8000!!");
});
