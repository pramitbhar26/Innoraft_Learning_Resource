import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css";
const Header = () => {
  return (
    <div className='head1'>
        <div className='buttons1'>
            <a className='a2'>Home</a>
            <a className='a2'>Services</a>
            <a className='a2'>Profile</a>
            <a className='a2'>Contact Us</a>
        </div>
    </div>
  )
}

export default Header