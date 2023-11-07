import React from "react";

//자식 컴포넌트
//부모로부터 받은 props속성 이용하는 입장(읽기전용)
const MyComp = (props) => {
  return (
    <div>
      <h1>이름 : {props.name}</h1>
      <h1>PW : {props.pw}</h1>
    </div>
  );
};

export default MyComp;
