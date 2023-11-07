//일반 함수 vs 화살표 함수
//setTimeout 함수 기준으로 확인

//param1 : 콜백함수, param2 : 시간
// 특정 시간 후 콜백함수 동작 (ms 3000ms = 3초)
// setTimeout(() => {
//   console.log("화살표 함수 테스트 setTimeout");
// }, 3000);

// setTimeout(function test() {
//   console.log("일반 함수 테스트 setTimeout");
// }, 2000);

//일반 함수 : 종속된 객체 가리킴
function testDog() {
  this.name = "멍멍";
  return {
    name: "왈왈",
    sound: function () {
      console.log("뭐라고 짖을까? : " + this.name);
    },
  };
}

//화살표 함수 : 종속된 인스턴스 가리킴
function testDog2() {
  this.name = "멍멍";
  return {
    name: "왈왈",
    sound: () => {
      console.log("뭐라고 짖을까? : " + this.name);
    },
  };
}

// const testdog = new testDog();
const testdog = new testDog2();
testdog.sound();
