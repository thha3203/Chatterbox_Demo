import React from 'react';
import axios from 'axios';
import Rooms from './components/Rooms.jsx';
import Form from './components/Form.jsx';
import Chats from './components/Chats.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: null,
      messages: null,
      count: 0
    };
  };

  componentDidMount() {
    axios.get('/messages')
      .then(response => {
        let newRooms = new Set();
        response.data.forEach(message => {
          if (message.roomname) {
            newRooms.add(message.roomname);
          };
        });
        this.setState( curState => {
          return {
            rooms: newRooms,
            messages: response.data
          };
        });
      })
      .catch(err => console.log('ERROR', err));
  };

  render() {
    return (
      <div>
        <div id='main'>
          <h1>chatterbox</h1>
          <Rooms rooms={this.state.rooms} />
          <Form />
        </div>
        <Chats messages={this.state.messages} />
      </div>
    );
  };
};

export default App;