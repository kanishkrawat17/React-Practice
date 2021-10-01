import React, { Component } from 'react'

class App extends React.Component {
  constructor(props){
    super(props);
    
      this.state = { date : new Date()}
    
  }
  render() {
    return (
      <>
        <h1>Hello.. The time is {this.state.date.toISOString()}</h1>
      </>
    )
  }
}

export default App;
