import React, { Fragment } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import '../Login/Login.css';
import '../Header/Header.css';
import '../Footer/Footer.css';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';




function App({isLoggedIn}) {
  return (
    <Fragment>
    <Notifications />
    <div className="App">
      <Header />
      {isLoggedIn ? <CourseList /> : <Login />}
      <Footer />
    </div>
    </Fragment>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
}

App.defaultProps = {
  isLoggedIn: false
}

export default App;
