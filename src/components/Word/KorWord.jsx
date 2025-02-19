import React from "react";

const KorWord = ({ isShow, kor }) => {
  return <>{isShow ? kor : " "}</>;
};

export default KorWord;
