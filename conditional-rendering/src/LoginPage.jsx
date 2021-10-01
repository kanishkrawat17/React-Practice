import React from 'react'
import Home from "./Home";

let LoginPage = (props)=> {
    {console.log("inside login -1")}
    return (
        <div>
            {/* {props.isLoggedIn ? <Home /> : ""} */}
            <h1>Login Page</h1>
            {console.log("inside login")}
            <button onClick = {()=>{
               props.handleLogin()
            }} > Login </button>
        </div>
    )
}

export default LoginPage;


