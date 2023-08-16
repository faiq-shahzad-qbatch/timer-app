import React, { useState } from "react";
import "./App.css";
import DatePickerComponent from "./components/DatePickerComponent";
import CountdownTimer from "./components/CountdownTimer";

function TimerApp() {
  const [selectedDate, setSelectedData] = useState(null);

  return (
    <>
      <div class="flex h-screen w-full flex-col items-center justify-center space-y-8 bg-gradient-to-r from-yellow-200 via-orange-400 to-red-600 sepia">
        <h1 className="text-4xl font-bold">Timer App</h1>
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
