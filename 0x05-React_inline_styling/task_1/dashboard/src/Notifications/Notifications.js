import React from "react";
import { getLatestNotification } from "../utils/utils";
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem'
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape'
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    btnStyle: {
        background: 'transparent',
        padding: '1rem 2rem',
        border: 'none',
        position: 'absolute',
        right: 20,
        fontSize: '1rem'
    },
    container: {
        width: 'fit-content',
        position: 'absolute',
        right: '1rem'
    },
    menuItem: {
        width: 'fit-content',
        marginLeft: 'auto',
    },
    NotificationStyle: {
        borderStyle: '1rem',
        padding: '0 2rem'
    }

})

class Notifications extends React.Component {
    constructor(props) {
        super(props)
        this.markAsRead = this.markAsRead.bind(this)   
    }
    
    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`)
    }

    shouldComponentUpdate(nextProps){
        return (nextProps.listNotifications.length > this.props.listNotifications.length)
    }

    render(){
        const {displayDrawer,  listNotifications} = this.props
        return (
            <div className={css(styles.container)}>
            <div className={css(styles.menuItem)}>
                <p>Your notifications</p>
            </div>
            {displayDrawer &&  <div className={css(styles.NotificationStyle)}>
                <button aria-label="Close" className={css(styles.btnStyle)} onClick={() => console.log('Close button has been clicked')}>
                <img src={closeIcon} width='10px' alt="close-icon"/>
                </button>
                <p>Here is the list of notifications</p>
                <ul className={css(styles.urrgent)}>
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



