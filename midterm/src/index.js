import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* The Nav Bar */}
        <Route path="/" element={}>
          {/* The Home Page */}
          <Route index element={}/>
          {/* The Items */}
          <Route path='state-demo' element={} />
          {/* Item Display Page */}
          <Route path='effect-demo' element={}>
            {/* Item Index # */}
            <Route path=':startingCount' element={} />
          </Route>
          {/* The Home Page */}
          <Route path='*' element={} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
