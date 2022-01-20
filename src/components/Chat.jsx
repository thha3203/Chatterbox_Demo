import React from 'react';

const Chat = function(props) {
  return (
    <div className='chat'>
      <div className='username'>{props.user}</div>
      <div>{props.chat}</div>
    </div>
  );
};

export default Chat;