import loginAvatar from "./login_avatar.png";
import "./lodgingPage.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
const options = [
  {
    label: "",
    value: "",
  },
  {
    label: "King-Sized bedroom",
    value: "king",
  },
  {
    label: "Queen-Sized bedroom",
    value: "queen",
  },
  {
    label: "Single bedroom",
    value: "single",
  },
  {
    label: "Double bedroom",
    value: "double",
  },
];
var reserved_rooms = [];
function LodgingPage({ setPayment }) {
  const history = useHistory();
  const [room, setRoom] = useState({
    from: "",
    to: "",
    roomtype: "",
    number: 0,
  });

  var rooms = [];
  var price = 0;
  var d = new Date();
  var d2 = new Date();
  d.setDate(d.getDate() + 30);
  var to_date = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate();
  var from_date = d2.getFullYear() + "-" + d2.getMonth() + "-" + d2.getDate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoom({
      ...room,
      [name]: value,
    });
  };

  const Search = () => {
    const { from, to, roomtype, number } = room;
    //alert(to_date);
    //alert(from);
    var date1 = new Date(to);
    date1.setMonth(date1.getMonth() - 1);
    var date2 = new Date(to_date);
    var date3 = new Date(from);
    date3.setMonth(date3.getMonth() - 1);
    var date4 = new Date(from_date);
    if (date3 >= date4 && date1 <= date2 && date1>=date3) {
      axios
        .post("http://localhost:8000/lodgingPage", room)
        .then((res) => {
          console.log(res.data);
          rooms = res.data.room;
          swal(res.data.message);
          if (rooms.length >= number) {
            for (let index = 0; index < number; index++) {
              price = price + rooms[index].price;
              //alert(price);
              //reserved.id= rooms[index]._id;
              //alert(reserved.id)
              //alert(rooms[index]._id);
              //reserved.from = from;
              //reserved.to = to;
              reserved_rooms.push({ id: rooms[index]._id, from: from, to: to });
              //alert(reserved_rooms[index].id);
            }
            document.getElementById("l8").innerHTML = "Rs." + " " + price;
            setPayment({price:price,num:number,type:roomtype});
            console.log(reserved_rooms);
            //setRoom({from:from,to:to,roomtype:roomtype,number:number,id:rooms[0]._id})
          } else {
            swal("No rooms are available!!");
          }
        })
        .catch((e) => {
          alert(e + "hello");
        });
    } else {
      swal("Please Enter a Valid check-in/check-out date");
    }
  };

  const Confirm = () => {
    console.log(reserved_rooms);
    if (reserved_rooms.length>0) {
      for (let index = 0; index < reserved_rooms.length; index++) {
        axios
          .put("http://localhost:8000/lodgingPage", reserved_rooms[index])
          .then((res) => {
            swal(res.data.message);
            //setRoom({ id: "" });
          });
      }
      rooms = [];
      reserved_rooms = [];
      history.push("/paymentpage");
    } 
    else {
      swal("Booking Cannot be made as there are no rooms available!!");
    }
  };

  return (
    <div className="full2">
      <div className="top4">
        <h1>HotelSetGo</h1>
        <img src={loginAvatar} alt="avatar" className="avatar4" />
      </div>
      <br />
      <br />
      <br />
      <br />
      <div>
        <form id="f1">
          <br />
          <br />
          <br />
          <label id="l1">
            <b>Lodging</b>
          </label>
          <br />
          <br />
          <br />
          <br />
          <label id="l2">
            <b>Check-In: </b>
          </label>
          <input
            type="date"
            id="i1"
            name="from"
            value={room.from}
            onChange={handleChange}
          />
          <label id="l3">
            <b>Check-Out: </b>
          </label>
          <input
            type="date"
            id="i2"
            name="to"
            value={room.to}
            onChange={handleChange}
          />
          <br />
          <br />
          <label for="room" id="l4">
            <b>Room Type: </b>
          </label>
          <select id="s1" name="roomtype" onChange={handleChange}>
            {options.map((option) => (
              <option value={option.label}>{option.label}</option>
            ))}
          </select>
          <label for="num" id="l5">
            <b>No. of rooms: </b>
          </label>
          <input
            type="number"
            name="number"
            id="i3"
            value={room.number}
            onChange={handleChange}
          />
          <br />
          <br />
          <label for="cno" id="l6">
            <b>Contact No.: </b>
          </label>
          <input type="text" name="cno" id="i4" />
          <label id="l7">
            <b>Total Price: </b>
          </label>
          <label id="l8">
            <b> </b>
          </label>
          <br />
          <br />
          <br />
          <br />
          <input type="button" value="Search Room" id="b1" onClick={Search} />
          <input
            type="button"
            value="Confirm booking"
            id="b1"
            onClick={Confirm}
          />
        </form>
      </div>
    </div>
  );
}

export default LodgingPage;