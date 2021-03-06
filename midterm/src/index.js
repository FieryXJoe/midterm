import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Items from './Items';
import Home from './Home';
import NavBar from './NavBar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* The Nav Bar */}
        <Route path="/" element={<NavBar />}>
          {/* The Home Page */}
          <Route path="home" element={<Home />}/>
          {/* The Items */}
          <Route path='items' element={<Items />} >
            <Route path=':itemNum' element={<Items />} />
          </Route>
          {/* The Home Page */}
          <Route path='*' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
