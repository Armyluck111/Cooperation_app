import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import"bootstrap/dist/css/bootstrap.css"
import"bootstrap/dist/js/bootstrap"
import { RecoilRoot } from 'recoil';
import "animate.css"; 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecoilRoot>
    <App />
    </RecoilRoot>
  
  </React.StrictMode>
);



// json-server --watch ./src/db.json --port 3004 
// #00000057

