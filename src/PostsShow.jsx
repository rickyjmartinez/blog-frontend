import axios from "axios"


export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault()
    const params = new FormData(event.target)
    console.log('submitting edit')
    axios.patch(`http://localhost:3000/posts/${props.post.id}.json`, params).then(response => {
      console.log(response.data); 
    })
  }

  const handleClick = () => {
    console.log('click')
    props.onDestroyPost(props.post.id)
  }

  return (
    <div>

      <p> title:{props.post.title}</p>
      <p>{props.post.body}</p>
      <p>{props.post.image}</p>
      <br />
      <button onClick={handleClick}>Destroy post</button>
      <form onSubmit={handleSubmit}>
        <label>Title:</label><br />
        <input type="text" name="title" placeholder="Title of blog"></input>
        <br />
        <label>Body: </label><br />
        <input type="text" name="body" placeholder="blog goes here"></input>
        <br />
        <label>Image: </label><br />
        <input type="text" name="image" placeholder="image URL"></input>
        <br/>
        <br />
        <button type="submit">Edit post</button>
      </form>
    </div>
  )
}