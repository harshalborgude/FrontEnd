import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'tachyons';                  /* https://tachyons.io/docs/  */
import './index.css';
import App from './containers/App.js';     


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <div>
        <App />
     </div>


  </React.StrictMode>
);


reportWebVitals();
