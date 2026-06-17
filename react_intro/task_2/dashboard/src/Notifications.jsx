import React, { useState } from 'react';
import './Notifications.css';
import Close from './assets/Close.png';
import { getLatestNotification } from './utils';

function Notifications() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    console.log("Close button has been clicked");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="Notifications">
      <button
        className="close-btn"
        aria-label="Close"
        onClick={handleClose}
      >
        <img src={Close} alt="close" />
      </button>

      <p>Here is the list of notifications</p>

      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li data-priority="urgent">
          <strong>urgent requirement</strong>
        </li>
      </ul>
    </div>
  );
}

export default Notifications;
