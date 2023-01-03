import { useNavigate } from "react-router-dom";
import "./Reservations.css";
import { useState } from "react";
export default function Reservations() {
  const navigate = useNavigate();

  const [reservations, setReservations] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: 1,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservations((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your reservation!");
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Reservations</h1>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={reservations.name}
          onChange={(e) => handleChange(e)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={reservations.email}
          onChange={(e) => handleChange(e)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={reservations.phone}
          onChange={(e) => handleChange(e)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          name="date"
          id="date"
          value={reservations.date}
          onChange={(e) => handleChange(e)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="time">Time</label>
        <input
          type="time"
          name="time"
          id="time"
          value={reservations.time}
          onChange={(e) => handleChange(e)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="guests">Guests</label>
        <input
          type="number"
          name="guests"
          id="guests"
          min={1}
          max={10}
          value={reservations.guests}
          onChange={(e) => handleChange(e)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          value={reservations.message}
          onChange={(e) => handleChange(e)}
          required
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
