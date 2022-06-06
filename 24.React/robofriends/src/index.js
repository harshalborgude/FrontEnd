import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { robots } from './Robots';
import CardList from './CardList.js'

// import App from './App';
// import HelloTemp from './HelloTemp.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* Here greetings is a properties (props),it acts as argument for hello.js file. */}
    {/* <HelloTemp greeting={'Hello '+'React Ninja!'}/> */}

    
    <div>
      {/* sending elements as a props to card method. */}
      <CardList robots={ robots }/>
    </div>


  </React.StrictMode>
);


reportWebVitals();
