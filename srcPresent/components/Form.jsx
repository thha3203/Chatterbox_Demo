import React from 'react';

const Form = function(props) {
  return (
    <form>
      <input type='text' name='message' id='message' />
      <input type='submit' name='submit' className='submit' />
    </form>
  );
};

export default Form;