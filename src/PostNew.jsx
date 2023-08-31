
export function PostNew() {
  return (
    <div id="posts-new" >
      <h1>New post</h1>

      <form>
        <label>Title:</label><br />
        <input type="text" placeholder="Title of blog"></input>
        <br />
        <label>Body: </label><br />
        <input type="text" placeholder="blog goes here"></input>
        <br />
        <label>Image: </label><br />
        <input type="text" placeholder="image URL"></input>
        <br/>
        <br />
        <button type="button" class="btn btn-primary btn-lg">Submit</button>
      </form>
    </div>
  );
}
