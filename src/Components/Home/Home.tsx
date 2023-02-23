import React from 'react'
import ArticleContainer from '../ArticleContainer/ArticleContainer'
import Form from '../Form/Form'
import { homeProps } from '../../interfaces'

const Home: React.FC<homeProps> = (articles) => {
  const categories: string[] = ['Arts', 'Automobiles', 'Books', 'Business', 'Fashion', 'Food', 'Health', 'Home', 'Insider', 'Magazine', 'Movies', 'Ny Region', 'Obituaries', 'Opinion', 'Politics', 'Real Estate', 'Science', 'Sports', 'Sunday Review', 'Technology', 'Theater', 'T-magazine', 'Travel', 'Upshot', 'Us', 'World']
  
  const chooseCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
    articles.setCategory(event.currentTarget.value)
  }

  return(
    <div>
      <h1>Daily Dose</h1>
      <select style={{margin: '1rem'}}onChange={(event) => chooseCategory(event)}>
        <option value={'home'}>Choose a category...</option>
        {categories.map((category) => {
          return(<option value={category.toLowerCase()}>{category}</option>)
        })}
      </select>
      <Form filterArticles={articles.filterArticles} resetFilter={articles.resetFilter}/>
      <ArticleContainer articles={articles.articles}/>
    </div>
  )
}

export default Home


