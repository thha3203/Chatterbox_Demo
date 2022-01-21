import React from 'react';
import axios from 'axios';
import Rooms from './components/Rooms.jsx';
import Form from './components/Form.jsx';
import Chats from './components/Chats.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      messages: [],
      page: 0
    };
  };

  getMessages(page) {
    axios.get(`/api?page=${page}`)
      .then(response => {
        this.setState( curState => {
          return {
            messages: [...curState.messages, ...response.data]
          };
        });
      })
      .catch(err => console.log('ERROR', err));
  };

  getRooms() {
    axios.get('/api/rooms')
      .then(response => {
        let newRooms = new Set();
        response.data.forEach(room => {
          if (room) {
            newRooms.add(room);
          };
        });
        this.setState( curState => {
          return {
            rooms: newRooms
          };
        });
      })
      .catch(err => console.log('ERROR', err));
  };

  // For Presentation
  handleObserver(entries, observer) {
    let refDiv = entries[0];
    if (refDiv.isIntersecting) {
      let page = this.state.page + 1;
      this.getMessages(page);
      this.setState( curState => {
        return {
          page: page
        };
      });
    };
  };

  componentDidMount() {
    this.getRooms();
    this.getMessages(this.state.page);

    // For Presentation
    // Obersver Options
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1
    };
    // Create an observer
    this.observer = new IntersectionObserver(
      this.handleObserver.bind(this),
      options
    );
    // Observe end of page
    this.observer.observe(this.loadingRef);
  };

  render() {
    return (
      <div>
        <div id='main'>
          <h1>lazy load chatterbox</h1>
          <Rooms rooms={this.state.rooms} />
          <Form />
        </div>
        <Chats messages={this.state.messages} />
        {/* For Presentation */}
        <div ref={ (loadingRef) => this.loadingRef = loadingRef } className='reference'>REFERENCE</div>
      </div>
    );
  };
};

export default App;