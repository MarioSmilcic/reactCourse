import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Posts.css";
import { useNavigate } from "react-router-dom";

const Posts = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setData(res.data.splice(0, 10));
      })
      .catch((error) => {
        console.log(error, "ERR");
      });
  }, []);

  const handleNavigateToPostId = (postId) => {
    navigate(`/posts/${postId}`);
  };

  const handleDeletePostById = async (postId) => {
    try {
      await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      setData((prevData) => prevData.filter((post) => post.id !== postId));
      alert(`Post ${postId} Deleted`);
    } catch (error) {
      console.log(err, "ERR");
    }
  };

  return (
    /* {data.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))} */
    <div className="allPosts">
      {data.map((post) => (
        <div key={post.id} className="posts">
          <h2 onClick={() => handleNavigateToPostId(post.id)}>{post.title}</h2>
          <p>{post.body}</p>
          <button onClick={() => handleDeletePostById(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Posts;
