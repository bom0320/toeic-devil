import React from "react";

const KorInput = ({ korRef }) => {
  return (
    <div>
      <div className="input_area">
        <label>Kor</label>
        <input type="text" placeholder="ex) 컴퓨터" ref={korRef} />
      </div>
    </div>
  );
};

export default KorInput;
