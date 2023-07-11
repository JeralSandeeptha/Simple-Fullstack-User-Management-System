import React from 'react';
import '../styles/left.css';
import { NavLink } from 'react-router-dom';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
import GroupIcon from '@mui/icons-material/Group';
import DescriptionIcon from '@mui/icons-material/Description';
import SupportIcon from '@mui/icons-material/Support';

function Left() {

  return (
    <div className='left'>
        <NavLink to='/products' className='btn active'>
            <GridViewRoundedIcon className='icon'/>
            <h5>CONTACTS</h5>
        </NavLink>
        <NavLink to='/downloads' className='btn'>
            <FileDownloadRoundedIcon className='icon'/>
            <h5>DOWNLOADS</h5>
        </NavLink>
        <NavLink to='/people' className='btn'>
            <GroupIcon className='icon'/>
            <h5>PEOPLE</h5>
        </NavLink>
        <NavLink to='/invoice' className='btn'>
            <DescriptionIcon className='icon'/>
            <h5>INVOICE</h5>
        </NavLink>
        <NavLink to='/support' className='btn'>
            <SupportIcon className='icon'/>
            <h5>SUPPORT</h5>
        </NavLink>
    </div>
  );

}

export default Left;
