import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { useState } from "react";


import '../Components/css/Like.css'

export default function Like(props) {

  let [like, setLike] = useState(0);
  let[comment,setComment]= useState([])
  let[newComment,setNewComment] =useState("")
  let handleLike = () => {
    setLike(like + 1);
  };
  
let handleComment = ()=>{
  setComment( [...comment,newComment])
  console.log(newComment)
  setNewComment("")
}
  
  return (
    <div className="likes_div" key= {props.value}> 
      <h3 className="like_btn">
       <button className="like_button"><AiOutlineLike onClick={handleLike} /></button> 
        &nbsp;{like}
      </h3>
      <div className="comment">
        <input className="input_comment" value={newComment} onChange={(e)=>{
          setNewComment(e.target.value)
        }} placeholder ="Enter your comment" type="text" />
        <button className="comment_btn" onClick={()=>{
          handleComment()
          document.querySelector(".input_comment").value=""
        }}>Comment</button>
        <h5 style={{marginTop:"-0.5rem", colour:"grey", cursor:"pointer"}}>Comments</h5>
      {  
       comment.map((cmt)=>{
        return(
          <>
          <p style={{margin:"0"}} key={props.value}>{cmt}</p>
          </>
        )
       })
       }
      </div>
    </div>
  );
}
