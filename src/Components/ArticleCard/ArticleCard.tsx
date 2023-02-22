import React from 'react'
import './ArticleCard.css'

const ArticleCard: React.FC<any> = ({id, byline, title, multimedia}) => {
  return(
    <div className='card'>
      <h2>{title}</h2>
      <h3>{byline}</h3>
      {multimedia && <img src={multimedia[0].url} alt='article image' className='card-img'/>}
      {!multimedia && <img src='#' alt='missing article image'/>}
    </div>
  )
}

export default ArticleCard