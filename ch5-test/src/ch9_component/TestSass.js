//sass문법을 테스트 할 공간
import React from "react";
import "./SassComponent.scss";

const TestSass = () => {
  return (
    <div className="SassTest">
      <h1>SassTest</h1>
      <div className="box red"></div>
    </div>
  );
};

export default TestSass;
