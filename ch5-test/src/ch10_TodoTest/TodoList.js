import React, { useState, useCallback } from "react";
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
const TodoList = ({ todos, onRemove, onToggle }) => {
  const [search, setSearch] = useState("");

  //검색창
  const onChange = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  //검색
  const getSearchResult = () => {
    //빈 문자열이면 todo 그대로 반환,
    //그렇지 않다면 todo의 내용과 일치하는 item만 필터링
    return search === ""
      ? todos
      : todos.filter((todos) =>
          todos.text.toLowerCase().includes(search.toLowerCase())
        );
  };

  return (
    <div>
      <h4>Todo List 🧾</h4>
      <SearchBar
        value={search}
        onChange={onChange}
        placeholder="검색어를 입력하세요"
      />
      <ItemWrapper>
        {getSearchResult().map((todo) => (
          // todo : 배열 통으로 넣음, key : id넣음
          // list에서는 반드시 key 명시. 속도면에서 차이 많이남

          //onRemove : TodoMain -> TodoList -> TodoListItem 계속 넘김 (비효율)
          //전역 저장소 만듦 : context api
          <TodoItem
            todo={todo}
            key={todo.id}
            onRemove={onRemove}
            onToggle={onToggle}
          />
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
