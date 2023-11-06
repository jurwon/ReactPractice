//js import : 로컬에서 자바스크립트 이용
//node -> react 프로젝트 생성 -> 그 프로젝트 내에서 특정 기능(npm)설치  가능

import logo from "./logo.svg";
import "./App.css";
import React from "react";

//JSX 문법 모양
//return 키워드 아래 html태그 사용
function App() {
  return (
    <div className="App">
      <h2>안녕하세요</h2>
    </div>
  );
}

//일반 문법
// function App() {
//   return React.createElement(
//     "div",
//     null,
//     "안녕하세요",
//     React.createElement("b", null, "react")
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
