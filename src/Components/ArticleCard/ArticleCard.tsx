import React from 'react'
import './ArticleCard.css'
import { Link } from 'react-router-dom'

const ArticleCard: React.FC<any> = ({id, byline, title, multimedia}) => {
  return(
    <Link to={`/${id.slice(14)}`} key={id}>
      <div className='card'>
        <h2>{title}</h2>
        <h3>{byline}</h3>
        {multimedia && <img src={multimedia[0].url} alt='article image' className='card-img'/>}
        {!multimedia && <img src='#' alt='missing article image'/>}
      </div>
    </Link>
  )
}

export default ArticleCard