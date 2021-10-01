import LoginPage from "./LoginPage";
import React from "react";
import Home from  "./Home"

class App extends React.Component {
  state = {
    isLoggedIn: false,
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  handleLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  render() {
    return (
      <>
      {
      this.state.isLoggedIn ?
        <Home 
        handleLogout={this.handleLogout} 
        isLoggedIn={this.state.isLoggedIn}/> 
          :
        <LoginPage 
        handleLogin={this.handleLogin} 
        isLoggedIn={this.state.isLoggedIn}/>
       }
      {/* <LoginPage handleLogin={this.handleLogin} isLoggedIn={this.state.isLoggedIn}/> */}
      {/* <Home handleLogin={this.handleLogin} isLoggedIn={this.state.isLoggedIn}/> */}
      </>
    );
   
  }
}

export default App;
