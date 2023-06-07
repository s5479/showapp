import React, { useState } from "react";
import "./Booking.css";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

function Booking() {
  const { name } = useParams();
  const [seat, setSeat] = useState();
  const [date, setDate] = useState();
  const navigate = useNavigate();

  const confirmSeat = (event) => {
    event.preventDefault();
    if (!seat || !date) {
      swal("oops!", "Please fill all the fields", "Error");
    } else {
      swal("Good job!", "Your seat has booked Successfully", "success");
      navigate("/");
    }
  };
  return (
    <div className="form">
      <form>
        <h2 className="text-center"> Movie Name: {name}</h2>
        <div className="form-group">
          <label for="exampleInputEmail1">Seat No.</label>
          <input
            type="number"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Choose your seat number"
            onChange={(e) => setSeat(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Date</label>
          <input
            type="date"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <button type="submit" className="submit" onClick={confirmSeat}>
          Pay Now
        </button>
      </form>
    </div>
  );
}

export default Booking;
