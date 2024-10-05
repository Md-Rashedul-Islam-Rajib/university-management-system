import React, { useEffect, useState } from "react";

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const TimeAndDate: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  // Format the time to display as HH:MM:SS
  const formattedTime = currentTime.toLocaleTimeString();
  const formattedDate = currentTime.toLocaleDateString();
  const dayIndex = currentTime.getDay();

  return (
    <div className="flex flex-col">
      <div className="text-white text-2xl md:text-4xl font-bold font-orbitron mb-2 glow-text">
        {formattedTime}
      </div>
      <div className="text-white md:text-xl font-orbitron">
        {dayNames[dayIndex]} {formattedDate}
      </div>
    </div>
  );
};

export default TimeAndDate;
