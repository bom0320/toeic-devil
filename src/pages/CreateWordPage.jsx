import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateWordPage = () => {
  const [days, setDays] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const engRef = useRef();
  const korRef = useRef();
  const dayRef = useRef();

  useEffect(() => {
    axios.get("http://localhost:3001/days").then((response) => {
      setDays(response.data);
    });
  });

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
      <div className="input_area">
        <label>Eng</label>
        <input type="text" placeholder="ex) computer" ref={engRef} />
      </div>
      <div className="input_area">
        <label>Kor</label>
        <input type="text" placeholder="ex) 컴퓨터" ref={korRef} />
      </div>
      <div className="input_area">
        <label>Day</label>
        <select ref={dayRef}>
          {days.map((day) => (
            <option key={day.id} value={day.day}>
              {day.day}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" disabled={isLoading}>
        {isLoading ? "로딩 중..." : "단어 생성"}
      </button>
    </form>
  );
};

export default CreateWordPage;
