import axios from "axios";
import React, { useEffect, useState } from "react";

const DayInput = ({ dayRef }) => {
  const [days, setDays] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/days").then((response) => {
      setDays(response.data);
    });
  });

  return (
    <div>
      <div className="input_area">
        <label>Day</label>
        <select ref={dayRef}>
          {days.map((day) => (
            <option key={day.id} value={day.day}>
              {day.day}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DayInput;
