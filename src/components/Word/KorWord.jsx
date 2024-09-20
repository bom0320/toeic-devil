import React from "react";

const KorWord = ({ isShow, kor }) => {
  return <>{isShow ? kor : "뭘까용?"}</>;
};

export default KorWord;
