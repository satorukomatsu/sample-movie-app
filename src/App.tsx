import React from 'react';
import './css/App.css';
import Home from './component/pages/Home';
import SearchResult from './component/pages/SearchResult';
import { Routes, Route } from 'react-router-dom';

const App:React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search-result" element={<SearchResult/>}/>
      </Routes>
    </div>
  );
}

export default App;
