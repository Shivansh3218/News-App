import React from "react";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { red } from "@mui/material/colors";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  Typography,
} from "@mui/material";
import { Button } from "antd";
import { Box } from "@mui/system";

import Footer from "./Footer";
import Header from "./Header";
import Like from "./Like";
import logo from "../Assets/logo.png";
import { SearchContext } from "../Context/SearchContext";
import { ThemeContext } from "../Context/ContextTheme";

import "../Components/css/Main.css";

function Cricket() {
  let search = useContext(SearchContext);
  const [data, setData] = useState([]);
  let [loading, setLoading] = useState(false);
  let [filtered, setfilteredData] = useState([]);

  const { theme, setTheme } = useContext(ThemeContext);
  const [pageTheme, setPageTheme] = useState(theme.light);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);

  // useEffect(() => {
  //   async function getData() {
  //     setLoading(true);
  //     const response = await axios.get(
  //       "https://newsdata.io/api/1/news?apikey=pub_13820f4297ab264c30745a917e2298feeee80"
  //     );
  //     setData(response.data.results);
  //     setLoading(false);
  //     setfilteredData([data, ...response.data.results]);
  //   }
  //   getData();
  // }, []);

  useEffect(() => {
    axios
      .get(`https://newsapi-z4r7.onrender.com/news?q=cricket`)
      .then((response) => {
        setData(response.data.articles);
        console.log(response.data.articles)
        console.log(data,'dasdasdasdasdsad')
        setLoading(false);
        setfilteredData([data, ...response.data.articles]);
      });
  }, []);

  let handleDelete = (title) => {
    let newArr = filtered.filter((x) => x.title !== title);
    setfilteredData(newArr);
  };

  useEffect(() => {
    let searched = data.filter((item) => {
      console.log(search.search);
      if (item.title) {
        return item.title.includes(search.search);
      }
    });
    setfilteredData(searched);
  }, [search.search]);

  const handleTheme = () => {
    count === 0 ? setCount(1) : setCount(0);
    count === 0 ? setPageTheme(theme.dark) : setPageTheme(theme.light);
  };

  return (
    <div className="wrapper">
      <img
        style={{ width: "50%", height: "1%", marginLeft: "25%" }}
        src={logo}
        alt=""
      />
      <Header handleTheme={handleTheme} pageTheme={pageTheme} />
      {loading ? (
        <img
          className="loader_img"
          src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"
          alt=""
        />
      ) : (
        <div className="wrapper_of_news">
          {filtered.map((item) => {
            
              return (
                <Card
                  style={{ ...pageTheme }}
                  sx={{
                    display: "inline-block",
                    maxHeight: 1000,
                    margin: "auto",
                    height: "auto",
                    width: "40%",
                    margin: 3,
                  }}
                  key={item.url}
                >
                  <Box style={{ display: "flex" }}>
                    <Avatar
                      sx={{ bgcolor: red[500], margin: "1rem" }}
                      aria-label="recipe"
                    >
                      Dev
                    </Avatar>
                    <Typography variant="h5" style={{ margin: "1rem" }}>
                      {item.title}
                    </Typography>
                  </Box>

                  <CardMedia
                    component="img"
                    height="194"
                    style={{ width: "100%" }}
                    image={item.urlToImage}
                    alt="News Image"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{ ...pageTheme, width: "100%" }}
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <div className="buttons">
                      <Like value={item.title} />

                      <Button
                        type="primary"
                        id={item.title}
                        danger
                        style={{ color: "whitesmoke", width: "auto" }}
                        onClick={() => {
                          handleDelete(item.title);
                        }}
                      >
                        Delete This News
                      </Button>
                    </div>
                  </CardActions>
                </Card>
              );
            
          })}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Cricket;
