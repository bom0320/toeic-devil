import axios from "axios";
import React from "react";

const WordCheckbox = ({ isDone, setIsDone, word }) => {
  const handleWordIsDone = async () => {
    try {
      setIsDone((prev) => !prev);
      await axios.patch(`http://localhost:3001/words/${word.id}`, {
        isDone: !isDone,
      });
    } catch (e) {
      setIsDone((prev) => !prev);
      alert(e);
    }
  };

  return <input type="checkbox" checked={isDone} onChange={handleWordIsDone} />;
};

export default WordCheckbox;
