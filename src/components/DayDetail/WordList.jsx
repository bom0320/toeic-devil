import React, { useEffect, useState } from "react";
import Word from "./Word";
import axios from "axios";

const WordList = ({ day }) => {
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
    <table>
      <tbody>
        {wordList.map((word) => (
          <Word key={word.id} word={word} getWordList={getWordList} />
        ))}
      </tbody>
    </table>
  );
};

export default WordList;
