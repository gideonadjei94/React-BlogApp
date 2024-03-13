import { useState, useEffect } from "react";
import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch("http://localhost:3007/blogs");
  return (
    <div className="Home">
      <h1>All Blogs</h1>
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && <Bloglist blogs={blogs} />}
    </div>
  );
};

export default Home;
