

export function PostNew(props) {
  const handleSubmit = (event) => {    
    event.preventDefault()
    const params = new FormData(event.target)    
    props.onCreatePost(params)
    event.target.reset();
  }


  return (
    <div id="posts-new" >
      <h1>New post</h1>
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
        <button type="submit">Create post</button>
      </form>
    </div>
  );
}
