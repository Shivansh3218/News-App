import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./Header";
import Like from "./Like";
import Footer from "./Footer";
import { useContext } from "react";
import { SearchContext } from "../Context/SearchContext";

import "./Main.css";
import "./Buissness.css";

export default function Headlines() {
  const [data, setData] = useState([]);
  let [loading, setLoading] = useState(false);
  let search = useContext(SearchContext);
  let [filtered, setfilteredData] = useState([]);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ea14c121ce034b56b4ae40988411c39a"
      );
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
    <div className="mainwrapper">
      <Header />
      <h1 style={{ textAlign: "center", color: "Red" }}>
        Top Buissness Headlines
      </h1>

      {loading ? (
        <img
          className="loader_img_headlines"
          src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"
          alt=""
        />
      ) : (
        <div className="wrapper_of_news">
          {filtered.map((item) => {
            if (item.urlToImage) {
              return (
                <div id={item.title} className="main">
                  <h1 className="heading">{item.title}</h1>
                  <p>{item.author}</p>
                  <img
                    className="image"
                    src={item.urlToImage}
                    alt="Not found"
                  />
                  <p>{item.content} </p>
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
