import React from "react";
import "./Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Header() {
  let [search,setSearch] = useState("")
  return (
    <div className="Main">
      <div className="logo">
        <img
          className="logo_img"
          src="https://www.logo.wine/a/logo/BBC_News/BBC_News-Logo.wine.svg"
          alt=""
        />
      </div>
      <div className="search_div">
        <input onChange={(e)=>{
         setSearch(e.target.value)
        }}
          placeholder="Search for News"
          className="input_search"
          type="text"
        />
        <button className="search_btn">search</button>
      </div>
      <div className="buttons_div">
        <Link to="/headlines">
          {" "}
          <button className="headline">Headlines</button>
        </Link>

        <Link to="/">
          {" "}
          <button className="home">Home</button>
        </Link>
        <Link to="/buissness">
          {" "}
          <button className="buissness">Buisness</button>
        </Link>
        <Link to="/about">
          {" "}
          <button className="about">About</button>
        </Link>
        <button className="themeChanger" onClick={()=>{
          if(document.querySelector("body").style.backgroundColor!=="black"){
            document.querySelector("body").style.backgroundColor="black"
          }
          else{
            document.querySelector("body").style.backgroundColor="white"
          }
}}>Change Theme</button>
      </div>
    </div>
  );
}
