import React from "react";

const EngInput = ({ engRef }) => {
  return (
    <div>
      <div className="input_area">
        <label>Eng</label>
        <input type="text" placeholder="ex) computer" ref={engRef} />
      </div>
    </div>
  );
};

export default EngInput;
