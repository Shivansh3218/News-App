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
  let [filtered,setfilteredData]= useState([])
  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=ea14c121ce034b56b4ae40988411c39a"
      );
      setData(response.data.articles);
      console.log(response);
      setfilteredData([data,...response.data.articles])
    }
    getData();
  }, []);
  let storingCount = () => {
    localStorage.setItem("count", count);
  };

  let handleDelete = (title)=>{
    let newArr = filtered.filter((x)=> x.title!==title)
    setfilteredData(newArr)
  }

  
  return (
    <div className="mainwrapper">
      <Header />
      <h1 style={{ textAlign: "center", color: "Red" }}>
        Top Headlines
      </h1>

      <div className="wrapper">
        {filtered.map((item) => {
          if(item.urlToImage){

          
          return (
            <div className="main">
              <h1 className="heading">{item.title}</h1>
              <p>{item.author}</p>
              <img className="image" src={item.urlToImage} alt="Not found" />
              <p>{item.content} </p>
                <div className="buttons">
              <button
                onClick={(e) => {
                  setcount(count++)
                  storingCount();
                  if (e.target.style.color !== "blue") {
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
              <button className="comment">
                <GoComment />
              </button>
              <button className="delete_btn" id={item.title} onClick={()=>{
                handleDelete(item.title)
              }}>Delete</button>
              </div>
            </div>
          );
        }
      })}
        <Footer />
      </div>
    </div>
  );
}