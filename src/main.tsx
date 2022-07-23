import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header imageURL="https://www.easymarket.pf/wp-content/uploads/2016/10/easy-market-logo.png" />
    <App />
  </React.StrictMode>
)
