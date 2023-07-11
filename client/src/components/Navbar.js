import React from 'react';
import logo from '../images/logocrud.PNG';
import user from '../images/usericon.PNG';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import '../styles/Navbar.css';

function Navbar() {

  return (
    <div className='navbar'>
        <img src={logo} alt="logo" className='logo'/>
        <div className='searchDiv'>
            <div className='inner-search'>
                <SearchIcon className='searchIcon' fontSize='medium'/>
                <input type="text" placeholder='search' className='navInput'/>
            </div>
        </div>
        <div className='userDetails'>
            <div className='inner-user'>
                <img src={user} alt="usericon" className='usericon'/>
                <div className='details'>
                    <h3>DANIEL VIANNA</h3>
                    <h5>daniel@cast-soft.com</h5>
                </div>
                <MoreVertIcon className='dots' fontSize='medium'/>
            </div>
        </div>
    </div>
  );

}

export default Navbar;
