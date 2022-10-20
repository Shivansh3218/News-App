import { AiOutlineLike } from "react-icons/ai";
import { GoComment } from "react-icons/go";
import { useState } from "react";
import React from "react";

export default function Like() {
  let [like, setLike] = useState(0);
  let[comment,setComment]= useState([])
  let handleLike = () => {
    setLike(like + 1);
  };
  let handleComment =()=>{
    let values = document.querySelector(".input_comment").value
    setComment(values)
    console.log(values)
    values =""
  }
  
  return (
    <div>
      <h3>
        <AiOutlineLike onClick={handleLike} />
        {like}
      </h3>
      <div className="comment">
        <input className="input_comment" type="text" />
        <button onClick={()=>{
          handleComment()
        }}>submit</button>
        <p>{comment}</p>
      </div>
      
    </div>
  );
}
