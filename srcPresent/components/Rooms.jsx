import React from 'react';

const Rooms = function(props) {
  var rooms = null;
  if (props.rooms) {
    rooms = Array.from(props.rooms);
  };

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      Room: <select onChange={handleChange}>
        {rooms
          && rooms.map((room, index) => {
            return <option key={index} value={room}>{room}</option>
          })}
      </select> <button>Add Room</button>
    </div>
  );
};

export default Rooms;