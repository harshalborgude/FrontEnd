import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import './index.css';
import App from './App.js';


// import HelloTemp from './HelloTemp.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* Here greetings is a properties (props),it acts as argument for hello.js file. */}
    {/* <HelloTemp greeting={'Hello '+'React Ninja!'}/> */}

    <div>
      <App />
    </div>


  </React.StrictMode>
);


reportWebVitals();
