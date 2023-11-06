import React from "react";
import "./App.css";
import Menu from "./menu/Menu";

function App() {
  const menuData = [
    { id: 1, name: "아이스 아메리카노", price: 3000 },
    { id: 2, name: "카페 라테", price: 4000 },
    { id: 3, name: "초코 버블티", price: 5600 },
  ];

  return (
    <div className="App">
      <Menu data={menuData} />
    </div>
  );
}

export default App;
