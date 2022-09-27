import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import '../Header/Header'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications'




function App() {
  return (
    <Fragment>
    <Notifications />
    <div className="App">
      <Header />
        <Login />
      <Footer />
    </div>
    </Fragment>
  );
}

export default App;
