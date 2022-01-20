import React from 'react';
import Chat from './Chat.jsx';

const Chats = function(props) {
  return (
    <div id='chats'>
      {props.messages
        && props.messages.map(message => {
          return <Chat key={message.message_id} chat={message.text} user={message.username}/>;
        })}
    </div>
  );
};

export default Chats;