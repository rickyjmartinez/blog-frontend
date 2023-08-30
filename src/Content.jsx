import { useState, useEffect } from "react";
import axios from "axios";
import { IndexPosts } from "./IndexPosts.jsx";
import { PostNew } from "./PostNew.jsx";
import { Modal } from "./Modal";

export function Content() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);

  const handleIndexPosts = () => {
    console.log('helloooooo');

    axios.get('http://localhost:3000/posts.json').then((response) => {
      // handle success
      console.log(response.data);
      setPosts(response.data);
    });
  };

  useEffect(handleIndexPosts, []);

  const handleShowPost = () => {
    setIsPostsShowVisible(true);
  };

  const handleClose = () => {
    setIsPostsShowVisible(false);
  };

  

  return (
    <div>
      <PostNew />
      {/* <button onClick={handleIndexPosts}>Get Data</button> */}
      <IndexPosts posts={posts}  onShowPost={handleShowPost}/>
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <p>post show</p>
      </Modal>
    </div>

  );
}
