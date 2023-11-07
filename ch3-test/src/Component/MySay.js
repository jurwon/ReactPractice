import React, { useState } from "react";

const MySay = () => {
  //회원가입, username입력 받아서 확인하기

  //const[상태값,세터함수] = useState('')->반환 배열 형식
  const [username, setUserName] = useState("sjw");
  const [password, setPassword] = useState("1234");

  //이벤트 핸들러 추가. onClick
  const onClickUserName = () => setUserName("손주원");
  const onClickPassword = () => setPassword("0000");

  return (
    <div>
      <h1>{username} 님 환영합니다</h1>
      <h1>
        {username} 님 패스워드 확인 테스트 : {password}
      </h1>
      <button onClick={onClickUserName}>username확인하기</button>
      <button onClick={onClickPassword}>password확인하기</button>
    </div>
  );
};

export default MySay;
