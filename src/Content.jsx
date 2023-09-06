import { useState, useEffect } from "react";
import axios from "axios";
import { IndexPosts } from "./IndexPosts.jsx";
import { PostNew } from "./PostNew.jsx";
import { Modal } from "./Modal";
import {PostsShow} from "./PostsShow.jsx"; 
import { Signup } from "./Signup.jsx"; 
import { Login }  from "./Login.jsx";
import { LogoutLink } from "./LogoutLink.jsx";

export function Content() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

  const handleIndexPosts = () => {
    console.log('helloooooo');

    axios.get('http://localhost:3000/posts.json').then((response) => {
      // handle success
      console.log(response.data);
      setPosts(response.data);
    });
  };

  useEffect(handleIndexPosts, []);

  const handleShowPost = (post) => {
    setCurrentPost(post);
    setIsPostsShowVisible(true);
  };

  const handleClose = () => {
    setIsPostsShowVisible(false);
  };

  const handleCreatePost = (params) => {
    axios.post("http://localhost:3000/posts.json", params).then(response => {
      console.log(response.data)
      setPosts([...posts, response.data]);
    })
  }

    const handleUpdatePost = (id, params) => {
      console.log('handle update post')
      axios.patch(`http://localhost:3000/posts/${id}.json`, params).then(response => {
      console.log(response.data);
      setCurrentPost(response.data);
      setPosts(
        posts.map(post => {
          if (post.id === id) {
            return response.data;
          } else {
            return post;
          }
        })
      )
    })
    }

    const handleDestroyPost = (id) => {
      console.log("destroy post")
      axios.delete(`http://localhost:3000/posts/${id}.json`).then(response => {
        console.log(response.data)
        handleClose()
        setPosts(
          posts.filter(post => id !== post.id)
        )
      })
    }

  

  return (
    
    <div className="container">
      <Login />
      <LogoutLink />
      <Signup />
      <PostNew onCreatePost={handleCreatePost} />
      {/* <button onClick={handleIndexPosts}>Get Data</button> */}
      <IndexPosts posts={posts}  onShowPost={handleShowPost}/>
      <Modal show={isPostsShowVisible} onClose={handleClose}>
      <PostsShow post={currentPost} onUpdatePost={handleUpdatePost} onDestroyPost={handleDestroyPost} /> 
      </Modal>
    </div>

  );
 
}
