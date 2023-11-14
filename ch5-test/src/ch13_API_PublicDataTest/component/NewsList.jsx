import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Button } from "antd";

import NewsItem from "../model/NewsItem";

//뉴스 아이템 요소 출력을 감싸는 목록 부분
//미디어쿼리 넣어서 반응형으로, 특정 크기를 기준으로 웹 브라우저 창의 크기 변경시
//화면 사이즈 적용

const NewsListCss = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

//더미 데이터
const sampleArticle = {
  title: "제목",
  description: "내용",
  url: "https://www.naver.com",
  urlToImage: "https://via.placeholder.com/160",
};

const NewsList = ({ category }) => {
  //useEffect 이용해서 마운트시 최초 1회 데이터 받아오기
  //create, update, delete없어서
  //Rest Api 서버에서 데이터를 다 받으면 articles에 넣기

  const [articles, setArticles] = useState(null);
  //data 받는중이면 true, 다 받았으면 false
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const resultData = async () => {
      setLoading(true);
      try {
        //카테고리별로 url분리하기
        const query = category === "all" ? "" : `category=${category}`;

        console.log(query);

        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr&${query}&apiKey=010327a111f64954acf4bcd1a9ddc06a`
        );

        console.log(response.data.articles);
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    }; // resultData async 함수 블록 끝부분,
    // 비동기 함수 만들어서, 사용하기.
    resultData();

    //category값에 따라 새로운 함수 생성
  }, [category]);

  //주의사항 ,데이터 널 check
  if (loading) {
    return <NewsListCss>데이터 받는중 (대기중...) </NewsListCss>;
  }

  if (!articles) {
    console.log("데이터 못받아옴");
    return null;
  }

  return (
    <NewsListCss>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
      {/* <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} /> */}
    </NewsListCss>
  );
};

export default NewsList;
