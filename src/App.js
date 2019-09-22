import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h2>MERN-Stack Todo App</h2>
        </div>


      </Router>

    );
  }
}

export default App;

// put inside ROUTER element
// <Route path="/" exact component={TodosList} />
// <Route path="/edit/:id" component={EditTodo} />
// <Route path="/create" component={CreateTodo} />
