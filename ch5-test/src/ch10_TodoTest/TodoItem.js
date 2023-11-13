import React, { useState } from "react";
import styled from "styled-components";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import cn from "classnames";

//IoMdCheckboxOutline
//IoMdCheckbox

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 1rem;
  border-bottom: 1px solid;
  /* &:nth-child(even) {
    background: #557c55;
  } */

  &.checked {
    svg {
      color: #fa7070;
    }
    .text {
      color: #adb5bd;
      text-decoration: line-through;
    }
  }
`;

const ItemText = styled.div`
  flex: 1;
`;

const DeleteBtn = styled.button`
  cursor: pointer;
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
    font-weight: bold;
  }
`;

const CheckBox = styled.div`
  cursor: pointer;
  flex: 1;
  display: flex;
  align-items: center;
  svg {
    font-size: 1.5rem;
  }
`;

//todo = {id: 1, text: "더미 데이터 요소 1번입니다.",checked: true}
const TodoItem = ({ todo }) => {
  //const text = todo.text
  //const checked = todo.checked
  const { text, checked } = todo;

  return (
    <Item>
      <CheckBox
        /* cn 이용하면, checkbox라는 속성이  checked 의 속성에 의해서 
          true 이면 , className에 등록이 되고, 
          false 이면 , className에 등록이 안됨,  */
        className={cn("checkBox", { checked })}
      >
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <ItemText>{text}</ItemText>
      </CheckBox>
      <div className="date_col">{new Date().toLocaleDateString()}</div>
      <div className="btn_col">
        <DeleteBtn>삭제</DeleteBtn>
      </div>
    </Item>
  );
};

export default TodoItem;
