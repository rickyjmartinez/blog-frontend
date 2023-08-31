export function PostsShow(props) {
  return (
    <div>
      <p> title:{props.post.title}</p>
      <p>{props.post.body}</p>
    </div>
  )
}