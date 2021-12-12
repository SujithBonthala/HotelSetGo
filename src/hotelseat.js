import loginAvatar from "./login_avatar.png";
import './hotelseat.css';
import { useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

const options1=[
    {
        label: "",
        value: "",
    },
    {
        label: "01",
        value: "01",
    },
    {
        label: "02",
        value: "02",
    },
    {
        label: "03",
        value: "03",
    },
    {
        label: "04",
        value: "04",
    },
    {
        label: "05",
        value: "05",
    },
    {
        label: "06",
        value: "06",
    },
    {
        label: "07",
        value: "07",
    },
    {
        label: "08",
        value: "08",
    },
    {
        label: "09",
        value: "09",
    },
    {
        label: "10",
        value: "10",
    },
    {
        label: "11",
        value: "11",
    },
    {
        label: "12",
        value: "12",
    },
];
const options2=[
    {
        label: "",
        value: "",
    },
    {
        label: "00",
        value: "00",
    },
    {
        label: "30",
        value: "30",
    },
];
const options3=[
    {
        label: "",
        value: "",
    },
    {
        label: "AM",
        value: "AM",
    },
    {
        label: "PM",
        value: "PM",
    },
];


function Hotelseat({ setPayment2,user,set_Reserved_Seat}){
    //var reserved_seats=[];
    
    const history = useHistory();
    const [hotel, setHotel] = useState({

        guests:"",
        date:"",
        hour:"",
        minute:"",
        ampm:"",
        requests:"",
    
    });
    const [reserved_seats,setSeat]=useState({id:"", from: "", to: "",person:"",phno:""})

    const handleChange = (e) => {
        const { name, value } = e.target;
        setHotel({
            ...hotel,
            [name]: value,
        });
    };

    var d = new Date();
    var d1 = new Date();
    d.setMonth(d.getMonth() + 1);
    //d1.setMonth(d1.getMonth() + 1);
    var date1 = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate();
    var date2 = d1.getFullYear() + "-" + d1.getMonth() + "-" + d1.getDate();
    var seats = [];
    var price = 0;

    const Search = () => {
        const {guests,date,hour,minute,ampm,requests} = hotel;
        var date3 = new Date(date);
        //date3.setMonth(date3.getMonth() - 1);
        var date_valid = new Date(d);
        var date_today = new Date(d1);
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
        //alert(date+"  "+date_today+"  "+date_valid);
        if ((date_today.getTime()==date3.getTime() && bool1)||(date_today.getTime()<date3.getTime() && date3.getTime()<=date_valid.getTime() && bool2) && guests<=6 && guests>0) {
            axios.post("http://localhost:8000/hotelseat", hotel)
                .then((res) => {
                    console.log(res.data);
                    seats = res.data.seat;
                    swal(res.data.message);
                    setSeat({ id: seats._id, from: res.data.from, to: res.data.to ,person:user.name,phno:user.phone});
                    set_Reserved_Seat({ id: seats._id, from: res.data.from, to: res.data.to ,person:user.name,phno:user.phone});
                    price = seats.price*guests;
                    //document.getElementById("l8").innerHTML = "Rs." + " " + price;
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
                    setPayment2({price:price,num:guests,type:seater});
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
            swal("Please enter a valid arrival time/check if all the fields are filled");
        }
    }

    const Confirm = () => {
        console.log(reserved_seats);
        if (reserved_seats) {
        seats = [];
        setSeat({id:"",from:"",to:""})
        history.push("/paymentpage2");
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
            <div className="box1">
                <br/><br/>
                <h3>Points to note before proceeding for Restaurant Reservation</h3><br/><br/>
                <ul>
                    <li>
                        Breakfast Timings - 7 AM to 10 AM
                    </li><br/>
                    <li>
                        Lunch Timings - 1 PM to 3 PM
                    </li><br/>
                    <li>
                        Dinner Timings - 8 PM to 10 PM
                    </li><br/>
                    <li>
                        Reservations start only 30 days before the day the booking has to be done on
                    </li>
                </ul>
            </div>
            <div className="box2">
                <h1>Restaurant Reservation</h1>
                <form action="login.html">
                    Number of Guests: 
                    <input type="text" name="guests" placeholder="Enter number of guests" onChange={handleChange}/><br/><br/>
                    Date: <input type="date" name="date" placeholder = "Date" onChange={handleChange}/>
                    Arrival Time: 
                    <select id='s1' name="hour" onChange={handleChange}>
                        {options1.map((option) => (
                        <option value={option.value}>{option.label}</option>))}
                    </select>: 
                     <select id='s2' name="minute" onChange={handleChange}>
                        {options2.map((option) => (
                        <option value={option.value}>{option.label}</option>))}
                    </select>  
                     <select id='s3' name="ampm" onChange={handleChange}>
                        {options3.map((option) => (
                        <option value={option.value}>{option.label}</option>))}
                    </select><br/><br/>
                    Any Special Requests? <input type="text" name="requests" placeholder = "Special Requests"/><br/>
                    <input type="button" value="Back" onClick={()=>{history.push('/hotelhome')}}/>
                    <input type="button" value="Check Availability" onClick={Search}/>
                    <input type="button" value="Confirm" onClick={Confirm}/>
                </form>
            </div>
        </div>
    )
}

export default Hotelseat;