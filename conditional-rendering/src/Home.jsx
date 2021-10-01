import LoginPage from "./LoginPage";

let  Home =(props) => {
    return (
        <div>
            {/* {props.isLoggedIn ?  "" : <LoginPage />} */}
            {console.log(props.isLoggedIn)}
            <h1>Home Page</h1>
            <button onClick = { ()=>{
                  props.handleLogout()
            }}>Logout</button> 
        </div>
    )
}

export default Home;
