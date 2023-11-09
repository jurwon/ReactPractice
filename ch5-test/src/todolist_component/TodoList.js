import React from "react";
import "../CSS/todoList.css";

const TodoList = () => {
  return (
    <div className="container">
      <div className="header">
        <h3>오늘은 📅</h3>
        <h1>{new Date().toDateString()}</h1>
      </div>

      <div className="TodoEditor">
        <h4>새로운 Todo 작성하기 💡</h4>
        <div className="editor_wrapper">
          <input placeholder="새로운 Todo.." />
          <button>추가</button>
        </div>
      </div>

      <div className="TodoList">
        <h4>Todo List 🧾</h4>
        <input className="searchbar" placeholder="검색어를 입력하세요" />
      </div>
    </div>
  );
};

export default TodoList;
