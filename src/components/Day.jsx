import React from "react";
import { Link } from "react-router-dom";

const Day = ({ day }) => {
  return (
    <li>
      <Link to={`/day/${day}`} onClick={() => console.log(day)}>
        Day {day}
      </Link>
    </li>
  );
};

export default Day;


