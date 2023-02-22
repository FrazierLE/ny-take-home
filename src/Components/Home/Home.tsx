import React from 'react'
import ArticleContainer from '../ArticleContainer/ArticleContainer'

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

const Home: React.FC<Articles[] | any> = (articles) => {
  console.log('HOME PROPS', articles.articles)
  return(
    <div>
      <h1>Hello World</h1>
      <ArticleContainer articles={articles.articles}/>
    </div>
  )
}

export default Home


