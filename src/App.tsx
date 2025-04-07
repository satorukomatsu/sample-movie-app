import React from 'react';
import './css/App.css';
import Home from './component/pages/Home';
import SearchResult from './component/pages/SearchResult';
import NotFound from './component/pages/NotFound';
import { Routes, Route } from 'react-router-dom';

const App:React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search-result" element={<SearchResult/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
