import React from "react";
import { Link } from "react-router-dom";

const Day = ({ day }) => {
  return (
    <li>
      <Link to={`/day/${day}`}>Day {day}</Link>
    </li>
  );
};

export default Day;
