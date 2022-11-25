import React from "react";
import './Notifications.css'
import { getLatestNotification } from "../utils/utils";
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem'
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape'

const btnStyle = {
    background: 'transparent',
    padding: '1rem 2rem',
    border: 'none',
    position: 'absolute',
    right: 20,
    fontSize: '1rem'
}

class Notifications extends React.Component {
    constructor(props) {
        super(props)
        this.markAsRead = this.markAsRead.bind(this)   
    }
    
    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`)
    }

    render(){
        const {displayDrawer,  listNotifications} = this.props
        return (
            <div className="container">
            <div className="menuItem">
                <p>Your notifications</p>
            </div>
            {displayDrawer &&  <div className="Notifications">
                <button aria-label="Close" style={btnStyle} onClick={() => console.log('Close button has been clicked')}>
                <img src={closeIcon} width='10px' alt="close-icon"/>
                </button>
                <p>Here is the list of notifications</p>
                <ul>
                {listNotifications.map(notification => <NotificationItem 
                                key={notification.id} 
                                type={notification.type} 
                                value={notification.value} 
                                html={notification.__html}
                                markAsRead={this.markAsRead}/>)}
                </ul>
            </div> }
            </div>
    
        )
    }
}


  
Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: []
}
export default Notifications



