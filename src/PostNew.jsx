
export function PostNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>

      <form>
        <label>Title:</label><br />
        <input type="text"></input>
        <br />
        <label>Body: </label><br />
        <input type="text"></input>
        <br />
        <label>Image: </label><br />
        <input type="text"></input>
        <br/>
        <br />
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}
