import React from "react";

const HandleShowButton = ({ isDone, isShow, setIsShow }) => {
  const handleShow = () => {
    if (isDone) alert("단어 선택을 완료하면 뜻을 보이게 하거나 숨길 수 없습니다."); // 단어 완료이면 경고문 출력
    else setIsShow((prev) => !prev); // 그렇지 않으면, isShow 상태를 반전시켜 뜻 보이거나 숨김
  };

  return (
    <button onClick={handleShow}>
      <span style={{ width: "100%" }}>{isShow ? "뜻 숨기기" : "뜻 보기"}</span>
    </button>
  );
};

export default HandleShowButton;
