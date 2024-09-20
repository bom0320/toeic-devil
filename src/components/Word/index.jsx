import React, { useState } from "react";
import Buttons from "./Buttons";
import EngWord from "./EngWord";
import KorWord from "./KorWord";
import WordCheckbox from "./WordCheckbox";

const Word = ({ word, getWordList }) => {
  const [isShow, setIsShow] = useState(true);
  // 뜻 보이고 안보이고 -> 초깃값을 true 로 해서 처음에는 뜻이 보이게 함

  const [isDone, setIsDone] = useState(word.isDone);
  // 단어가 완료됐는지 -> 단어 객체에서 해당 상태 가져옴
  
  return (
    <tr className={isDone ? "off" : ""}>
      <td>
        <WordCheckbox isDone={isDone} setIsDone={setIsDone} word={word} />
      </td>
      <td>
        <EngWord eng={word.eng} />
      </td>
      <td>
        <KorWord isShow={isShow} kor={word.kor} />
      </td>
      <td>
        <Buttons
          isDone={isDone}
          isShow={isShow}
          setIsShow={setIsShow}
          wordId={word.id}
          getWordList={getWordList}
        />
      </td>
    </tr>
  );
};
// <tr className={isDone ? 'off' : ''}>  : isDone 이 true 이면 off 클래스 적용해 완료된 단어로 표시 -> 그렇지 않으면 빈 문자열로 처리
// onChange : isDone 상태 반전시킴 -> 체크박스 체크하면 isDone 이 true로, 체크가 해제되면 false 로 설정

export default Word;
