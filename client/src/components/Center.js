import React from 'react';
import '../styles/center.css';
import CenterHeader from '../components/CenterHeader';
import Titles from './Titles';

function Center() {

  return (
    <div className='center'>
      <CenterHeader/>
      <Titles/>
    </div>
  );

}

export default Center;
