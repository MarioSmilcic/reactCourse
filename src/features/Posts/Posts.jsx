import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Posts.css";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../../stores/cart/cart";
import { useClicksStore } from "../../stores/clicks/clicks.store";

const Posts = () => {
  const { addItemToCart, cart } = useCartStore();

  const { incrementNumberOfClicks } = useClicksStore();

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
    <div className="allPosts">
      {data.map((post) => (
        <div key={post.id} className="posts">
          <div>
            <h2 onClick={() => handleNavigateToPostId(post.id)}>
              {post.title}
            </h2>
            <p>{post.body}</p>
          </div>
          <div className="buttons">
            <button onClick={() => handleDeletePostById(post.id)}>
              Delete
            </button>
            <button
              onClick={() =>
                addItemToCart({
                  // id: post.id,
                  postId: post.id,
                  id: Math.random(),
                  title: post.title,
                }) & incrementNumberOfClicks()
              }
            >
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
