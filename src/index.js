import React from 'react';  //imports from node_modules directly
import ReactDOM from 'react-dom/client'; //imports from node_modules directly
import './index.css';
import 'bootstrap/dist/css/bootstrap.css' //bootstrap is stored in node_modules. so dont use . or ./ 
import App from './App'; //the default extension is App.js 
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
