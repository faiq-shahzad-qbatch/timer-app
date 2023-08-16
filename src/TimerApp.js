import React, { useState } from "react";
import "./App.css";
import DatePickerComponent from "./components/DatePickerComponent";
import CountdownTimer from "./components/CountdownTimer";

function TimerApp() {
  const [selectedDate, setSelectedData] = useState(null);

  return (
    <>
      <div className="App">
        <h1>Timer App</h1>
        {selectedDate ? (
          <CountdownTimer selectedDate={selectedDate} />
        ) : (
          <DatePickerComponent
            selectedDate={selectedDate}
            setSelectedData={setSelectedData}
          />
        )}
      </div>
    </>
  );
}

export default TimerApp;
