import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../NavBar";
import PerPageSetup from "../../PerPageSetup";

function PostLister() {
  const initialState = {
    posts: [],
    loading: true,
    currentPage: 1,
    postPerPage: 5,
    pageNumber: 1,
  };
  const [data, setData] = useState(initialState);
  useEffect(() => {
    const fetchData = async () => {
      setData({ ...data, loading: true });
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const allPosts = response.data;
        setData({ ...data, posts: allPosts, loading: false });
      } catch (error) {

        setData({ ...data, posts: [{title:'ERROR,can not reach to data  from  jsonplaceholder'}], loading: false });

      }
    };

    fetchData();
  }, []); // eslint-disable-line

  // const pages = Math.ceil(data.posts.length / data.postPerPage);
  const lastPostIndex = data.currentPage * data.postPerPage;
  const firstPostIndex = lastPostIndex - data.postPerPage;
  const currentPosts = data.posts.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      {currentPosts.map((post) => (
        <div key={post.id} className="container">
          <div className="post">{post?.title}</div>
        </div>
      ))}
      <br />
      <PerPageSetup data={data} setData={setData} />
      {/* <br /> */}
      <NavBar data={data} setData={setData} />
    </>
  );
}

export default PostLister;
