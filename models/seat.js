var mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
    type: String,
    tableno: Number,
    max_occupancy: Number,
    price: Number,
    date: String,
    reserved: [
        {
            from: String,
            to: String,
            person:"",
            phno:"",
        },
    ],
});

const Hotel = new mongoose.model("Hotel", hotelSchema);

Hotel.count().then((count) => {
    if (count != 15) {
        for (let index = 1; index < 6; index++) {
            var newHotelTable = new Hotel({
                type: "Six-Seater",
                tableno: index,
                max_occupancy: 6,
                price: 449,
                date: "1970-01-01",
                reserved: [{ from: "12:00AM", to: "12:00PM",person:"",phno:"" }],
            });
            newHotelTable.save((err) => {
                if (err) {
                    console.log("Error Occured ");
                }
            });
        }

        for (let index = 6; index < 11; index++) {
            var newHotelTable = new Hotel({
                type: "Four-Seater",
                tableno: index,
                max_occupancy: 4,
                price: 429,
                date: "1970-01-01",
                reserved: [{ from: "12:00AM", to: "12:00PM",person:"",phno:"" }],
            });
            newHotelTable.save((err) => {
                if (err) {
                    console.log("Error Occured ");
                }
            });
        }

        for (let index = 11; index < 16; index++) {
            var newHotelTable = new Hotel({
                type: "Two-Seater",
                tableno: index,
                max_occupancy: 2,
                price: 399,
                date: "1970-01-01",
                reserved: [{ from: "12:00AM", to: "12:00PM",person:"",phno:"" }],
            });
            newHotelTable.save((err) => {
                if (err) {
                    console.log("Error Occured ");
                }
            });
        }
    }
});

module.exports = Hotel;