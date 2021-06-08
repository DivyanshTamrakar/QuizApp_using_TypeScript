import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import {ScoreContextProvider} from './Context/scoreContext';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScoreContextProvider>
      <App />
      </ScoreContextProvider>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
