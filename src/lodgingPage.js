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
    label: "King-Sized bedroom (Rs.5000)",
    value: "king",
  },
  {
    label: "Queen-Sized bedroom (Rs.3000)",
    value: "queen",
  },
  {
    label: "Single bedroom (Rs.1000)",
    value: "single",
  },
  {
    label: "Double bedroom (Rs.2000)",
    value: "double",
  },
];
var reserved_rooms = [];
function LodgingPage({ setPayment,user,setReserved }) {
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
    //date1.setMonth(date1.getMonth() - 1);
    var date1_new=date1.getFullYear()+"-"+date1.getMonth()+"-"+date1.getDate();
    var date2 = new Date(d);
    var date3 = new Date(from);
    var date3_new=date3.getFullYear()+"-"+date3.getMonth()+"-"+date3.getDate();
    //date3.setMonth(date3.getMonth() - 1);
    var date4 = new Date(d2);
    //alert(date1.getTime()+"*"+date2.getTime()+" *"+date3.getTime()+"* "+date4.getTime())
    var no_days=date1.getTime()-date3.getTime();
    var no_days_final=no_days/(1000*3600*24)
    if ((date3.getTime()>=date4.getTime()) && (date1.getTime() <= date2.getTime()) && (date1.getTime()>date3.getTime()) && number>0) {
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
              reserved_rooms.push({ id: rooms[index]._id, from: from, to: to ,person:user.name,phno:user.phone});
              //alert(reserved_rooms[index].id);
            }
            price=price*no_days_final;
            console.log(no_days_final);
            document.getElementById("l8").innerHTML = "Rs." + " " + price;
            setPayment({price:price,num:number,type:roomtype,max:rooms[0].max_occupancy});
            console.log(reserved_rooms);
            setReserved(reserved_rooms);
            //setRoom({from:from,to:to,roomtype:roomtype,number:number,id:rooms[0]._id})
          } else {
            swal("No rooms are available!!");
          }
        })
        .catch((e) => {
          alert(e + "hello");
        });
    } else {
      swal("Please Enter a valid input data");
    }
  };

  const Confirm = () => {
    console.log(reserved_rooms);
    if (reserved_rooms.length>0) {
      
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
          <input type="button" value="Back" id="b1" onClick={()=>{history.push('/hotelhome')}} /><br/>
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
