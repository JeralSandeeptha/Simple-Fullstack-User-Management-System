import React from 'react';
import { Link } from 'react-router-dom';
import user from '../images/usericon.PNG';
import '../styles/user.css';

function User() {

  return (
    <div className='user'>
        <div className='user-top'>
            <div className='left'>
                <h5>DONGLE CODE</h5>
                <h2>YXPA3GET</h2>
            </div>
            <div className='right'>
                <img src={user} alt="user" />
                <div className='user-right'>
                    <h6>ASSIGNED TO</h6>
                    <h6>Igor Silva</h6>
                </div>
            </div>
        </div>
        <div className='user-center'>
            <div className='box'>
                <h5 className='title'>PRODUCT</h5>
                <h5>Wysiwyg</h5>
            </div>
            <div className='box'>
                <h5 className='title'>ADD-ON</h5>
                <h5>N/A</h5>
            </div>
            <div className='box'>
                <h5 className='title'>TYPE</h5>
                <h5>Design</h5>
            </div>
        </div>
        <div className='user-bottom'>
            <div className='user-bottom-top'>
                <div className='user-bottom-left'>
                    <h5>TYPE</h5>
                    <h5>AUTO-RENEWAL</h5>
                    <h5>SUBSCRIPTION</h5>
                </div>
                <div className='user-bottom-right'>
                    <h5>Lease</h5>
                    <h5>On</h5>
                    <h5>12 months left</h5>
                </div>
            </div>
            <Link className='btn' to=''>RENEW OR UPGRADE</Link>
        </div>
    </div>
  );

}

export default User;
