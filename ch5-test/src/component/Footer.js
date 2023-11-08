import React from "react";
import styled from "styled-components";

//yarn add react-router-dom으로 도구 설치
import { useNavigate } from "react-router-dom";

const FooterDiv = styled.div`
  background-color: #557c55;
  width: 100%;
  height: 10vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Footer = () => {
  return (
    <footer>
      <FooterDiv>
        <h1>Footer</h1>
      </FooterDiv>
    </footer>
  );
};

export default Footer;
