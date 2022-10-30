import React from 'react';

const NotificationItem = ({ type, html, value }) => {
  if (html)
    return (
      <li data-priority={type} dangerouslySetInnerHTML={{ __html: html }}></li>
    );
  return <li data-priority={type}>{value}</li>;
};

export default NotificationItem;