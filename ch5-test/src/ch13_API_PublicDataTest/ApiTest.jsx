import React, { useState } from "react";
import { Button } from "antd";
import styled from "styled-components";

//axios
//'https://jsonplaceholder.typicode.com/todos/1'
import axios from "axios";

const ApiContent = styled.div`
  display: flex;
  align-items: center;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid gray;

  &:focus {
    outline: none;
    border: 1px solid #f875aa;
  }
`;

const ApiTest = () => {
  //REST API서버에서 임시로 받아온 Data, state로 확인
  const [data, setData] = useState(null);

  //이벤트

  //방법1
  // const onClick = () => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/todos/1")
  //     //위의 get함수로 data받는 것 성공했다면 then 실행됨
  //     .then((response) => {
  //       setData(response.data);
  //     });
  // };

  //방법2
  //async, await방법
  const onClick = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );

      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <h1>ApiTest</h1>
      <Button onClick={onClick}>가져오기</Button>
      <ApiContent>
        {data && (
          <textarea
            rows={8}
            // stringify함수의 출력할 data
            // 2번째 인자 : null이면 문자열
            // 3번째 인자 :
            value={JSON.stringify(data, null, 2)}
            readOnly={true}
          ></textarea>
        )}
      </ApiContent>
    </div>
  );
};

export default ApiTest;
