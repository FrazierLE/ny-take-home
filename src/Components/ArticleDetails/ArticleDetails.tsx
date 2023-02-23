import React, { useState } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import './ArticleDetails.css'
import Error from '../Error/Error'
import { ArticlesArray, Articles } from '../../interfaces'

const ArticleDetails: React.FC<ArticlesArray> = (props) => {
  const param = useParams()
  const details = props.articles.find((item: Articles, index: number, array: Articles[]) => item.uri.slice(14) === param.uri)
  return(
    <section className='details-container'>
      {details && 
      <div className='story-details'>
        {details.multimedia && <img src={details.multimedia[0].url} alt='Image from the article' className='article-img'/>}
        <h2>{details.title}</h2>
        <h3>{details.byline}</h3>
        <h4>Published: {details.published_date.slice(0, 10)}</h4>
        <p>{details.abstract}</p>
        <div className='details-links'>
          <NavLink to={details.short_url} className='link'>Read More at NY Times</NavLink>
          <NavLink to='/'><button className='link'>Return to Homepage</button></NavLink>
        </div>
      </div>}
      {!details && <Error />}
    </section>
  )
}

export default ArticleDetails