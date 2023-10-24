import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1>School dashboard</h1>
        </header>
        <section className="App-body">
          <p>Login to access the full dashboard</p>
        </section>
        <footer className="App-footer">
          <p>Copyright 2020 - holberton School</p>
        </footer>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))