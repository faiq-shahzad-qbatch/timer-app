import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

function DatePickerComponent({ selectedDate, setSelectedData }) {
  function handleDateChange(date) {
    if (date > new Date()) {
      setSelectedData(date);
    }
  }

  return (
    <>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        minDate={moment().add(1, "days").toDate()}
        dateFormat={"dd MMMM yyyy"}
        placeholderText="Please select a date"
      />
    </>
  );
}

export default DatePickerComponent;
