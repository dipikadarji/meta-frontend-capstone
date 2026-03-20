import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI } from "../api";

export function initializeTimes() {
  return fetchAPI(new Date());
}

export function updateTimes(state, action) {
  if (action.type === "UPDATE_TIMES") {
    return fetchAPI(new Date(action.payload));
  }
  return state;
}

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const handleSubmit = (formData) => {
    submitAPI(formData);
    navigate("/confirmed");
  };

  return (
    <main>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        onSubmit={handleSubmit}
      />
    </main>
  );
}
export default Main;