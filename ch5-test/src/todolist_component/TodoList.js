import React, { useState } from "react";
import "../CSS/todoList.css";
import TodoItem from "./TodoItem";
import { AiFillApple } from "react-icons/ai";
import { HiPencil } from "react-icons/hi";

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React 복습",
    createDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "React 복습",
    createDate: new Date().getTime(),
  },
  {
    id: 2,
    idDone: true,
    content: "React 복습",
    createDate: new Date().getTime(),
  },
];

const TodoList = () => {
  //item 상태관리
  const [todo, setTodo] = useState([mockTodo]);

  const onCreate = (content) => {
    const newItem = {
      id: 0,
      content,
      isDone: false,
      createDate: new Date().getTime(),
    };

    setTodo([newItem, ...todo]);
  };

  return (
    <div className="container">
      <div className="header">
        <h3>오늘은 📅</h3>
        <h1>{new Date().toDateString()}</h1>
      </div>

      <div className="TodoEditor">
        <h4>
          새로운 Todo 작성하기
          <HiPencil />
        </h4>

        <div className="editor_wrapper">
          <input placeholder="새로운 Todo.." />
          <button>추가</button>
        </div>
      </div>

      <div className="TodoList">
        <h4>Todo List 🧾</h4>
        <input className="searchbar" placeholder="검색어를 입력하세요" />
        <div className="list_wrapper">
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </div>
      </div>
    </div>
  );
};

export default TodoList;
