//es6, const, let 비교

//var : 전역
function test() {
  var a = "hello";
  if (true) {
    var a = "hi";
    console.log(a); //a에 뭐가 출력될까? => hi
  }

  console.log(a); //a에 뭐가 출력될까? => hi
}

// let: 지역
function test2() {
  let a = "hello";
  if (true) {
    let a = "hi";
    console.log(a); //a에 뭐가 출력될까? => hi
  }

  console.log(a); //a에 뭐가 출력될까? => hi
}

test();
test2();
