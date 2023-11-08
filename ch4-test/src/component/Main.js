import { Button } from "antd";
import React from "react";
import styled from "styled-components";

//yarn add react-router-dom으로 도구 설치
import { useNavigate } from "react-router-dom";

const MainTitleTextCss = styled.p`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  color: orange;
`;

const Main = () => {
  const navigate = useNavigate();
  //styled.원하는 태그 선택 '(백틱) '(백틱), 열고 닫고

  return (
    <div className="main">
      <h1>메인 페이지</h1>
      <MainTitleTextCss>styled components test</MainTitleTextCss>
      <Button title="회원가입하기" onClick={() => navigate("/Join")}>
        회원가입하기
      </Button>
      <br />
      <Button title="MyCount" onClick={() => navigate("/MyCount")}>
        MyCount
      </Button>
    </div>
  );
};

export default Main;
