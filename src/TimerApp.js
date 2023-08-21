import "./App.css";

import React, { useState } from "react";

import CountdownTimer from "./components/CountdownTimer";
import DatePickerComponent from "./components/DatePickerComponent";

function TimerApp() {
  const [selectedDate, setSelectedData] = useState(null);

  return (
    <>
      <div class="flex h-screen w-full flex-col items-center justify-center space-y-8 bg-gradient-to-r from-cyan-200 to-slate-600 text-center">
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
