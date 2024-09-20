// 특정 날짜를 클릭해서 들어왔을 때 단어들이 나오는 페이지
import React from "react";
import { useParams } from "react-router-dom";
import WordList from "./WordList";

const DayDetail = () => {
  const { day } = useParams();

  return (
    <>
      <h2>Day {day}</h2>
      <WordList day={day} />
    </>
  );
};

export default DayDetail;
