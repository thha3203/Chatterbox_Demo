import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  };

  render() {
    return (
      <div>
        Hello React!
      </div>
    );
  };
};

export default App;