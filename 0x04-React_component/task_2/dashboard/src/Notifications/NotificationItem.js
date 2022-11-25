import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = (props) => {
  const { type, html, value, markAsRead, id} = props
  if (html)
    return (
      <li onClick={() => {markAsRead(id)}} data-priority={type} dangerouslySetInnerHTML={html}></li>
    );
  return <li onClick={() => {markAsRead(id)}} data-priority={type}>{value}</li>;
};

NotificationItem.propTypes = {
  html: PropTypes.shape({__html: PropTypes.string}),
  type: PropTypes.string,
  value: PropTypes.string,
  markAsRead: PropTypes.func,
  id: NaN
};

NotificationItem.defaultProps = {
  type: "default"
}
export default NotificationItem;