import React from 'react'
import './About.css'
function About() {
  return (
    <div className='About_contain'>
    <div className='left'/>
    <div className='right'>
        <div className='intercertion'>
            <div className='logo'/>
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