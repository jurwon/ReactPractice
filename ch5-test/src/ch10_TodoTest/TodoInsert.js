import React from "react";
import { HiPencil } from "react-icons/hi";
import styled from "styled-components";

const TodoEditor = styled.div`
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 20px;
  border: 1px solid gray;
`;

const InsertTodo = styled.input`
  flex: 1;
  box-sizing: border-box;
  border: 1px solid #557c55;
  border-radius: 5px;
  padding: 15px;

  &:focus {
    outline: none;
    border: 1px solid #f875aa;
  }
`;

const InsertBtn = styled.button`
  cursor: pointer;
  width: 70px;
  border: none;
  background-color: #a6cf98;
  color: #557c55;
  border-radius: 5px;
  height: 50px;

  &:hover {
    background-color: #557c55;
    color: #ffdfdf;
  }
`;

const InsertContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;

const TodoInsert = () => {
  return (
    <div>
      <h4>
        작성하기
        <HiPencil />
      </h4>

      <InsertContainer>
        <InsertTodo placeholder="새로운 Todo.." />
        <InsertBtn>추가</InsertBtn>
      </InsertContainer>
    </div>
  );
};

export default TodoInsert;
