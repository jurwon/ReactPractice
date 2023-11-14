import React, { useParams } from "react";

const NewsPage = () => {
  //라우팅에서 경로 뒤에 /:category , 링크 뒤에 파라미터 속성 설정
  // useParams() hooks 이용해서, /:category의 값 가져올때 사용
  //스프링부트의 @Pathvariable과 유사
  const params = useParams();
  //카테고리 기본값 : all, 나머지는 선택된 카테고리 값으로 사용
  const category = params.category || "all";
  return <div></div>;
};

export default NewsPage;
