import { useState , useEffect } from "react";
import axios from "axios";
import { Header} from "./Header.jsx"; 
import { Footer } from "./Footer.jsx";



function IndexPosts(props) { 
  console.log(props)
  return (
  <div id="posts-index">
    <h1>All posts</h1>

    {props.posts.map((post) => (
      <div key={post.id} className="posts">
      <h2>{post.title}</h2>
      <img src={post.image} alt="" />
      <p>{post.body}</p>
      <button>More info</button>
    </div>  
    ))}


  </div>
  )  
}

function PostNew() {
  return (
  <div id="posts-new">
        <h1>New post</h1>

        <form>
        <label>Title:</label>
        <input type="text"></input>
        <br></br>
        <label>Body:</label>
        <input type="text"></input>
        <br></br>
        <label>Image:</label>
        <input type="text"></input>
      </form>
 </div>
  )
}

function Content() {
const [posts, setPosts] = useState([]);

const handleIndexPosts = () => {
    console.log('helloooooo');

    axios.get('http://localhost:3000/posts.json').then((response) => {      
      // handle success
      console.log(response.data);
      setPosts(response.data);
    })    
}

useEffect(handleIndexPosts, [])

  return (
    <div>
    <PostNew /> 
    {/* <button onClick={handleIndexPosts}>Get Data</button> */}
    <IndexPosts posts={posts} />
    </div>
    
  );
}

function App() {
  return (
    <div>
      <Header />

      <Content /> 

      <Footer />
    
    </div>
  );
}

export default App;
