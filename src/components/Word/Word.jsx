import React, { useState } from "react";
import Buttons from "./Buttons";
import EngWord from "./EngWord";
import KorWord from "./KorWord";
import WordCheckbox from "./WordCheckbox";

const Word = ({ word, getWordList }) => {
    const [isShow, setIsShow] = useState(true);
    const [isDone, setIsDone] = useState(word.isDone);

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

export default Word;
