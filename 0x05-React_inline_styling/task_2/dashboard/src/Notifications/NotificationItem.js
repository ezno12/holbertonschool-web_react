import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  defaultStyle: {
    color: 'red'
  },
  urgentStyle: {
    color: 'blue'
  }
})

class NotificationItem extends React.PureComponent {

  render() {
    const { type, html, value, markAsRead, id} = this.props
    if (html)
    return (
      <li 
      onClick={() => {markAsRead(id)}}
      data-priority={type}
      dangerouslySetInnerHTML={html}
      className={type === "default" ? css(styles.urgentStyle) : css(styles.defaultStyle)}
      ></li>
    );
  return <li 
          onClick={() => {markAsRead(id)}}
          data-priority={type}
          className={type === "default" ? css(styles.urgentStyle) : css(styles.defaultStyle)}
          >{value}</li>;
  }
}


NotificationItem.propTypes = {
  html: PropTypes.shape({__html: PropTypes.string}),
  type: PropTypes.string,
  value: PropTypes.string,
  markAsRead: PropTypes.func,
  id: PropTypes.func
};

NotificationItem.defaultProps = {
  type: "default"
}
export default NotificationItem;