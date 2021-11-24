import loginAvatar from "./login_avatar.png";
import './hotelseat.css';
import { useHistory } from "react-router-dom";
import { useState } from "react";

const options1=[
    {
        label: "",
        value: "",
    },
    {
        label: "01",
        value: "one",
    },
    {
        label: "02",
        value: "two",
    },
    {
        label: "03",
        value: "three",
    },
    {
        label: "04",
        value: "four",
    },
    {
        label: "05",
        value: "five",
    },
    {
        label: "06",
        value: "six",
    },
    {
        label: "07",
        value: "seven",
    },
    {
        label: "08",
        value: "eight",
    },
    {
        label: "09",
        value: "nine",
    },
    {
        label: "10",
        value: "ten",
    },
    {
        label: "11",
        value: "eleven",
    },
    {
        label: "12",
        value: "twelve",
    },
];
const options2=[
    {
        label: "",
        value: "",
    },
    {
        label: "00",
        value: "zero",
    },
    {
        label: "30",
        value: "thirty",
    },
];
const options3=[
    {
        label: "",
        value: "",
    },
    {
        label: "AM",
        value: "am",
    },
    {
        label: "PM",
        value: "pm",
    },
];
var reserved_seats=[]

function Hotelseat({ setPayment }){

    const history = useHistory();
    const [hotel, setHotel] = useState({

        guests:"",
        date:"",
        hour:"",
        minute:"",
        ampm:"",
        requests:"",
    
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setHotel({
            ...room,
            [name]: value,
        });
    };

    var d = new Date();
    var d1 = new Date();
    d.setDate(d.getDate() + 30);
    var date1 = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate();
    var date2 = d1.getFullYear() + "-" + d1.getMonth() + "-" + d1.getDate();
    var seats = [];
    var price = 0;

    const Search = () => {
        const {guests,date,hour,minute,ampm,requests} = hotel;
        var date3 = new Date(date);
        date3.setMonth(date3.getMonth() - 1);
        var date_valid = new Date(date1);
        var date_today = new Date(date2);
        var time = new String();
        var time1;
        var time_array = new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' }).split(":");
        if(time_array[0].length == 1)
        {
            time[0]="0";
            time[1]=time_array[0][0];
            time1=time[0]+time[1];
        }
        else
        {
            time[0] = time_array[0][0];
            time[1] = time_array[0][1];
            time1=time[0]+time[1];
        }
        var time_array1 = time_array[1].split(" ");
        var time2 = time_array1[0];
        var time3 = time_array1[1];
        var bool1 = hour && minute && ampm && ((ampm=="PM" && time3=="AM")||(ampm=="AM" && time3=="AM" && (time1<hour)||(time1==hour && time2<=minute))
                                                ||(ampm=="PM" && time3=="PM" && (time1<hour)||(time1==hour && time2<=minute))) && (!(ampm=="AM" && time3=="PM"));
        var bool2 = hour && minute && ampm && (ampm=="PM" && ((hour>="01"&&hour<="03")||(hour>="08"&&hour<="10")))||(hour=="AM"&&hour>="07"&&hour<="10");
        if ((date_today==date2 && bool1)||(date_today<date2 && date2<=date_valid && bool2) && guests<=6 && guests>0) {
            axios.post("http://localhost:8000/hotelseat", hotel)
                .then((res) => {
                    console.log(res.data);
                    seats = res.data.seat;
                    swal(res.data.message);
                    reserved_seats.push({ id: seats._id, from: res.data.from, to: res.data.to });
                    price = seats.price*guests;
                    document.getElementById("l8").innerHTML = "Rs." + " " + price;
                    var seater;
                    if(guests<=2)
                    {
                        seater="Two-Seater";
                    }
                    else if(guests<=4)
                    {
                        seater="Four-Seater";
                    }
                    else
                    {
                        seater="Six-Seater";
                    }
                    setPayment({price:price,num:guests,type:seater});
                    console.log(reserved_seats);
                    // else {
                    //     swal("Maximum table seating capacity of our hotel is 6!");
                    // }
                })
            .catch((e) => {
                alert(e + "hello");
            });
        }
        else {
            swal("Please enter a valid arrival time");
        }
    }

    const Confirm = () => {
        console.log(reserved_seats);
        if (reserved_seats.length>0) {
            axios
            .put("http://localhost:8000/hotelseat", reserved_rooms[0])
            .then((res) => {
                swal(res.data.message);
        });
        seats = [];
        reserved_seats = [];
        history.push("/paymentpage");
        } 
        else {
            swal("Booking cannot be made as there are no tables available!");
        }
    }

    return(
        <div className="seatbody">
            <div className="top3">
                <h1>HotelSetGo</h1>
                <img src={loginAvatar} alt="avatar" className="avatar3"/>
            </div>
            <div className="box2">
                <h1>Restaurant Reservation</h1>
                <form action="login.html">

                    Number of Guests: 
                    <input type="text" name="guests" placeholder="Enter number of guests" value={hotel.guests} onChange={handleChange}/><br/><br/>

                    Date: <input type="date" name="date" placeholder = "Date" value={hotel.date} onChange={handleChange}/>

                    Arrival Time:
                    <select id='s1' name="hour" value={hotel.hour} onChange={handleChange}>
                        {options1.map((option) => (
                        <option value={option.value}>{option.label}</option>))}
                    </select>:

                     <select id='s2' name="minute" value={hotel.minute} onChange={handleChange}>
                        {options2.map((option) => (
                        <option value={option.value}>{option.label}</option>))}
                    </select>

                     <select id='s3' name="ampm" value={hotel.ampm} onChange={handleChange}>
                        {options3.map((option) => (
                        <option value={option.value}>{option.label}</option>))}
                    </select><br/><br/>

                    Any Special Requests? <input type="text" name="requests" placeholder = "Special Requests"/><br/>

                    <input type="button" value="Back" onClick={()=>{history.push('/hotelhome')}}/>

                    <input type="button" value="Check Availability" onClick={Search} />

                    <input type="button" value="Confirm" onClick={Confirm} />
                </form>
            </div>
        </div>
    )
}

export default Hotelseat;