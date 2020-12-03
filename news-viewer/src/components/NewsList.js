import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import NewsItem from "./NewsItem";
import axios from 'axios';
import usePromise from "../lib/usePromise";

const NewsListBlock = styled.div`
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


const NewsList = ({category}) => {
    const [loading, response, error] = usePromise(() => {
        const query = category ==='all' ? '' : `&category=${category}`;
        return axios.get(
            `http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=d2a4471b049a490e9fb6d76c184cbffe`,
        );
    }, [category]);

    // 대기중일때
    if (loading) {
        return <NewsListBlock>대기 중..</NewsListBlock>;
    }
    // 아직 articles 값이 설정되지 않았을때
    if (!response) {
        return null;
    }

    if (error) {
        return <NewsListBlock>에러발생</NewsListBlock>
    }

    // articles 값이 유효할때
    const {articles} = response.data;

    return (
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem key={article.url} article={article}/>
            ))}
        </NewsListBlock>
    )
}

export default NewsList;