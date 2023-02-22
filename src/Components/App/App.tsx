import React, { useState, useEffect } from 'react';
import './App.css';
import { fetchData } from '../../ApiCalls';

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
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
