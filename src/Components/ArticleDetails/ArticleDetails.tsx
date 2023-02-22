import React, { useState } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import './ArticleDetails.css'
import NavBar from '../NavBar/NavBar'

const ArticleDetails: React.FC<any> = (props) => {
  const param = useParams()
  const details = props.articles.find((item: any) => item.uri.slice(14) === param.uri)
  return(
    <section className='details-container'>
      <NavBar />
      {details && <div>
        {details.multimedia && <img src={details.multimedia[0].url} alt='Image from the article' className='article-img'/>}
        <h2>{details.title}</h2>
        <h3>{details.byline}</h3>
        <h4>Published: {details.published_date.slice(0, 10)}</h4>
        <NavLink to={details.short_url}>Link to the Article</NavLink>
      </div>}
    </section>
  )
}

export default ArticleDetails