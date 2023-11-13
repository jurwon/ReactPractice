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
  margin-top: 20px;
`;

// const TodoList = () => {
const TodoList = ({ todos, onRemove }) => {
  return (
    <div>
      <h4>Todo List 🧾</h4>
      <SearchBar placeholder="검색어를 입력하세요" />
      <ItemWrapper>
        {todos.map((todo) => (
          // todo : 배열 통으로 넣음, key : id넣음
          // list에서는 반드시 key 명시. 속도면에서 차이 많이남

          //onRemove : TodoMain -> TodoList -> TodoListItem 계속 넘김 (비효율)
          //전역 저장소 만듦 : context api
          <TodoItem todo={todo} key={todo.id} onRemove={onRemove} />
        ))}
        {/* <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem /> */}
      </ItemWrapper>
    </div>
  );
};

export default TodoList;
