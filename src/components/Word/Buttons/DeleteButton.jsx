import axios from "axios";
import React from "react";

const DeleteButton = ({ wordId, getWordList }) => {
  const onDelete = async () => {
    // 단어 삭제 버튼을 클릭할 때 호출
    // 보통은 디자인 된 모달로 사용자 입력을 확인하지만
    // 여기서는 간단하게 window.confirm 을 사용
    if (window.confirm("삭제 하시겠습니까?")) {
      try {
        await axios.delete(`http://localhost:3001/words/${wordId}`); // 삭제 요청
        await getWordList(); // 삭제 후 단어 목록을 불러오는 getWordList 실행
      } catch (e) {
        alert(e);
      }
    }
  };

  return (
    <button className="btn_del" onClick={onDelete}>
      삭제
    </button>
  );
};

export default DeleteButton;
