import React from "react";
import styled, { css } from "styled-components";

//카테고리 목록, 보이는건 한글, 값은 영어로
const categories = [
  { name: "all", text: "전체보기" },
  { name: "business", text: "비즈니스" },
  { name: "entertainment", text: "엔터테이먼트" },
  { name: "health", text: "건강" },
  { name: "science", text: "과학" },
  { name: "sports", text: "스포츠" },
  { name: "technology", text: "기술" },
];

//css
const CategoriesBlockCss = styled.div`
  display: flex;
  padding: 1rem;
  width: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const CategoriesCss = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.5rem;

  &:hover {
    color: #fa7070;
  }

  // active 클래스 속성 추가.
  ${(props) =>
    props.active &&
    css`
      font-weight: 600;
      border-bottom: 2px solid violet;
      color: aqua;
      &:hover {
        color: green;
      }
    `}

  & + & {
    margin-left: 1rem;
  }
`;

{
  /* 부모에서 넘겨준 값
  <Categories category={category} onSelect={onSelect} /> */
}
const Categories = ({ category, onSelect }) => {
  return (
    <CategoriesBlockCss>
      {categories.map((c) => (
        <CategoriesCss
          key={c.name}
          active={category === c.name}
          onClick={() => onSelect(c.name)}
        >
          {c.text}
        </CategoriesCss>
      ))}
    </CategoriesBlockCss>
  );
};

export default Categories;
