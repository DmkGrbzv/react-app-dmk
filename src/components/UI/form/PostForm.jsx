import React from "react";
import { useState } from "react";
import MyInput from "../input/MyInput";
import MyButton from "../button/MyButton";

const PostForm = ({create}) => {
  const textDefault = "";
  const descriptionDefault = "";
  
  const [post, setPost] = useState({
    body: textDefault,
    title: descriptionDefault, 
  });
  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,id: Date.now()
    }
    create(newPost)
    setPost({ body: textDefault, title: descriptionDefault });
  };
  return (
    <form>
        <MyInput
          type="text"
          value={post.body}
          onChange={(e) => {
            setPost({ ...post, body: e.target.value });
          }}
          placeholder="Description"
        ></MyInput>
        <MyInput
          type="text"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          placeholder="Title"
        ></MyInput>
        <MyButton onClick={addNewPost}>Create post</MyButton>
      </form>
  );
};

export default PostForm;