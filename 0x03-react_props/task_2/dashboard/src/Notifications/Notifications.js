import React from "react";
import './Notifications.css'
import { getLatestNotification } from "../utils/utils";
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem'

const Notifications = () => {

    const btnStyle = {
        background: 'transparent',
        padding: '1rem 2rem',
        border: 'none',
        position: 'absolute',
        right: 20,
        fontSize: '1rem'
    }
    return (
        <div className="Notifications">
            <button aria-label="Close" style={btnStyle} onClick={() => console.log('Close button has been clicked')}>
            <img src={closeIcon} width='10px' alt="close-icon"/>
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <NotificationItem data-priority="default" value="New course available" />
                <NotificationItem data-priority="urgent" value="New resume available" />
                <NotificationItem data-priority="urgent" dangerouslySetInnerHTML={{__html: getLatestNotification()}} />
            </ul>
        </div>
    )
}

export default Notifications