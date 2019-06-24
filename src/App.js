import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Link} from 'react-router-dom';

import CreateTodo from './components/create-todo';
import EditTodo from './components/edit-todo';
import TodosList from './components/todos-list';

import ToDo from './ToDo.png';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://todoist.com/?lang=en" target="_blank">
              <img src={ToDo} width="50" height="50" alt="Your todos"/>
            </a>
            <Link to='/' className="navbar-brand">TodoApp</Link>
            <div className="">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to='/' className="nav-link">Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to='/create' className="nav-link">Create-Todo</Link>
                </li>

              </ul>
            </div>
          </nav>
          <Route path='/' exact component={TodosList} />
          <Route path='/edit/:id' component={EditTodo} />
          <Route path='/create' component={CreateTodo} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
