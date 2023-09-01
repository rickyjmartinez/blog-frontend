export function Signup() {
  return (
    <div>
      <div id="signup">
        <h1>Signup</h1>
        <form method="post" action="http://localhost:3000/users.json">
          <div>
            Name: <input type="text" name="name" />
          </div>
          <div>
            Email: <input type="email" name="email" />
          </div>
          <div>
            Password: <input type="password" name="password"/>
          </div>
          <div>
            Password confirmation: <input type="password" name="password_confirmation" />
          </div>
          <button type="submit">Signup</button>
        </form>
      </div>
    </div>
  )
}