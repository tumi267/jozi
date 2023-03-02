import React from 'react'
import './Service.css'
function Service() {
  return (
    <div className='contain_Service'>
        {/* left */}
        <div className='service_left service_colom'>        
        <h3 className='service_text'>service</h3>
        <p className='service_text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p >
        <h3 className='service_text'>service</h3>
        <p className='service_text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        </div>
        {/* center */}
        <div className='service_center service_colom'>
        <h3 className='service_text'>service</h3>
        <p className='service_text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <img src='https://scontent.fjnb11-1.fna.fbcdn.net/v/t1.18169-9/22853390_10155835797729133_4637894157905369813_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=scJYdHI4vbMAX_Y-Oza&_nc_ht=scontent.fjnb11-1.fna&oh=00_AfAbZEYyzZtuj0DDYcur9eTZH0KwDnBz_tcsIHWGNfqD3g&oe=6427A96D' alt='jozi' className='service_image'/>
        <h3 className='service_text'>service</h3>
        <p className='service_text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        </div>
        {/* right */}
        <div className='service_right service_colom'>
        <h3 className='service_text'>service</h3>
        <p className='service_text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <h3 className='service_text'>service</h3>
        <p className='service_text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        </div>
    </div>
  )
}

export default Service