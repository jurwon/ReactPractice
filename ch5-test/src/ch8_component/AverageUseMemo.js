// 예)
// array = [1,2,3,4,5]
// array.reduce((a,b) => a+b,0)
// 의 결과값은 -> 15
// a : 누산기,(누적된값)
// a : 0 , b : 1 => 1
// a : 1 , b : 2 => 3
// a : 3 , b : 3 => 6
// a : 6 , b : 4 => 10
// a : 10 , b : 5 => 15

import React, { useState } from "react";
import { Button } from "antd";

const doAverage = (numbers) => {
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const AverageUseMemo = () => {
  const [list, setList] = useState([]);
  //정수로 변환해서 저장 필요
  const [number, setNumber] = useState("");

  const onChange = (e) => {
    setNumber(e.target.value);
  };

  const onInsert = (e) => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  };

  return (
    <div>
      <h1>AverageUseMemo</h1>
      <input value={number} onChange={onChange}></input>
      <Button onClick={onInsert}>등록하기</Button>

      <br />
      {/* 리액트 리스트 출력시, key 반드시 설정 */}
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <br />
      <div>평균값 : {doAverage(list)}</div>
    </div>
  );
};

export default AverageUseMemo;
