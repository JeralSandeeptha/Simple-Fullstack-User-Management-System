import React from 'react';
import Center from './Center';
import Left from './Left';
import Right from './Right';
import '../styles/body.css';

function Body() {

  return (
    <div className='body'>
      <Left/>
      <Center/>
      <Right/>
    </div>
  );

}

export default Body;
