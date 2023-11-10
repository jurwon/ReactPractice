import React from "react";

const TodoHeader = () => {
  return (
    <div className="header">
      <h3>오늘은 📅</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

export default TodoHeader;
