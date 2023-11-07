//spread연산자(...)
const obj1 = { a: 1, b: 2, c: 3 };
const nextObj1 = { ...obj1, d: 4 };
console.log("복사본의 값 : " + nextObj1.d);

//배열
const array = [
  { id: 1, value: true },
  { id: 2, value: true },
  { id: 3, value: true },
];

//내장함수, filter,map소개
let nextArray = array.concat({ id: 4, value: false });
let nextArr2 = nextArray.filter((item) => item.id != 2);

for (const i in nextArr2) {
  console.log("id : " + nextArr2[i].id + ", value : " + nextArr2[i].value);
}

//map item.id === 1 -> 이면 value 값 false 값 변경.
// 배열에서 각 요소를 하나씩 꺼내서 item에 담아서 확인
let nextArr3 = nextArray.map((item) =>
  item.id === 1 ? { ...item, value: false } : item
);

console.log("==============================");

for (const i in nextArr3) {
  console.log("id : " + nextArr3[i].id + ", value : " + nextArr3[i].value);
}
