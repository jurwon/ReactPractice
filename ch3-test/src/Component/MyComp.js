import React from "react";
import PropTypes from "prop-types";

//자식 컴포넌트
//부모로부터 받은 props속성 이용하는 입장(읽기전용)
// const MyComp = (props) => {
//   const { name, pw, children } = props;
//   return (
//     <div>
//       <h1>이름 : {name}</h1>
//       <h1>PW : {pw}</h1>
//       <h2>Child : {children}</h2>
//     </div>
//   );
// };

const MyComp = ({ name, pw, children }) => {
  return (
    <div>
      <h1>이름 : {name}</h1>
      <h1>PW : {pw}</h1>
      <h2>Child : {children}</h2>
    </div>
  );
};

//type의 기본값 설정
MyComp.defaultProps = {
  name: "기본이름",
  pw: "기본 1234",
};

//props의 type확인
MyComp.propTypes = {
  //isRequired :  유니크 (notNull).
  name: PropTypes.string.isRequired,
  pw: PropTypes.string,
};

export default MyComp;
