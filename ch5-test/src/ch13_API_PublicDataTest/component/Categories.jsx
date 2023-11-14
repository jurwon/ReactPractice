import React from "react";
import styled from "styled-components";

//카테고리 목록, 보이는건 한글, 값은 영어로
const categories = [
  { name: "all", test: "전체보기" },
  { name: "business", test: "비즈니스" },
  { name: "entertainment", test: "엔터테이먼트" },
  { name: "health", test: "건강" },
  { name: "science", test: "과학" },
  { name: "sports", test: "스포츠" },
  { name: "technology", test: "기술" },
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

  & + & {
    margin-left: 1rem;
  }
`;

const Categories = () => {
  return (
    <CategoriesBlockCss>
      {categories.map((c) => (
        <CategoriesCss key={c.name}>{c.text}</CategoriesCss>
      ))}
    </CategoriesBlockCss>
  );
};

export default Categories;
