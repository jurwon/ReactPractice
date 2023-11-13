// 부모 : App, 자식 : TodoMain
// 자식 : TodoMain (베이스 컴포넌트)
// 전체 가운데 요소로 정렬 시켜주는 템플릿
// 1)제목 2) 입력란 3) 리스트 4) 리스트의 아이템 등.

import React, { useState, useRef, useCallback } from "react";
import styled from "styled-components";
import TodoHeader from "./TodoHeader";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";

const Main_css = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 20px;
  border: 1px solid gray;
`;

const TodoMain = () => {
  // //샘플 더미 데이터를 임시 배열에 만들어서, 전달. props 테스트
  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     text: "1번입니다.",
  //     checked: false,
  //   },
  //   {
  //     id: 2,
  //     text: "2번입니다.",
  //     checked: true,
  //   },
  //   {
  //     id: 3,
  //     text: "3번입니다.",
  //     checked: true,
  //   },
  // ]);

  //성능 test (더미 데이터 3000개)
  const createBulkTodos = () => {
    const array = [];
    for (let i = 1; i <= 10000; i++) {
      array.push({
        id: i,
        text: `더미 데이터 : ${i}`,
        checked: false,
      });
    }
    return array;
  };

  const [todos, setTodos] = useState(createBulkTodos());

  const nextId = useRef(4);

  //onInsert 함수는, onChange함수와 다르게 매번 새로운 함수 생성
  //함수 안에 배열이 변경돼서
  const onInsert = useCallback(
    (text) => {
      const todo = {
        //const nextId = 4부터 할당
        id: nextId.current,
        text,
        checked: false,
      };

      //성능 개선 2번째
      // setTodos(todos.concat(todo));
      //차이점, useCallback 의존성 배열이 값 변경될 때마다 새로 함수 생성하는 부분을
      // 기존의 값으로 변경 -> 함수 형태로 변경
      //매번 새롭게 함수를 생성할 필요 없음
      setTodos((todos) => todos.concat(todo));
      nextId.current += 1;
    },
    //성능 개선 2번째
    // [todos]
    []
  );

  const onRemove = useCallback(
    (id) => {
      //성능 개선 2번째
      //매번 새롭게 함수를 생성할 필요 없음
      setTodos((todos) => todos.filter((todo) => todo.id !== id));
    },
    // [todos]
    []
  );

  const onToggle = useCallback(
    (id) => {
      //성능 개선 2번째
      //매번 새롭게 함수를 생성할 필요 없음
      setTodos(
        // todos.map((todo) =>
        //   todo.id === id ? { ...todo, checked: !todo.checked } : todo
        (todos) =>
          todos.map((todo) =>
            todo.id === id ? { ...todo, checked: !todo.checked } : todo
          )
      );
    },
    // [todos]
    []
  );

  return (
    <Main_css>
      <TodoHeader />
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </Main_css>
  );
};

export default TodoMain;
