import React, { useState } from "react";
import "../CSS/test.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Button, Space, DatePicker, version } from "antd";

import Join from "./Join";
import Main from "./Main";
import MyCount from "./MyCount";
import Login from "./Login";
import RefPracticeScrollTest from "../ch5_component/RefPracticeScrollTest";
import DataListKeyAddDelTest from "../ch6_component/DataListKeyAddDelTest";
import InfoTestUseState from "../ch8_component/InfoTestUseState";
import InfoTestUseEffect from "../ch8_component/InfoTestUseEffect";
import CountUseReducerTest from "../ch8_component/CountUseReducerTest";
import InfoUseReducer from "../ch8_component/InfoUseReducer";

const Body = () => {
  return (
    <BrowserRouter>
      <div className="body">
        <Routes>
          <Route index element={<Main />} />
          <Route path="Join" element={<Join />} />
          <Route path="Login" element={<Login />} />
          <Route path="MyCount" element={<MyCount />} />
          <Route
            path="DataListKeyAddDelTest"
            element={<DataListKeyAddDelTest />}
          />
          <Route
            path="RefPracticeScrollTest"
            element={<RefPracticeScrollTest />}
          />
          <Route path="InfoTestUseState" element={<InfoTestUseState />} />
          <Route path="InfoTestUseEffect" element={<InfoTestUseEffect />} />
          <Route path="CountUseReducerTest" element={<CountUseReducerTest />} />
          <Route path="InfoUseReducer" element={<InfoUseReducer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Body;
