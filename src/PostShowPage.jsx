import axios from "axios"; 
import { useEffect, useState } from "react"; 
import { useParams } from "react-router-dom"; 


export function PostShowPage() {
  const [post, setPost] = useState({})
  const params = useParams();

  const getPostData = () => {
    console.log(params);
    axios.get(`http://localhost:3000/posts/${params.id}.json`).then(response => {
      console.log(response)
      setPost(response.data)
    })
  }

  useEffect(getPostData, [])

  return (
    <div>
    <p> title:{post.title}</p>
    <p>{post.body}</p>
    <p>{post.image}</p>
    </div>
  );
}