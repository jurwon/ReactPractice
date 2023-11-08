import { Button } from "antd";
import React from "react";

//yarn add react-router-dom으로 도구 설치
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>메인 페이지</h1>
      <Button title="회원가입하기" onClick={() => navigate("/Join")}>
        회원가입하기
      </Button>
    </div>
  );
};

export default Main;
