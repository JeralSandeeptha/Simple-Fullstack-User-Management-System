import React from 'react';
import '../styles/centerHeader.css';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';

function CenterHeader() {

  return (
    <div className='centerHeader'>
      <div className='centerHeaderleft'>
        <h2>My Contacts</h2>
      </div>
      <div className='centerHeaderleftright'>
        <div className='search'>
            <input type="text" className='addinput' placeholder='search'/>
            {/* <SearchIcon className='search'/> */}
        </div>
        <Link to='/addnewuser' className='adduser'>
            <AddIcon className='plus'/>
            <h5>ADD CONTACT</h5>
        </Link>
      </div>
    </div>
  );

}

export default CenterHeader;
