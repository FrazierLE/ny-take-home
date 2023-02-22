import React, { useState, useEffect } from 'react';
import './App.css';
import { fetchData } from '../../ApiCalls';

const App: React.FC = () => {
  const [ articles, setArticles ] = useState([])

  const initApp = () => {
    fetchData()
      .then(data => {
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
