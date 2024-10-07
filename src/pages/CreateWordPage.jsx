import axios from "axios";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DayInput, EngInput, KorInput } from "../components";
import WordSubmitButton from "../components/CreateWordForm/WordSubmitButton";

const CreateWordPage = () => {
  const [isLoading, setIsLoading] = useState(false); // 데이터를 보내는 동안의 로딩 상태를 관리
  const navigate = useNavigate(); // 페이지 이동 함수
  // dayRef.current.value 값을 기반으로 
  // 어느 경로로 이동할지를 결정하는 역할을 하며,
  // 그 값을 충족시키면 그에 맞는 페이지로 이동하게 해주는 함수이다.

  const engRef = useRef(); // 영어 입력 필드 참조
  const korRef = useRef(); // 한국어 입력 필드 참조
  const dayRef = useRef(); // 날짜 입력 필드 참조

  const createWord = async (e) => {
    e.preventDefault(); // 폼 제출 시 새로고침 방지
    try {
      setIsLoading(true); // 로딩 상태 시작
      const newWord = {
        day: dayRef.current.value, // 날짜 입력값
        eng: engRef.current.value, // 영어 입력값
        kor: korRef.current.value, // 한국어 입력값
        isDone: false, // 단어 완료 아직
      };

      await axios.post("http://localhost:3001/words", {
        ...newWord,
        // 여기서 스프레드 연산자는 newWord 객체의 속성들을 개별적으로 펼쳐서 axios.post() 에 전달한다.
        // 즉, newWord 객체에 담긴 데이터를 서버로 보내는 것    
      });

      // axios.post 는 서버에 새로운 데이터를 생성하라는 요청을 보내는 함수
      // 여기서 http://localhost:3001/words 가 서버의 경로,
      // 그 경로에 새로운 데이터를 생성하라고 요청하는것!!
  
      // 결론적으로 스프레드 연산자를 통해 newWord 객체를 서버(http://localhost:3001/words)에 전달하고,
      // 서버가 그 데이터를 사용해 새로운 데이터를 생성하게 되는 것이다.
      
      // 즉, "스프레드 연산자로 데이터를 newWord 형식으로 펼쳐서  http://localhost:3001/words에 보내고, 그 데이터를 생성하라" 라는 뜻이 됨 
      navigate(`/day/${dayRef.current.value}`); // 단어가 생성도니 후 특정 경로로 이동
    } catch (e) {
      alert(e);  // 오류 발생 시 알림
    } finally {
      setIsLoading(false); // 로딩 상태 종료
    }
  };

  return (
    <form onSubmit={createWord}> 
      <EngInput engRef={engRef} /> 
      <KorInput korRef={korRef} />
      <DayInput dayRef={dayRef} />
      <WordSubmitButton isLoading={isLoading} />
    </form>
    // <EngInput engRef={engRef} />  : 영어 입력 필드 (ref 연결) ...
    // WordSubmitButton isLoading={isLoading} /> : 제출 버튼 (로딩 상태 전달)
  );
};

export default CreateWordPage;

// <form onSubmit={createWord}>  : 사용자가 입력한 데이터를 createWord 함수로 처리하기 위해 사용
// 입력 필드들: 각각의 입력 필드들은 커스텀 컴포넌트이며, engRef, korRef, dayRef 로 ref 를 연결하여 사용자가 입력한 값이 접근할 수 있게 함