import React from "react";
import HandleShowButton from "./HandleShowButton";
import DeleteButton from "./DeleteButton";

const Buttons = ({ isDone, isShow, setIsShow, wordId, getWordList }) => {
  return (
    <>
      <HandleShowButton isDone={isDone} isShow={isShow} setIsShow={setIsShow} />
      <DeleteButton wordId={wordId} getWordList={getWordList} />
    </>
  );
};

export default Buttons;
