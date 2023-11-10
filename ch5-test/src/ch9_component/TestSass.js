//sass문법을 테스트 할 공간
import React from "react";
import "./SassComponent.scss";

const TestSass = () => {
  return (
    <div className="SassTest">
      <h1>SassTest</h1>
      <div className="sassContainer">
        <div className="box hotpink"></div>
        <div className="box yunjadu"></div>
        <div className="box jadu"></div>
        <div className="box sky"></div>
        <div className="box yunjadu"></div>
        <div className="box yundo"></div>
        <div className="box ginyundo"></div>
        <div className="box malcha"></div>
        <div className="box jamong"></div>
      </div>
    </div>
  );
};

export default TestSass;
