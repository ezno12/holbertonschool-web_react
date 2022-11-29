import React, { Fragment } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';

const listCourses = [
  {id: 1, name: 'ES6', credit: 60},
  {id: 2, name: 'Webpack', credit: 20},
  {id: 3, name: 'React', credit: 40}
]
const listNotifications = [
  {id: 1, type: "default", value: "New course available"},
  {id: 2, type: "urgent", value: "New resume available"},
  {id: 3, type: "urgent", __html: {__html: getLatestNotification()}},
]


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: props.isLoggedIn || false,
    }
    this.logOut = this.props.logOut;
  }
  handleKeyDown(e) {
    if ( e.ctrlKey && e.key === "h") {
      alert("Logging you out")
      this.logOut();
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown)
  }
  
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown)
  }

  render() {
    return (
      <Fragment>
      <Notifications listNotifications={listNotifications}/>
      <div className="App">
        <Header />
        {this.state.isLoggedIn ? 
        
        <BodySectionWithMarginBottom title="Course list"> <CourseList listCourses={listCourses}/> </BodySectionWithMarginBottom>
        : <BodySectionWithMarginBottom title="Log in to continue"> <Login /> </BodySectionWithMarginBottom>
        
        }
        <BodySection  title="News from the school">
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>
        </BodySection>
        <Footer />
      </div>
      </Fragment>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: () => {return },
}

App.defaultProps = {
  isLoggedIn: false
}

export default App;
