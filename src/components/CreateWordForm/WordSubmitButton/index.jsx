import React from "react";

const WordSubmitButton = ({ isLoading }) => {
  return (
    <button type="submit" disabled={isLoading}>
      {isLoading ? "로딩 중..." : "단어 생성"}
    </button>
  );
};

export default WordSubmitButton;
