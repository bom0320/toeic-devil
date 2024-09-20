import axios from "axios";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DayInput, EngInput, KorInput } from "../components";
import WordSubmitButton from "../components/CreateWordForm/WordSubmitButton";

const CreateWordPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const engRef = useRef();
  const korRef = useRef();
  const dayRef = useRef();

  const createWord = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const newWord = {
        day: dayRef.current.value,
        eng: engRef.current.value,
        kor: korRef.current.value,
        isDone: false,
      };

      await axios.post("http://localhost:3001/words", {
        ...newWord,
      });
      navigate(`/day/${dayRef.current.value}`);
    } catch (e) {
      alert(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={createWord}>
      <EngInput engRef={engRef} />
      <KorInput korRef={korRef} />
      <DayInput dayRef={dayRef} />
      <WordSubmitButton isLoading={isLoading} />
    </form>
  );
};

export default CreateWordPage;
