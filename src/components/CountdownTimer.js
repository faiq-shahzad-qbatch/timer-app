import React, { useEffect, useState } from "react";

import moment from "moment";

function CountdownTimer({ selectedDate }) {
  const [timeLeft, setTimeLeft] = useState("");

  function formateDate(duration) {
    // Object.entries({ h: "hours", y: "years", d: "days", m: "minutes" }).reduce((obj, val, k) => duration[val]() )

    const units = [
      { value: duration.years(), label: "year(s)" },
      { value: duration.months(), label: "month(s)" },
      { value: duration.days(), label: "day(s)" },
      { value: duration.hours(), label: "hour(s)" },
      { value: duration.minutes(), label: "minutes(s)" },
    ];

    return units
      .reduce(
        (acc, { value, label }) =>
          value ? (acc += `${value} ${label} `) : acc,
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
      <p className="text-4xl font-normal">
        Time Left Until: <strong>{moment(selectedDate).format("LLLL")}</strong>
      </p>
      <div className=" text-6xl font-extrabold">{timeLeft}</div>
    </>
  );
}

export default CountdownTimer;
