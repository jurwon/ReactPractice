import React, { useState } from "react";
import "../CSS/TodoItem.css";

const TodoItem = () => {
  //item 상태관리
  const [todo, setTodo] = useState([]);

  return (
    <div className="TodoItem">
      <div className="checkbox_col">
        <input type="checkbox" />
      </div>
      <div className="title_col">할 일</div>
      <div className="date_col">{new Date().toLocaleDateString()}</div>
      <div className="btn_col">
        <button>삭제</button>
      </div>
    </div>
  );
};

export default TodoItem;
