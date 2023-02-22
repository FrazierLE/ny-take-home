import React, { useState, useEffect } from 'react';
import './App.css';
import { fetchData } from '../../ApiCalls';
import { Routes, Route } from 'react-router-dom';
import ArticleDetails from '../ArticleDetails/ArticleDetails';
import Home from '../Home/Home';

const App: React.FC = () => {
  const [ articles, setArticles ] = useState([])
  const [searchResults, setSearchResults] = useState<string>('')

  const initApp = () => {
    fetchData()
      .then(data => {
        console.log('data results', data.results)
        setArticles(data.results)})
  }

  useEffect(() => {
    initApp()
  }, [])

  const filterArticles = (search: any) => {
    const filteredSearch = articles?.filter((article: any) => article.title.toLowerCase().match(search.toLowerCase()))
    setArticles(filteredSearch)
    if(filteredSearch.length > 0) {
      setSearchResults('')
    }
    else {
      setSearchResults('Sorry your search did not match any of the articles. Please adjust your search.')
    }
  }

  const resetFilter = () => {
    initApp()
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home articles={articles} filterArticles={filterArticles} resetFilter={resetFilter}/>}/>
        <Route path='/:uri' element={< ArticleDetails />} />
      </Routes>
      <h2>{searchResults}</h2>
    </div>
  );
}

export default App;

