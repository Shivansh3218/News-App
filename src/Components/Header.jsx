import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useContext } from "react";
import { Switch, styled, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { SearchContext } from "../Context/SearchContext";
import { useNavigate } from "react-router-dom";

import { Input } from "antd";
import { Drawer } from "antd";

import "../Components/css/Header.css";

const { Search } = Input;

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

const Navbar = ({ handleTheme, pageTheme }) => {
  const navigate=useNavigate()
  const { search, handleSearch } = useContext(SearchContext);
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };

  let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  const userImg = localStorage.getItem("img");


  return (
    <>
      <nav className="main-nav" style={{ ...pageTheme }}>
        {/* 1st logo part  */}
        <div className="logo">
          <MenuIcon
            onClick={showDrawer}
            sx={{ fontSize: "4rem", cursor: "pointer" }}
          />

          <Drawer
            style={{ ...pageTheme, display: "flex", flexDirection: "column" }}
            placement="left"
            onClose={onClose}
            open={open}
          >
            {loggedInUser.Name === "Guest User" ? (
              <img
                id="userImg"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                alt=""
              />
            ) : (
              <img id="userImg" src={userImg} alt="" />
            )}
            <Typography variant="h4" sx={{ marginTop: "1rem" }}>
              Welcome !! <span id="text-red">{loggedInUser.Name}</span>
            </Typography>

            <div
              className="logOut_btn"
              style={{ position: "absolute", bottom: "5%", width: "80%" }}
            >
              <a href="/">
                <button className="logutButton">Logout</button>
              </a>
            </div>
          </Drawer>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
          style={{ ...pageTheme }}
        >
          <Search
            placeholder="input search text"
            allowClear
            value={search}
            enterButton="Search"
            size="large"
            onChange={handleSearch}
          />
          <ul>
            <li onClick={() => navigate("/MainNews")}>Home</li>
            <li onClick={() => navigate("/about")}>About</li>
            <li onClick={() => navigate("/cricket")}>Cricket</li>
            <li onClick={() => navigate("/politics")}>Politics</li>
            <li onClick={() => navigate("/headlines")}>Headlines</li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <MaterialUISwitch
            sx={{
              " @media (min-width: 1000px)": {
                marginTop: "10%",
                marginLeft: "20%",
              },
            }}
            onClick={() => {
              if (
                document.querySelector("body").style.backgroundColor !== "black"
              ) {
                document.querySelector("body").style.backgroundColor = "black";
              } else {
                document.querySelector("body").style.backgroundColor = "white";
              }
              handleTheme();
            }}
          />

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
