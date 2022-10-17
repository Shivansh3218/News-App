import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import Contact from './Contact'
export default function Header() {
  return (
    <div className='Main'>
      <div className="logo">
        <img className='logo_img' src="https://www.logo.wine/a/logo/BBC_News/BBC_News-Logo.wine.svg" alt="" />
      </div>
    <div className="buttons_div">
     <button>About Us</button>
    <Link to="/contact"> <button>Buisness</button></Link>
    <Link to="/headlines"> <button>Headlines</button></Link>
    </div>
    </div>
  )
}
