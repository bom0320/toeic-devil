import React from "react";

const KorWord = ({ isShow, kor }) => {
  return <>{isShow ? kor : "뜻 숨김"}</>;
};

export default KorWord;
