import React, { useEffect, useState } from 'react'
import './Home.css'
function Home() {
 let [index,setIndex]=useState(0);

 useEffect(()=>{
    const imageToRender=()=>{
        if(index<4){
          setTimeout(()=>{   
          setIndex(index+1)
          switch (index) {
            case index=1:
                document.documentElement.style.setProperty('--backing0','none')
                document.documentElement.style.setProperty('--backing2','none')
                document.documentElement.style.setProperty('--backing1','block')
            break;
            case index=2:
                document.documentElement.style.setProperty('--backing0','none')
                document.documentElement.style.setProperty('--backing1','none')
                document.documentElement.style.setProperty('--backing2','block')
            break;
            default:
            break;
          }
          }, 7000);  
          }else{
          setTimeout(()=>{
            document.documentElement.style.setProperty('--backing1','none')
            document.documentElement.style.setProperty('--backing2','none')
            document.documentElement.style.setProperty('--backing0','block')
          setIndex(0)
          })
         }
         }     
     imageToRender()

 },[index])
  return (
      <div className='home_contain'>
      <div className='home_hero_img home_hero_img_0'>
        <h1 className='home_copy_1'>
        <span>legal</span>
        <span>dose</span>
        <span>not</span>
        <span>have</span>
        <span>to</span>
        <span>be</span>
        <span>boring</span>
        </h1>  
      </div>
      <div className='home_hero_img home_hero_img_1'>
        <h1 className='home_copy_2'>legal counsel on call</h1>      
      </div>
      <div className='home_hero_img home_hero_img_2'>
        <h1 className='home_copy_3'>good service makes a differance</h1>
      </div>
      </div>
  )
}

export default Home