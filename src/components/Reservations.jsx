// Reservations.js
import React, { useState } from "react";

import BookingForm from "./BookingForm";
import Popup from "./Popup";
import { useNavigate } from "react-router-dom";
import { useReducer } from "react";
import { fetchAPI } from "../utils/api";

const Reservations = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormSubmit = (e, formValues) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    const areAllFieldsFilled = Object.values(formValues).every(
      (value) => value
    );

    if (areAllFieldsFilled) {
      setIsPopupVisible(true);
    }
  };

  const updateTimes = (availableTimes, date) => {
    const response = fetchAPI(new Date(date));
    return response.length !== 0 ? response : availableTimes;
  };

  const initializeTimes = (initialAvailableTimes) => [
    ...initialAvailableTimes,
    ...fetchAPI(new Date()),
  ];

  const [availableTimes, dispatchOnDateChange] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  return (
    <div  id="reservations" className="reservation content-wrapper">
      <div className="reservation-card">
        <h1 className="reservation-title">Table reservation</h1>
        <BookingForm
          availableTimes={availableTimes}
          dispatchOnDateChange={dispatchOnDateChange}
          onFormSubmit={handleFormSubmit}
          isFormSubmitted={isFormSubmitted}
        />
      </div>

      {isPopupVisible && (
        <Popup
          onClose={() => {
            setIsPopupVisible(false);
          }}
          title="Reservation Completed!"
          description="Thank you for choosing Little Lemon! Your reservation has been successfully made. You will receive a confirmation email with the details of your reservation. We are excited to see you soon!"
        />
      )}
    </div>
  );
};

export default Reservations;