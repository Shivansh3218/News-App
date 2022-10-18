import React from 'react'
import {useEffect,useState} from 'react'
import './Footer.css'
export default function Footer() {
    const [date, setDate] = useState(new Date());
    let hours = date.getHours()
    function refreshClock() {
        setDate(new Date());
      
      }
useEffect(()=>{
    refreshClock()
},[date])
   
  return (
    <div>
        {hours<=12?
        <div  className='timer'>
       <p className='hour'>{hours}:</p>
       <p className='mins'>{date.getMinutes()} :</p>
       <p className='secs'>{date.getSeconds()} :</p>
       <p className='pm'>AM</p>
       </div>
        :
        <div  className='timer'>
        <p className='hour'>{hours-12} :</p>
        <p className='mins'>{date.getMinutes()} :</p>
        <p className='secs'>{date.getSeconds()} :</p>
        <p className='pm'>PM</p>
    </div>
}
    </div>
  )
}
