import React, {useState} from 'react'

import '../Components/css/Footer.css'

function Footer() {

const [time, setTime] = useState(new Date().toLocaleTimeString())

setInterval(()=>{
    setTime(new Date().toLocaleTimeString())
}, 1000)
  return (
      <div className='footer_div'>
        <h3 className= 'time_heading' style={{textAlign:'center'}}>{time}</h3>
    </div>
  )
}

export default Footer