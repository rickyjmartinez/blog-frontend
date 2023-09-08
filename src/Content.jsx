import { useState, useEffect } from "react";
import axios from "axios";
import { IndexPosts } from "./IndexPosts.jsx";
import { PostNew } from "./PostNew.jsx";
import { Modal } from "./Modal";
import {PostsShow} from "./PostsShow.jsx"; 
import { Signup } from "./Signup.jsx"; 
import { Login }  from "./Login.jsx";
import { LogoutLink } from "./LogoutLink.jsx";
import { Routes, Route } from "react-router-dom"; 
import { About } from "./About"
import { PostShowPage } from "./PostShowPage"

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
      <Routes> 
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />}/>
        <Route path="/logout" element={<LogoutLink />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/posts/new" element={<PostNew onCreatePost={handleCreatePost} />}/>
        <Route path="/posts" element={<IndexPosts posts={posts}  onShowPost={handleShowPost}/>}/>
        <Route path="/posts/:id" element={<PostShowPage />} />
      </Routes>


      
      <Modal show={isPostsShowVisible} onClose={handleClose}>
      <PostsShow post={currentPost} onUpdatePost={handleUpdatePost} onDestroyPost={handleDestroyPost} /> 
      </Modal>
    </div>

  );
 
}
