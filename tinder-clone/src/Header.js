import React from 'react';
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';

function Header() {
    return (
        <div className='header'>
            
            <IconButton>
                <PersonIcon fontSize='large' className='header_icon'/>
            </IconButton>
            <img
            className='header_logo'
            src='https://cdn1.vectorstock.com/i/thumb-large/92/15/fire-flame-blue-icon-vector-20239215.jpg'
            alt=''
            />
            <IconButton>
                <ForumIcon fontSize='large' className='header_icon'/>
            </IconButton>
            
        </div>
    )
}

export default Header;
