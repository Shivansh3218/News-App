import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./Header";
import "./Main.css";
import Footer from "./Footer";
export default function Headlines() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ea14c121ce034b56b4ae40988411c39a"
      );
      setData(response.data.articles);
      console.log(response);
    }
    getData();
  }, []);

  return (
    <div className="mainwrapper">
      <Header />
      <h1 style={{ textAlign: "center", color: "Red" }}>
        Top Buissness Headlines
      </h1>

      <div className="wrapper">
        {data.map((item) => {
          return (
            <div className="main">
              <h1 className="heading">{item.title}</h1>
              <p>{item.author}</p>
              <img className="image" src={item.urlToImage} alt="Not found" />
              <p>{item.content} </p>
              <div className="buttons"></div>
            </div>
          );
        })}
        <Footer />
      </div>
    </div>
  );
}
