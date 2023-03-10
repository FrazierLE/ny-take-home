import React, { useState, useEffect } from 'react';
import './App.css';
import { fetchData } from '../../ApiCalls';
import { Routes, Route } from 'react-router-dom';
import ArticleDetails from '../ArticleDetails/ArticleDetails';
import Home from '../Home/Home';
import Error from '../Error/Error';
import { Articles } from '../../interfaces';

const App: React.FC = () => {
  const [ articles, setArticles ] = useState([])
  const [searchResults, setSearchResults] = useState<string>('')
  const [category, setCategory] = useState<string>('home')

  const initApp = (category: string) => {
    fetchData(category)
      .then(data => {
        setArticles(data.results)})
  }

  useEffect(() => {
    initApp(category)
  }, [category])

  const filterArticles = (search: string) => {
    const filteredSearch = articles?.filter((article: Articles, index: number, array: Articles[]) => article.title.toLowerCase().match(search.toLowerCase()))
    setArticles(filteredSearch)
    if(filteredSearch.length > 0) {
      setSearchResults('')
    }
    else {
      setSearchResults('Sorry your search did not match any of the articles. Please adjust your search.')
    }
  }

  const resetFilter = () => {
    initApp(category)
    setSearchResults('')
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home articles={articles} filterArticles={filterArticles} resetFilter={resetFilter} setCategory={setCategory}/>}/>
        <Route path='/:uri' element={< ArticleDetails articles={articles}/>} />
        <Route path='*' element={<Error />} />
      </Routes>
      <h2>{searchResults}</h2>
    </div>
  );
}

export default App;

