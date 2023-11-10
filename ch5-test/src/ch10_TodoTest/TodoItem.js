import React from "react";
import styled from "styled-components";

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid;
`;

const ItemTitle = styled.div`
  flex: 1;
`;

const DeleteBtn = styled.button`
  cursor: pointer;
  color: gray;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  padding: 5px;
  width: 70px;

  background-color: #a6cf98;
  color: #557c55;
  height: 50px;

  &:hover {
    background-color: #557c55;
    color: #ffdfdf;
  }
`;

const TodoItem = () => {
  return (
    <Item>
      <div>
        <input type="checkbox" />
      </div>
      <ItemTitle>할 일</ItemTitle>
      <div className="date_col">{new Date().toLocaleDateString()}</div>
      <div className="btn_col">
        <DeleteBtn>삭제</DeleteBtn>
      </div>
    </Item>
  );
};

export default TodoItem;
