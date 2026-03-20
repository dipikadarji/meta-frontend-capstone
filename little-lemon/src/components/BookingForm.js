import { useState } from "react";

function BookingForm({ availableTimes, dispatch, onSubmit }) {
  const [date, setDate]         = useState("");
  const [time, setTime]         = useState("");
  const [guests, setGuests]     = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [errors, setErrors]     = useState({});

  const validate = () => {
    const errs = {};
    if (!date) errs.date = "Date is required";
    else if (new Date(date) < new Date()) errs.date = "Date cannot be in the past";
    if (!time) errs.time = "Please select a time";
    if (guests < 1 || guests > 10) errs.guests = "Guests must be between 1 and 10";
    return errs;
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
    dispatch({ type: "UPDATE_TIMES", payload: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    onSubmit({ date, time, guests, occasion });
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth:"480px", margin:"40px auto", padding:"24px" }}>
      <h2>Reserve a Table</h2>

      <label>Date</label>
      <input type="date" value={date} onChange={handleDateChange} aria-label="Reservation date" />
      {errors.date && <p style={{ color:"red" }}>{errors.date}</p>}

      <label>Time</label>
      <select value={time} onChange={e => setTime(e.target.value)} aria-label="Reservation time">
        <option value="">Select a time</option>
        {availableTimes.map(t => <option key={t} value={t}>{t}</option>)}
      </select>
      {errors.time && <p style={{ color:"red" }}>{errors.time}</p>}

      <label>Guests</label>
      <input type="number" min="1" max="10" value={guests}
        onChange={e => setGuests(Number(e.target.value))} aria-label="Number of guests" />
      {errors.guests && <p style={{ color:"red" }}>{errors.guests}</p>}

      <label>Occasion</label>
      <select value={occasion} onChange={e => setOccasion(e.target.value)} aria-label="Occasion">
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>Other</option>
      </select>

      <button type="submit" style={{ background:"#F4CE14", border:"none", padding:"12px 32px",
        borderRadius:"8px", fontWeight:"500", cursor:"pointer", marginTop:"16px" }}>
        Make Your Reservation
      </button>
    </form>
  );
}
export default BookingForm;