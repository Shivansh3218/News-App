import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./Header";
import "./Headline.css";
import Like from "./Like";
import Footer  from "./Footer";
import { useContext } from "react";
// import { type } from "@testing-library/user-event/dist/type";
import { SearchContext} from '../Context/SearchContext'
export default function Headlines() {
  let search =useContext(SearchContext)
  const [data, setData] = useState([]);
  let[loading,setLoading]= useState(false)
  let [filtered,setfilteredData]= useState([])
  useEffect(() => {
    async function getData() {
      setLoading(true)
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=ea14c121ce034b56b4ae40988411c39a"
      );
      setData(response.data.articles);
      console.log(response);
      setLoading(false)
      setfilteredData([data,...response.data.articles])
    }
    getData();
  }, []);
  
  useEffect(() => {
    let searched = data.filter((item) => {
      console.log(search.search)
      if (item.title) {
        return item.title.includes(search.search);
      }
    });
    setfilteredData(searched);
  }, [search.search]);

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
     
      {loading?<img className="loader_img_headlines" src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="" />:
      <div className="wrapper_of_news">
    
      {filtered.map((item) => {
        if(item.urlToImage){
        return (
          <div id={item.title} className="main">
            <h1 className="heading">{item.title}</h1>
            <p>{item.author}</p>
            <img className="image" src={item.urlToImage} alt="Not found" />
            <p>{item.content} </p>
            <div className="buttons">
           
                <Like/>

              <button className="delete_btn" id={item.title} onClick={()=>{
                handleDelete(item.title)
              }}>Delete</button>
            </div>
          </div>
        );
      }})}
      </div>
}
        <Footer />
      </div>
  );
}