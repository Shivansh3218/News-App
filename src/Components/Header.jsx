import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
export default function Header() {
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
        <input
          placeholder="Search for News"
          className="input_search"
          type="text"
        />
        <button className="search_btn">search</button>
      </div>
      <div className="buttons_div">
        <Link to="/headlines">
          {" "}
          <button>Headlines</button>
        </Link>

        <Link to="/">
          {" "}
          <button>Home</button>
        </Link>
        <Link to="/buissness">
          {" "}
          <button>Buisness</button>
        </Link>
        <Link to="/about">
          {" "}
          <button>About</button>
        </Link>
        <button onClick={()=>{
          if(document.querySelector("body").style.backgroundColor!=="black"){
            document.querySelector("body").style.backgroundColor="black"
           let allClass= document.querySelectorAll(".wrapper")
           allClass.forEach((i)=>{
            i.style.color = "white"
        })
          }
          else{
            document.querySelector("body").style.backgroundColor="white"
            document.querySelector(".wrapper").style.color="black"
            document.querySelector(".top_heading").classList.remove("active")
          }
        }}>Change Theme</button>
      </div>
    </div>
  );
}
