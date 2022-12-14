import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {store} from "./redux/store/store";
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);



root.render(
   
      <Provider store={store}>
         <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
   

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//"start": "HOST=0.0.0.0 HTTPS=true SSL_CRT_FILE=localhost.pem SSL_KEY_FILE=localhost-key.pem react-scripts start",