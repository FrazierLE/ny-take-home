import React from 'react'
import ArticleCard from '../ArticleCard/ArticleCard'
import './ArticleContainer.css'
interface Articles {
  abstract: string
  byline: string
  created_date: string
  des_facet: string[]
  geo_facet: string[]
  item_type: string
  kicker: string | null
  material_type_facet: string | null
  multimedia: {
    caption: string
    copyright: string
    format: string
    height: number
    subtype: string
    type: string
    url: string
    width: number
  }[] 
  org_facet: []
  per_facet: []
  published_date: string
  section: string
  world: string
  subsection: string
  title: string
  updated_date: string
  uri: string
  url: string
}

const ArticleContainer: React.FC<Articles | any> = (props) => {
  const articleList = props.articles.map((article: any) => {
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