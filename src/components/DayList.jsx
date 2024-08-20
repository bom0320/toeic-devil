// 날짜 목록을 표시
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const DayList = () => {
  const [days, setDays] = useState([]);

  const getData = async () => {
    try {
      const { data: dayListData } = await axios.get(
        "http://localhost:3001/days"
      );
      setDays(dayListData);
    } catch (e) {
      alert(e);
    }
  };

  // useEffect는 컴포넌트가 처음 렌더링될 때 getData 함수를 호출하여 서버에서 날짜 목록을 가져옵니다.
  useEffect(() => {
    getData();
  }, []);

  return (
    <ul className="list_day">
      {days.map((day) => (
        <li key={day.id}>
          <Link to={`/day/${day.day}`}>Day {day.day}</Link>
        </li>
      ))}
    </ul>
  );
};

export default DayList;
