import React from "react";
import axios from "axios";
import { useEffect, useState, useContext } from "react";

import Header from "./Header";
import Like from "./Like";
import Footer from "./Footer";
import { SearchContext } from "../Context/SearchContext";

import "./Headline.css";

export default function Headlines() {
  let search = useContext(SearchContext);
  const [data, setData] = useState([]);
  let [loading, setLoading] = useState(false);
  let [filtered, setfilteredData] = useState([]);
  useEffect(() => {
    async function getData() {
      setLoading(true);
      const response = await axios.get(
        "https://newsdata.io/api/1/sources?apikey=pub_13820f4297ab264c30745a917e2298feeee80"
      );
      setData(response.data.results);
      console.log(response.data.results)
      setLoading(false);
      console.log(response.data.results[0].title);
      setfilteredData([data, ...response.data.results]);
    }
    getData();
  }, []);

  useEffect(() => {
    let searched = data.filter((item) => {
      console.log(search.search);
      if (item.title) {
        return item.title.includes(search.search);
      }
    });
    setfilteredData(searched);
  }, [search.search]);

  let handleDelete = (title) => {
    let newArr = filtered.filter((x) => x.title !== title);
    setfilteredData(newArr);
  };

  return (
    <div className="mainwrapper">
      <Header />
      <h1 style={{ textAlign: "center", color: "Red" }}>Top Headlines</h1>

      {loading ? (
        <img
          style={{marginLeft:"43%"}}
          className="loader_img_headlines"
          src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"
          alt=""
        />
      ) : (
        <div className="wrapper_of_news">
          {filtered.map((item) => {
            if (item.image_url) {
              return (
                <div key={item.title} className="main">
                  <h1 className="heading">{item.title}</h1>
                  <p>{item.author}</p>
                  <img
                    className="image"
                    src={item.image_url}
                    alt="Not found"
                  />
                  <p>{item.description} </p>
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
