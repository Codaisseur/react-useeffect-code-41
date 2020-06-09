import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  console.log("An I (the component) rendered?");

  useEffect(() => {
    console.log("Am I (the effect) run?");

    async function getData() {
      console.log("A");
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      console.log("B");

      setPosts(res.data);
    }

    getData();
  }, []);

  console.log("rendering almost...");

  return (
    <div>
      {posts.length === 0 ? <p>Loading...</p> : <p>Here's the posts:</p>}

      {posts.map((post) => {
        return <li>{post.title}</li>;
      })}
    </div>
  );
}
