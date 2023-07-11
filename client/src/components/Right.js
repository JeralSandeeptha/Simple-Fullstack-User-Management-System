import React from 'react';
import '../styles/right.css';
import Activities from './Activities';
import User from './User';

function Right() {

  return (
    <div className='right'>
      <User/>
      <Activities/>
    </div>
  );

}

export default Right;
