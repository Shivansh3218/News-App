import React from 'react'
import '../Components/css/About.css'
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
            <img class="image" src="https://media.licdn.com/dms/image/D4D03AQFhXXfToCt_XQ/profile-displayphoto-shrink_800_800/0/1670418374670?e=1678320000&v=beta&t=NwQsVRMD5bcI7nDyo4MxNuydqgDpt6AFLOznpUaEpWo" alt="Owneer Profile Pic"/>
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
