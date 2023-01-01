import React from "react";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import Header from "./Header";
import Like from "./Like";
import Footer from "./Footer";

import { SearchContext } from "../Context/SearchContext";
import { ThemeContext } from  '../Context/ContextTheme';


import '../Components/css/Main.css'
import '../Components/css/Buissness.css'
function Headlines() {
  const [data, setData] = useState([]);
  let [loading, setLoading] = useState(false);
  let search = useContext(SearchContext);
  let [filtered, setfilteredData] = useState([]);
  
  const { theme, setTheme } = useContext(ThemeContext);
  const [pageTheme, setPageTheme] = useState(theme.light);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);

  const handleTheme = () => {
    count === 0 ? setCount(1) : setCount(0);
    count === 0 ? setPageTheme(theme.dark) : setPageTheme(theme.light);
  };
  
  useEffect(() => {
    async function getData() {
      setLoading(true);
      const response = await axios.get(
        'https://newsapi-z4r7.onrender.com/news?q=cricket'
             );
             console.log(response)
      setData(response.data.articles);
      setLoading(false);
      setfilteredData([data, ...response.data.articles]);
    }
    getData();
  }, []);
  let handleDelete = (title) => {
    let newArr = filtered.filter((x) => x.title !== title);
    setfilteredData(newArr);
  };

  useEffect(() => {
    let searched = data.filter((item) => {
      if (item.title) {
        return item.title.includes(search.search);
      }
    });
    setfilteredData(searched);
  }, [search.search]);

 
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

export default Headlines