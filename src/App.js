import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Pagination from "./components/pagination/Pagination";
import Post from "./components/post/Post";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [filteredPost, setFilteredPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const searchText = useRef("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setIsLoading(false);
      setPosts(response.data);
      setFilteredPost(response.data);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
      throw new Error("something went wrong while requesting posts");
    }
  }, []);

  const searchPost = (e) => {
    setCurrentPage(1);
    searchText.current = e.target.value;
    setFilteredPost(() =>
      posts.filter((post) => post.title.indexOf(e.target.value) > -1)
    );
  };

  if (isLoading) {
    return <p className="loading-text loading">Loading ...</p>;
  }

  return (
    <>
      <div className="header">
        <div style={{ marginLeft: "1rem" }}>
          <h1>Social Media Posts</h1>
        </div>
        <div className="search-box">
          <input
            type="text"
            className="search-input "
            placeholder="Search.."
            ref={searchText}
            onChange={searchPost}
          />

          <button className="search-button">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>

      {filteredPost.length ? (
        <>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            data={filteredPost}
            RenderComponent={Post}
            title="Posts"
            pageLimit={5}
            dataLimit={8}
          />
        </>
      ) : (
        <p className="loading-text loading">No post found </p>
      )}
    </>
  );
}

export default App;
