import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Footer";
import Header from "./Header";
import Like from "./Like";
import { useContext } from "react";

import { SearchContext } from "../Context/SearchContext";
import { ThemeContext } from  '../Context/ContextTheme';


import '../Components/css/Main.css'

function Main() {
  let search = useContext(SearchContext);
  const [data, setData] = useState([]);
  let [loading, setLoading] = useState(false);
  let [filtered, setfilteredData] = useState([]);


  const { theme, setTheme } = useContext(ThemeContext);
  const [pageTheme, setPageTheme] = useState(theme.light);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  
  useEffect(() => {
    async function getData() {
      setLoading(true);
      const response = await axios.get(
        "https://newsdata.io/api/1/news?apikey=pub_13820f4297ab264c30745a917e2298feeee80"
      );
      setData(response.data.results);
      console.log(response.data.results)
      setLoading(false);
      console.log(response.data.results[0].title);
      setfilteredData([data, ...response.data.results]);
    }
    getData();
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
      <Header handleTheme={handleTheme} pageTheme={pageTheme} />
      {loading ? (
        <img
          className="loader_img"
          src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"
          alt=""
        />
      ) : (
        <div className="wrapper_of_news" >
          {filtered.map((item) => {
            if (item.image_url) {
              return (
                <div key={item.title} className="main" style={{...pageTheme}}>
                  <h1 className="heading" style={{...pageTheme}}>{item.title}</h1>
                  <p>{item.author}</p>
                  <img
                    className="image"
                    src={item.image_url}
                    alt="News Images"
                  />
                  <p style={{...pageTheme}}>{item.description} </p>
                  <div className="buttons">
                    <Like value={item.title} />

                    <button
                      className="delete_btn"
                      id={item.title}
                      onClick={() => {
                        handleDelete(item.title);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            }
          })}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Main;
