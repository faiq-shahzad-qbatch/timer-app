import React, { useEffect, useState } from "react";
import moment from "moment";

function CountdownTimer({ selectedDate }) {
  const [timeLeft, setTimeLeft] = useState("");

  function formateDate(duration) {
    // Object.entries({ h: "hours", y: "years", d: "days", m: "minutes" }).reduce((obj, val, k) => duration[val]() )

    const units = [
      { value: duration.years(), label: "y(s)" },
      { value: duration.months(), label: "m(s)" },
      { value: duration.days(), label: "d(s)" },
      { value: duration.hours(), label: "h(s)" },
      { value: duration.minutes(), label: "m(s)" },
    ];

    return units
      .reduce(
        (acc, { value, label }) => (value ? (acc += `${value}${label} `) : acc),
        "",
      )
      .concat(`${duration.seconds()}s`);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = moment();
      const targetTime = moment(selectedDate);
      const duration = moment.duration(targetTime.diff(currentTime));

      if (duration.asSeconds() <= 0) {
        clearInterval(interval);
        setTimeLeft("TIME UP!");
      } else {
        setTimeLeft(formateDate(duration));
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [selectedDate]);

  return (
    <>
      <p>
        Time Left Until: <strong>{moment(selectedDate).format("LLLL")}</strong>
      </p>
      <div>{timeLeft}</div>
    </>
  );
}

export default CountdownTimer;
