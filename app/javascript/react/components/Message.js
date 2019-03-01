import React from 'react';
import { railsAssetImagePath } from '../constants/railsAssetImagePath';


const Message = ({ name, message, icon }) => {
  return(
    <p>
  <strong>{name}:</strong> 
      {message}
    </p>
  );
};

export default Message;
