// 날짜 목록을 표시
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Day } from "../components";

const DayListPage = () => {
  const [days, setDays] = useState([]);

  const getDays = async () => {
    try {
      const { data: dayListData } = await axios.get(
        // 구조 분해 할당 (Destructuring Assignment)
        // const response = await axios.get("http://localhost:3001/days");
        // const dayListData = response.data; // 응답 객체에서 data만 꺼내서 저장

        "http://localhost:3001/days"

      );
      setDays(dayListData);
    } catch (e) {
      alert(e);
    }
  };

  useEffect(() => {
    getDays();
  }, []);

  return (
    <ul className="list_day">
      {days.map((day) => (
        <Day key={day.id} day={day.day} />
      ))}
    </ul>
  );
};

export default DayListPage;


