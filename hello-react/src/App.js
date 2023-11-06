//js import : 로컬에서 자바스크립트 이용
//node -> react 프로젝트 생성 -> 그 프로젝트 내에서 특정 기능(npm)설치  가능

import logo from "./logo.svg";
import "./App.css";
import React, { Fragment } from "react";

//JSX 문법 모양
//return 키워드 아래 html태그 사용
function App() {
  const name = "손주원";
  const name2 = undefined;

  //return (
  // 1) div로 자식요소 모두 묶어줘야함
  //   <div className="App">
  //     <h2>안녕하세요 {name}입니다.</h2>
  //   </div>

  //2) div 대신 fragment도 씀
  // <Fragment>
  //   <h2>안녕하세요</h2>
  // </Fragment>

  //조건문1
  //<div>{name === "손주원" ? <h1>맞음</h1> : <h1>아님</h1>}</div>

  //조건문2(Truthy and Falsy)
  //앞의 조건이 true이면 뒤의 조건은 실행 안함
  //0은 예외적으로 화면에 나타남
  //<div>{name === "손주원2" && <h1>맞음</h1>}</div>

  //Truthy and Falsy
  //name2 || "값이 undefined 입니다"
  //);

  //스타일 적용하기
  const style = {
    backgroundColor: "black",
    color: "skyblue",
    FontSize: "50dp",
  };

  return <div style={style}>{name}</div>;

  //if 대신 jsx에서 조건부 연산자 이용
  //const : 상수처럼 사용, 안드로이드 val
  //let : 변수처럼 사용,안드로이드 var
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
