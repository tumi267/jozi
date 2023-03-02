import React from 'react'
import './About.css'
import about from '../images/about.jpeg'
function About() {
  return (
    <div className='About_contain'>
    <div className='left'>
    <img src={about} alt='logo' className='left_image'/>
    </div>
    <div className='right'>
        <div className='intercertion'>
            <div className='logo'>
            <img src='https://scontent.fjnb12-1.fna.fbcdn.net/v/t39.30808-6/297486971_10160021954569133_6775235321088203347_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_ohc=IyO9i99zXUYAX9bFWQI&_nc_ht=scontent.fjnb12-1.fna&oh=00_AfCx3UquiGTMHV42CJbOUU1EM5kgnp8dYxmV9MQSFjAeaA&oe=640412A4' alt='logo' className='logo_image'/>
            </div>
        </div>
        <h2>Who We Are</h2>
        <p className='About_discreption_text_right'>Mattis pellentesque id nibh tortor id. Nunc lobortis mattis aliquam faucibus. Placerat orci nulla pellentesque dignissim. Ut aliquam purus sit amet luctus venenatis lectus. Lacus viverra vitae congue eu consequat. Nibh nisl condimentum id venenatis a condimentum.</p>
    </div>
    <div className='About_discreption'>
    <div className='text_box'><p className='About_discreption_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>
    <div className='text_box'><p className='About_discreption_text'>Urna et pharetra pharetra massa massa. Elementum tempus egestas sed sed risus. Aliquet bibendum enim facilisis gravida neque convallis.</p></div>    
    </div>
    </div>
  )
}

export default About