import React from 'react';
import './Main.css';
import {useEffect,useState} from 'react'
import axios from 'axios';
import Footer from './Footer';
import { AiOutlineLike } from "react-icons/ai"
import { GoComment } from "react-icons/go";
import Header from './Header';
import { type } from '@testing-library/user-event/dist/type';

function Main() {
  const [data, setData] = useState([]);
  let [search, setSearch] = useState("");
  let [filtered, setfilteredData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=ea14c121ce034b56b4ae40988411c39a"
      );
      setData(response.data.articles);
      console.log(response.data.articles)
      // setfilteredData([data, ...response.data.statewise]);
    }
    getData();
  }, []);
  return (
    <div className="mainwrapper">
         <Header/>
    
    <div className='wrapper'>
      
    {
      data.map((item)=>{
        return(
          <div className='main'>
          <h1 className='heading'>{item.title}</h1>
        <p>{item.author}</p>
        <img className='image' src={item.urlToImage} alt="Not found"/>
        <p>{item.content} </p>
        <div className="buttons">
        <button onClick={(e)=>{
         if(e.target.style.color !=="blue"){
          e.target.style.color ="blue"
         }else{e.target.style.color ="black"}
         }} className='like'><AiOutlineLike/></button>

         <button className='comment'><GoComment/></button>
        </div>
        
          </div>
        )
      })
    }
   <Footer/>
  </div>
  </div>
  );
}

export default Main;
