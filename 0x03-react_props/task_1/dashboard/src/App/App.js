import React, { Fragment } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import '../Login/Login.css'
import '../Header/Header.css'
import '../Footer/Footer.css'
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
