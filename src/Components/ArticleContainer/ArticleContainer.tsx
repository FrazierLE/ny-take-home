import React from 'react'
import ArticleCard from '../ArticleCard/ArticleCard'
import './ArticleContainer.css'
import { ArticlesArray, Articles } from '../../interfaces'

const ArticleContainer: React.FC<ArticlesArray> = (props) => {
  const articleList = props.articles.map((article: Articles, index: number, array: Articles[]) => {
    return (
      < ArticleCard 
        key={article.uri}
        id={article.uri}
        byline={article.byline}
        title={article.title}
        multimedia={article.multimedia}
      />
    )
  })
  return (
    <div className='container'>
      {articleList}
    </div>
  )
}

export default ArticleContainer