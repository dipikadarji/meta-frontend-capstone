import { render, screen } from "@testing-library/react";
import { initializeTimes, updateTimes } from "./components/Main";
import BookingForm from "./components/BookingForm";

test("initializeTimes returns available times", () => {
  const times = initializeTimes();
  expect(times.length).toBeGreaterThan(0);
});

test("updateTimes returns new times when date changes", () => {
  const initialTimes = initializeTimes();
  const newTimes = updateTimes(initialTimes, {
    type: "UPDATE_TIMES",
    payload: "2025-12-25"
  });
  expect(Array.isArray(newTimes)).toBe(true);
});

test("renders booking form heading", () => {
  render(<BookingForm availableTimes={["17:00","18:00"]} dispatch={()=>{}} onSubmit={()=>{}} />);
  expect(screen.getByText(/reserve a table/i)).toBeInTheDocument();
});

test("submit button is in the document", () => {
  render(<BookingForm availableTimes={["17:00"]} dispatch={()=>{}} onSubmit={()=>{}} />);
  const btn = screen.getByRole("button", { name: /make your reservation/i });
  expect(btn).toBeInTheDocument();
});