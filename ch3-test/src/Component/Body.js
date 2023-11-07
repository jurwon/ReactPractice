import React, { useState } from "react";
import Test from "./test";
import FuncTest from "./FuncTest";
import ClassTest from "./ClassTest";
import "../CSS/test.css";

import MyComp from "./MyComp";
import MyCompPublicFunction from "./MyCompPublicFunction";
import Count from "./Count";
import MyCount from "./MyCount";
import MySay from "./MySay";
import EventHandler from "./EventHandler";
import Join from "./Join";
import OddEven from "./OddEven";

const Body = () => {
  return (
    <div className="body">
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

      {/* <Count /> */}
      {/* <MyCount /> */}
      {/* <MySay /> */}
      {/* <EventHandler /> */}
      <Join />
      <OddEven />
    </div>
  );
};

export default Body;
