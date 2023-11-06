//js import : 로컬에서 자바스크립트 이용
//node -> react 프로젝트 생성 -> 그 프로젝트 내에서 특정 기능(npm)설치  가능

import logo from "./logo.svg";
import "./App.css";
import React, { Fragment } from "react";

//JSX 문법 모양
//return 키워드 아래 html태그 사용
function App() {
  const name = "손주원";

  return (
    //1) div로 자식요소 모두 묶어줘야함
    <div className="App">
      <h2>안녕하세요 {name}입니다.</h2>
    </div>

    //2) div 대신 fragment도 씀
    // <Fragment>
    //   <h2>안녕하세요</h2>
    // </Fragment>
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
