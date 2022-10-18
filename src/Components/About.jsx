import React from 'react'
import './About.css'
import Header from './Header'
export default function About() {
  return (
    <div>
        <Header/>
         <h1 class="top_heading">ABOUT ME</h1>
    <header>
        <h1><span class="blue">Shivansh</span> Rawat</h1>

    </header>

    <div class="introduction_and_details">
        <div class="image">
            <img class="image" src="https://scontent-del1-2.xx.fbcdn.net/v/t39.30808-6/300709597_1257015031738935_7941720460539755241_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_ohc=mqRHNpatoBcAX_jAWHn&_nc_ht=scontent-del1-2.xx&oh=00_AT_gRBuQLw6gCD5ULLnl2IZZRYcbqxYUC4aGzLF-NwiQSw&oe=6352E887" alt=""/>
        </div>
        <div class="details">
            <h2 className='h2'>Name : <span>Shivansh Rawat</span></h2>
            <h2 className='h2'>Goal : <span>Front End Developer</span></h2>
            <h2 className='h2'>College : <span class="school">Hemvati Nandan Bahuguna Garhwal University</span></h2>
            <h2 className='h2'>Email : <span>shivanshrawat587@gmail.com</span></h2>
            <a class="resume"
                href="https://docs.google.com/document/d/14H3ex3qth1BqlGrwiLEZF2jUHWbllhT3/edit?usp=sharing&ouid=118136014747440645481&rtpof=true&sd=true">Download
                MY Resume</a>
        </div>
    </div>
</div>
  )
}
