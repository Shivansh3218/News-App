import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./Header";
import "./Headline.css";
import { AiOutlineLike } from "react-icons/ai";
import { GoComment } from "react-icons/go";
import Footer  from "./Footer";
export default function Headlines() {
  const [data, setData] = useState([]);
  let[count,setcount]= useState(0)
  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=ea14c121ce034b56b4ae40988411c39a"
      );
      setData(response.data.articles);
      console.log(response);
    }
    getData();
  }, []);
  let storingCount = () => {
    localStorage.setItem("count", count);
  };


  
  return (
    <div className="mainwrapper">
      <Header />
      <h1 style={{ textAlign: "center", color: "Red" }}>
        Top Headlines
      </h1>

      <div className="wrapper">
        {data.map((item) => {
          return (
            <div className="main">
              <h1 className="heading">{item.title}</h1>
              <p>{item.author}</p>
              <img className="image" src={item.urlToImage} alt="Not found" />
              <p>{item.content} </p>
              <div className="buttons">
              <button
                onClick={(e) => {
                  storingCount();
                  if (e.target.style.color !== "blue") {
                    setcount(count+1)
                    e.target.style.color = "blue";
                  } else {
                    e.target.style.color = "black";
                  }
                }}
                className="like"
              >
                <AiOutlineLike />
                &nbsp;{localStorage.getItem("count")}
              </button>
              {/* <button className="comment">
                <GoComment />
              </button> */}
               <input type="text" className="input_comment" placeholder="Add a comment" />
              </div>
            </div>
          );
        })}
        <Footer />
      </div>
    </div>
  );
}