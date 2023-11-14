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
import AverageUseMemo from "../ch8_component/AverageUseMemo";
import AverageUseCallback from "../ch8_component/AverageUseCallback";
import AverageUseRef from "../ch8_component/AverageUseRef";
import AverageUseParams from "../ch8_component/AverageUseParams";
import InfoTestCustomHooks from "../ch8_component/InfoTestCustomHooks";
import TestSass from "../ch9_component/TestSass";
import StyledComponent from "../ch9_component/StyledComponent";
import TodoMain from "../ch10_TodoTest/TodoMain";
import ImmerTest from "../ch12_immer/ImmerTest";
import TestZone from "../ch12_immer/TestZone";
import ApiTest from "../ch13_API_PublicDataTest/ApiTest";

const Body = () => {
  return (
    <BrowserRouter>
      <div className="body">
        <Routes>
          <Route index element={<Main />} />
          <Route path="Join" element={<Join />} />
          <Route path="Login" element={<Login />} />
          <Route path="MyCount" element={<MyCount />} />
          <Route path="TodoMain" element={<TodoMain />} />
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
          <Route path="AverageUseMemo" element={<AverageUseMemo />} />
          <Route path="AverageUseCallback" element={<AverageUseCallback />} />
          <Route path="AverageUseRef" element={<AverageUseRef />} />

          {/* useParmas설정 */}
          <Route path="useParams/:id" element={<AverageUseParams />} />

          <Route path="InfoTestCustomHooks" element={<InfoTestCustomHooks />} />
          <Route path="TestSass" element={<TestSass />} />
          <Route path="StyledComponent" element={<StyledComponent />} />
          <Route path="ImmerTest" element={<ImmerTest />} />
          <Route path="TestZone" element={<TestZone />} />
          <Route path="ApiTest" element={<ApiTest />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Body;
