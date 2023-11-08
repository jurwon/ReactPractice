import React, { useState } from "react";
import "../CSS/test.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Button, Space, DatePicker, version } from "antd";

import Join from "./Join";
import Main from "./Main";

const Body = () => {
  return (
    <BrowserRouter>
      <div className="body">
        <Routes>
          <Route index element={<Main />} />
          <Route path="Join" element={<Join />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Body;
