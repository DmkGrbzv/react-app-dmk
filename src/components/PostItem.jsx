import React from "react";
import MyButton from "./UI/button/MyButton";
import {useNavigate} from 'react-router-dom';
import { useEffect } from "react";

const PostItem = (props) => {
  const router = useNavigate();
  

  return (
    <div className="post">
      <div className="post__content">
        <div>
          <strong>{props.post.id}.{props.post.title}</strong>
          {props.post.body}{props.number}
        </div>
        <div className="post__btns">
        <MyButton onClick={()=>{router(`/posts/${props.post.id}`)}}>Open</MyButton>
        <MyButton onClick={()=>{props.remove(props.post)}}>Delete</MyButton>
      </div>
      </div>
    </div>
  );
};

export default PostItem;