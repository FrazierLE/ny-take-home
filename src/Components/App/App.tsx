import React, { useState, useEffect } from 'react';
import './App.css';
import { fetchData } from '../../ApiCalls';
import { Routes, Route } from 'react-router-dom';
import ArticleDetails from '../ArticleDetails/ArticleDetails';
import Home from '../Home/Home';

const App: React.FC = () => {
  const [ articles, setArticles ] = useState([])

  const initApp = () => {
    fetchData()
      .then(data => {
        console.log('data results', data.results)
        setArticles(data.results)})
  }

  useEffect(() => {
    initApp()
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home articles={articles}/>}/>
        <Route path='/:uri' element={< ArticleDetails />} />
      </Routes>
    </div>
  );
}

export default App;
