import React from 'react'
import {useEffect,useState} from 'react'
import './Footer.css'
export default function Footer() {
    const [date, setDate] = useState(new Date());
    let hours = date.getHours()
    let mins =date.getMinutes()
    let secs = date.getSeconds()
    
    function refreshClock() {
        setDate(new Date());
      }
      setInterval(()=>{
        refreshClock()
      },1000)
  return (
    <div className='footer_div'>
        {hours<=12?
        <div  className='timer'>
       <p className='hour'>{hours}:</p>
       <p className='mins'>{mins} :</p>
       <p className='secs'>{secs} :</p>
       <p className='pm'>AM</p>
       </div>
        :
        <div  className='timer'>
        <p className='hour'>{hours-12}:</p>
       <p className='mins'>{mins} :</p>
       <p className='secs'>{secs} :</p>
        <p className='pm'>PM</p>
    </div>
}
    </div>
  )
}
