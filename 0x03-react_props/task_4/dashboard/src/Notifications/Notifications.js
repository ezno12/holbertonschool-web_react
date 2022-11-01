import React from "react";
import './Notifications.css'
import { getLatestNotification } from "../utils/utils";
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem'
import PropTypes from 'prop-types';

const Notifications = ({displayDrawer}) => {

    const btnStyle = {
        background: 'transparent',
        padding: '1rem 2rem',
        border: 'none',
        position: 'absolute',
        right: 20,
        fontSize: '1rem'
    }
    return (
        <div className="container">
        <div className="menuItem">
            <p>Your notifications</p>
        </div>
        { displayDrawer &&  <div className="Notifications">
            <button aria-label="Close" style={btnStyle} onClick={() => console.log('Close button has been clicked')}>
            <img src={closeIcon} width='10px' alt="close-icon"/>
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <NotificationItem type="default" value="New course available" />
                <NotificationItem type="urgent" value="New resume available" />
                <NotificationItem type="urgent" html={{__html: getLatestNotification()}} />
            </ul>
        </div> }
        </div>

    )
}
Notifications.prototype = {
    displayDrawer: PropTypes.bool
}
  
Notifications.defaultProps = {
    displayDrawer: false
}
export default Notifications