// 날짜 목록을 표시
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const DayList = () => {
  const [days, setDays] = useState([]);
  // 여기 컴포넌트 상태 days 는 자체적으로 data.json 의 데이터를 나타내는 것이 아니라, HTTP 요청을 통해
  // 그 데이터를 가져 온 후 상태로 관리하게 된다.

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

  // getData,useEffect : 이 코드들에 의해 컴포넌트 상태 days 는 처음에는 빈 배열로 초기화되어 있었지만,
  // HTTP 요청을 통해 data.json 파일의 days 데이터를 서버에서 가져오고, 그 데이터를 상태로 저장하면서
  // data.json 의 days 와 연결된 것 처럼 동작하는 것이다.

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
