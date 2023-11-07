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
        <h1>다른 숫자 : {anotherNumber}</h1>

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
          onClick={() => {
            this.setState({ number: number - 1 });
          }}
        >
          {" "}
          -1{" "}
        </button>

        <button
          // this.state.number + 1  오류남 -> 함수로 대체
          onClick={() => {
            this.setState({ number: number + 1 });
            this.setState(
              (prevState) => {
                return {
                  number: prevState.number + 1,
                };
                //state값 변경 후, 특정 함수 호출
              },
              () => {
                console.log("state변경 후 함수 호출");
              }
            );
          }}
        >
          {" "}
          +2{" "}
        </button>
      </div>
    );
  }
}

export default Count;
