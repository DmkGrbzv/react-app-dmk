import React from 'react'
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import PostServise from '../API/PostServise';
import { useFetching } from '../hooks/useFetching';
import MyLoader from "../components/UI/loader/MyLoader";

export default function PostIdPage() {
  const params = useParams();
  const [post,setPost] = useState({});
  const [comments,setComments] = useState([]);
  const [fetchPostById,isLoading,error] = useFetching(async(id)=>{
    const response = await PostServise.getPostById(id);
    setPost(response.data);
  })
  const [fetchComments,isCommentLoading,commentError] = useFetching(async(id)=>{
    const response = await PostServise.getCommentsById(id);
    setComments(response.data);
  })
  useEffect(()=>{
    fetchPostById(params.id);
    fetchComments(params.id);
  },[])
  return (
    <div>
      <div>PostIdPage ID:{params.id}</div>
      {
        isLoading
          ? <MyLoader/>
          : <div>{post.id}. {post.title}</div>
      }
      <br/>
      <div>
        <h2>Comments</h2>
      {
        isCommentLoading
          ? <MyLoader/>
          : <div>{comments.map(comm=>
            <div style={{marginTop:15}}   key={comm.id}>
              <h5>{comm.email}</h5>
              <div>{comm.body}</div>
            </div>
          )}
          </div>
      }
      </div>
    </div>
  )
}
