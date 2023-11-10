import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const SearchBar = styled.input`
  flex: 1;
  max-width: 500px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #557c55;
  border-radius: 5px;
  padding: 15px;

  &:focus {
    outline: none;
    border: 1px solid #f875aa;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;

const TodoList = () => {
  return (
    <div>
      <h4>Todo List 🧾</h4>
      <SearchBar placeholder="검색어를 입력하세요" />
      <ItemWrapper>
        <TodoItem />
      </ItemWrapper>
    </div>
  );
};

export default TodoList;
