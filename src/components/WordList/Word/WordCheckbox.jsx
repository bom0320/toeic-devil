import React from "react";

const WordCheckbox = ({ isDone, setIsDone }) => {
  return (
    <input
      type="checkbox"
      checked={isDone}
      onChange={() => setIsDone((prev) => !prev)}
    />
  );
};

export default WordCheckbox;
