import React from 'react';
import { ScrollView, Text } from 'react-native';
import news from '../../assets/news.json';
import Article from '../models/article'
import ArticleNail from '../components/article-nail';
import ContainerStyle from '../styles/articleScreenStyle';
import NavBar from '../components/navBar';

const NewsFeed: React.FC = () => {
  return (
    <>
      <NavBar/>
      <ScrollView contentContainerStyle={ContainerStyle.container}>
        {
          news.articles.map((APIarticle, i) =>{
            if(i<49){
              let article:Article={
                title:APIarticle.title,
                description:APIarticle.description,
                resourceURL: APIarticle.url,
                imageURL: APIarticle.urlToImage,
              }
              return(
              <>
                <ArticleNail key={`articleNail id:${i}`} article={article}/>
              </>
              );
            }else{
              return <></>;
              }
          })
        }
      </ScrollView>
    </>
  );
}


export default NewsFeed;
