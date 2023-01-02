import React from "react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Button, Paper } from "@mui/material";
import { Box } from "@mui/system";
import { ColorRing } from "react-loader-spinner";

import logo from "../Assets/logo.png";
import AboutNav from "./AboutNav";
import { ThemeContext } from "../Context/ContextTheme";
import Cards from "./Cards";

function Politics() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [pageTheme, setPageTheme] = useState(theme.light);
  const [datas, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);

  const handleTheme = () => {
    count === 0 ? setCount(1) : setCount(0);
    count === 0 ? setPageTheme(theme.dark) : setPageTheme(theme.light);
  };
  useEffect(() => {
    axios
      .get(`https://newsapi-z4r7.onrender.com/news?q=politics`)
      .then((response) => {
        setData([response.data.articles]);
      });
  }, [page]);

  let pageArr = [1, 2, 3, 4, 5];

  const handleNext = () => setPage((x) => x + 1);
  const handlePrev = () => setPage((x) => x - 1);

  return (
    <React.Fragment>
      <img
        style={{ width: "50%", height: "1%", marginLeft: "25%" }}
        src={logo}
        alt=""
      />
      <AboutNav handleTheme={handleTheme} pageTheme={pageTheme} />
      <Paper
        style={{
          ...pageTheme,
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        {datas.length >= 1 ? (
          datas[0].map((item) => <Cards item={item} pageTheme={pageTheme} />)
        ) : (
          <ColorRing
            style={{ marginTop: "20rem" }}
            visible={true}
            height="700"
            width="300"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        )}
      </Paper>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          margin: "1%",
          paddingBottom: "2rem",
          "@media(max-width:800px)": {
            justifyContent: "center",
          },
        }}
      >
        <Button variant="contained" onClick={handlePrev}>
          Prev
        </Button>
        {pageArr.map((pageNo) => {
          return (
            <Button
              onClick={() => setPage(pageNo)}
              style={{ fontSize: "large" }}
              variant="text"
            >
              {pageNo}
            </Button>
          );
        })}
        <Button variant="contained" onClick={handleNext}>
          Next
        </Button>
      </Box>
    </React.Fragment>
  );
}

export default Politics;
