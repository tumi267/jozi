import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import Nav_Menu from './Nav-Menu/Nav_Menu';
import MenuIcon from '@material-ui/icons/Menu';
function Nav() {
    const burger=()=>{
       document.documentElement.style.setProperty('--menu','block')
    }
  return (
   
    <div className='nav_bar_contain'>
        <div > 
        <Link to='/jozi'>
        <div className='nav_bar_logo'/>
        </Link>
        </div>
        <div><MenuIcon onClick={()=>{
            burger()
        }}/></div>
        <Nav_Menu/>
    </div>
 
  )
}

export default Nav