import React from 'react'
import './Contact.css'
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import EmailIcon from '@material-ui/icons/Email';
import BusinessIcon from '@material-ui/icons/Business';
function Contact() {
  return (
    <div className='contact_contain'>
      <div className='phone contact'><PhoneInTalkIcon/><h3>072 123 4567</h3></div>
      <div className='mail contact'><EmailIcon/> <h3>123@mail.com</h3></div>
      <div className='address contact'><BusinessIcon/><h3>address</h3></div>
    </div>
  )
}

export default Contact