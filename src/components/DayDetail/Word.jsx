import axios from "axios";
import React, { useState } from "react";

const Word = ({ word, getWordList }) => {
  const [isShow, setIsShow] = useState(true);
  // 뜻 보이고 안보이고 -> 초깃값을 true 로 해서 처음에는 뜻이 보이게 함

  const [isDone, setIsDone] = useState(word.isDone);
  // 단어가 완료됐는지 -> 단어 객체에서 해당 상태 가져옴

  const handleShow = () => {
    // 뜻 보기/ 숨기기 버튼을 클릭할 때 호출
    if (isDone) return; // 단어 완료이면 아무런 이벤트 발생 X
    setIsShow((prev) => !prev); // 그렇지 않으면, isShow 상태를 반전시켜 뜻 보이거나 숨김
  };

  const onDelete = async () => {
    // 단어 삭제 버튼을 클릭할 때 호출
    // 보통은 디자인 된 모달로 사용자 입력을 확인하지만
    // 여기서는 간단하게 window.confirm 을 사용
    if (window.confirm("삭제 하시겠습니까?")) {
      await axios.delete(`http://localhost:3001/words/${word.id}`); // 삭제 요청
      await getWordList(); // 삭제 후 단어 목록을 불러오는 getWordList 실행
    }
  };

  return (
    <tr className={isDone ? "off" : ""}>
      <td>
        <input
          type="checkbox"
          checked={isDone}
          onChange={() => setIsDone((prev) => !prev)}
        />
      </td>
      <td>{word.eng}</td>
      <td>{isShow ? word.kor : '뜻 숨김'}</td>
      <td>
        <button onClick={handleShow}>{isShow ? "뜻 숨기기" : "뜻 보기"}</button>
        <button className="btn_del" onClick={onDelete}>
          삭제
        </button>
      </td>
    </tr>
  );
};
// <tr className={isDone ? 'off' : ''}>  : isDone 이 true 이면 off 클래스 적용해 완료된 단어로 표시 -> 그렇지 않으면 빈 문자열로 처리
// onChange : isDone 상태 반전시킴 -> 체크박스 체크하면 isDone 이 true로, 체크가 해제되면 false 로 설정

export default Word;
