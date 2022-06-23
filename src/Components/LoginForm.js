import { useState } from "react";

function LoginForm({ Login, error}){
  const [details, setDetails] = useState({username: "", password: ""})
    
  const submitHandler = e => {
    e.preventDefault();
    Login(details);
    }

    return (
      <div>
        <form onSubmit={submitHandler}>
          <div className="form-group">
            {/* <h6 class="form-label text-primary">Sign in</h6> */}
            {(error!== "") ? (<div>{error}</div>) : "" }
          </div>
          <div className="mt-2">
            <input type="text" className="form-control" id="inputDefault" placeholder="Username" value={details.username} onChange={e=>{setDetails({...details, username:[e.target.value]})}}/>
          </div>
          <div className="mt-2">
            <input type="password" className="form-control" id="inputDefault" placeholder="Password" value={details.password} onChange={e=>{setDetails({...details, password:[e.target.value]})}}/>
            <button className="btn btn-outline-dark btn-sm mt-2" type="submit" value="Login">Log in</button>
          </div>
        </form>
      </div>
    );
}

export default LoginForm;