import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import Home from './pages/Home';
import Orders from './pages/Orders';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <div>
    <Home/>
    <Orders/>
    
  </div>

);

reportWebVitals();
