//state test 자식 컴포넌트
// 클래스형 컴포넌트 구조 먼저.
// 가볍게 보세요.
// 구현부는 거의 동일함.
// rcc
import React, { Component } from "react";

class Count extends Component {
  //props 전달용, Component 부모클래스 초기화 같이 진행.
  constructor(props) {
    super(props);
    //state , 초깃값 설정.
    this.state = {
      number: 0,
      anotherNumber: 0,
    };
  }
  render() {
    //비구조화 할당
    const { number, anotherNumber } = this.state;
    return (
      <div className="count">
        <h1>{number}</h1>
        <h1>{anotherNumber}</h1>

        <button
          // onClick 의 값으로 함수를 사용
          onClick={() => {
            this.setState({ number: number + 1 });
          }}
        >
          {" "}
          +1{" "}
        </button>

        <button
          // onClick 의 값으로 함수를 사용
          onClick={() => {
            this.setState({ number: number + 2 });
          }}
        >
          {" "}
          +2{" "}
        </button>

        <button
          onClick={() => {
            this.setState({ number: number - 1 });
          }}
        >
          {" "}
          -1{" "}
        </button>
      </div>
    );
  }
}

export default Count;
