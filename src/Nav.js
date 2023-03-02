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
        <img className='nav_bar_logo'
        src='https://scontent.fjnb12-1.fna.fbcdn.net/v/t39.30808-6/297486971_10160021954569133_6775235321088203347_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_ohc=IyO9i99zXUYAX9bFWQI&_nc_ht=scontent.fjnb12-1.fna&oh=00_AfCx3UquiGTMHV42CJbOUU1EM5kgnp8dYxmV9MQSFjAeaA&oe=640412A4' 
        alt='logo'/>
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