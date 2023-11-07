import React from "react";
import Test from "./test";
import FuncTest from "./FuncTest";
import ClassTest from "./ClassTest";
import "../CSS/test.css";

import MyComp from "./MyComp";
import MyCompPublicFunction from "./MyCompPublicFunction";
import Count from "./Count";

const Body = () => {
  return (
    <div className="body">
      <h1>Body</h1>
      {/* <Test /> */}
      {/* <FuncTest /> */}
      {/* <ClassTest /> */}

      {/* 자식컴포넌트에게 props.name전달 */}
      {/* <MyComp name="sjw" pw="1234" /> */}
      {/* <MyComp name="sjw" pw="1234">
        여긴 MyComp
      </MyComp> */}

      {/* <MyCompPublicFunction name="sjw" pw="1234">
        여긴 MyCompPublicFunction
      </MyCompPublicFunction> */}

      <Count />
    </div>
  );
};

export default Body;
