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

const Body = () => {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");

  const handleOnTextChange = (e) => {
    setText(e.target.value);
  };
  const handleOnDateChange = (e) => {
    setDate(e.target.value);
  };
  return (
    <div className="body">
      <input value={text} onChange={handleOnTextChange} />
      <div>{text}</div>

      <input type="date" value={date} onChange={handleOnDateChange} />
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
    </div>
  );
};

export default Body;
