import React, { Component } from 'react'

class App extends React.Component {
  
  render() {
    return (
      <>
        <h1>Hello.. The time is {this.props.date.toISOString()}</h1>
      </>
    )
  }
}

export default App;
