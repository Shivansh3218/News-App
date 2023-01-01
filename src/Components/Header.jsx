import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Context/ContextTheme";
import { SearchContext } from "../Context/SearchContext";
import { styled } from "@mui/material/styles";
import { AppBar, Switch, Box, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";



import '../Components/css/Header.css'

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function Header({ handleTheme, pageTheme }) {
  const { search, handleSearch } = useContext(SearchContext);

 
  return (
    <div className="Main" style={{ ...pageTheme }}>
      <div className="logo">
        <img
          className="logo_img"
          src="https://www.logo.wine/a/logo/BBC_News/BBC_News-Logo.wine.svg"
          alt=""
        />
        <h2 className="Bright_heading">BBC News English</h2>
      </div>

      <div className="search_div">
        <input
          onChange={handleSearch}
          value={search}
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

      
           <Switch {...label} defaultChecked  onClick={() => {
            handleTheme();
            if (
              document.querySelector("body").style.backgroundColor !== "black"
            ) {
              document.querySelector("body").style.backgroundColor = "black";
            } else {
              document.querySelector("body").style.backgroundColor = "white";
            }
          }}/>
      </div>
    </div>
  );
}
