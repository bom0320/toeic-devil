// 특정 날짜를 클릭해서 들어왔을 때 단어들이 나오는 페이지
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Word from "./Word";
import axios from "axios";

const Day = () => {
  const { day } = useParams();
  const [wordList, setWordList] = useState([]);

  const getWordList = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/words?day=${day}`
      );
      setWordList(data);
    } catch (e) {
      alert(e);
    }
  };

  useEffect(() => {
    getWordList();
  }, []);

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {wordList.map((word) => (
            <Word key={word.id} word={word} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Day;

