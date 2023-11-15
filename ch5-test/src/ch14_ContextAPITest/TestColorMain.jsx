//context API 테스트 메인으로 사용 예정
//부모 컴포넌트

import React from "react";
import TestColorBox from "./TestColorBox";
import colorContext, { ColorProvider } from "./testColor";

const TestColorMain = () => {
  return (
    // <div>
    //   <colorContext.Provider value={{ color: "#F875AA" }}>
    //     <TestColorBox></TestColorBox>
    //   </colorContext.Provider>
    // </div>

    <ColorProvider>
      <h1>TestColorMain</h1>
      <div>
        <TestColorBox />
      </div>
    </ColorProvider>
  );
};

export default TestColorMain;
