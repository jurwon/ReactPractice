import React, { useState } from "react";

//axios
//'https://jsonplaceholder.typicode.com/todos/1'
import axios from "axios";

const ApiTest = () => {
  //REST API서버에서 임시로 받아온 Data, state로 확인
  const [data, setData] = useState(null);

  //이벤트
  const onClick = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      //위의 get함수로 data받는 것 성공했다면 then 실행됨
      .then((response) => {
        setData(response.data);
      });
  };

  return (
    <div>
      <h1>ApiTest</h1>
      <Button onClick={onClick}>가져오기</Button>
      <div>
        {data && (
          <textarea
            rows={8}
            value={JSON.stringify(data, null, 2)}
            readOnly={true}
          ></textarea>
        )}
      </div>
    </div>
  );
};

export default ApiTest;
