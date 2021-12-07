var mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  type: String,
  roomno: Number,
  max_occupancy: [{ number: Number }],
  price: Number,
  reserved: [
    {
      from: String,
      to: String,
      person:String,
      phno:String
    },
  ],
});

const Room = new mongoose.model("Room", roomSchema);
var c;

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

Room.count().then((count) => {
  if (count != 40) {
    for (let index = 1; index < 11; index++) {
      var newRoom = new Room({
        type: "King-Sized bedroom (Rs.5000)",
        roomno: index,
        max_occupancy: [{ number: getRndInteger(1, 6) }],
        price: 5000,
        reserved: [{ from: "1970-01-01", to: "1970-01-02",person:" ",phno : " " }],
      });
      newRoom.save((err) => {
        if (err) {
          console.log("Error Occured ");
        }
      });
    }

    for (let index = 11; index < 21; index++) {
      var newRoom = new Room({
        type: "Queen-Sized bedroom (Rs.3000)",
        roomno: index,
        max_occupancy: [{ number: getRndInteger(1, 4) }],
        price: 3000,
        reserved: [{ from: "1970-01-01", to: "1970-01-02",person:" ",phno : " " }],
      });
      newRoom.save((err) => {
        if (err) {
          console.log("Error Occured ");
        }
      });
    }

    for (let index = 21; index < 31; index++) {
      var newRoom = new Room({
        type: "Double bedroom (Rs.2000)",
        roomno: index,
        max_occupancy: [{ number: getRndInteger(1, 2) }],
        price: 2000,
        reserved: [{ from: "1970-01-01", to: "1970-01-02",person:" ",phno : " " }],
      });

      newRoom.save((err) => {
        if (err) {
          console.log("Error Occured ");
        }
      });
    }

    for (let index = 31; index < 41; index++) {
      var newRoom = new Room({
        type: "Single bedroom (Rs.1000)",
        roomno: index,
        max_occupancy: [{ number: 1 }],
        price: 1000,
        reserved: [{ from: "1970-01-01", to: "1970-01-02",person:" ",phno : " " }],
      });
      newRoom.save((err) => {
        if (err) {
          console.log("Error Occured ");
        }
      });
    }
  }
});

module.exports = Room;
