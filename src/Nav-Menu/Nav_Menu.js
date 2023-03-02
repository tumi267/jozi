import React from 'react'
import { Link } from 'react-router-dom'
import './Nav_Menu.css'
import CloseIcon from '@material-ui/icons/Close';
function Nav_Menu() {
  const close_menu=()=>{
    document.documentElement.style.setProperty('--menu','none')
  }
  return (
    <div className='nav_menu'>
    <div  className='nav_menu_list'>
    <CloseIcon className='close_menu' onClick={()=>{close_menu()}}/>
    <Link to='/' className='nav-links' onClick={()=>{close_menu()}}>home</Link>
    <Link to='/Service' className='nav-links' onClick={()=>{close_menu()}}>services</Link>
    <Link to='/About' className='nav-links' onClick={()=>{close_menu()}}>about us</Link>
    <Link to='/Contact' className='nav-links' onClick={()=>{close_menu()}}>contact us</Link>
    </div>
    </div>
  )
}

export default Nav_Menu