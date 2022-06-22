import { useState } from 'react';
import LoginForm from "./LoginForm.js";

function LoginContainer(){
    const adminUser = {username: "Bach", password: "Bach123"}
  
  const [data, setData] = useState({username:"", password:""})
  const [error, setError] = useState("");
  //const {username, password} = data

  const Login = details=>{
    console.log(details);

    if(details.username == adminUser.username && details.password == adminUser.password){
      console.log("Logged in");
      setData({
        username: details.username,
        password: details.password
      })
    }else{
      //console.log("failed to log in")
      setError("Credentials don't match!")
    }
  }

  const Logout = ()=>{
    console.log("Logout")
    setData({username:"", password:""});
  }

  return(
    <div>
        {(data.username !=="")? (
        <div>
            <h2>Welcome, <span>{data.username}</span></h2>
            <button type="button" class="btn btn-outline-primary" onClick={Logout}>Logout</button>
        </div>
        ) : (
        <LoginForm Login={Login} error={error} /> 
        )}
    </div>
  )
}

export default LoginContainer;