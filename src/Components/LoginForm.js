import { useState } from "react";
//import "./LoginForm.css";

function LoginForm({ Login, error}){
  const [details, setDetails] = useState({username: "", password: ""})
    
  const submitHandler = e => {
    e.preventDefault();
    Login(details);
    }

    return (
      <div>
        <form onSubmit={submitHandler}>
          <div class="form-group">
            <h2 class="form-label">Account Login</h2>
            {(error!== "") ? (<div>{error}</div>) : "" }
          </div>
          <div class="form-floating mb-1">
            <input type="text" class="form-control" id="floatingInput" placeholder="username" value={details.username} onChange={e=>{setDetails({...details, username:[e.target.value]})}}/>
            <label for="floatingInput">Username:</label>
          </div>
          <div class="form-floating mb-1">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" value={details.password} onChange={e=>{setDetails({...details, password:[e.target.value]})}}/><br/>
            <label for="floatingPassword">Password:</label>
            <button type="submit" value="LOGIN">Log in</button>
          </div>
        </form>
      </div>
    );
}

export default LoginForm;