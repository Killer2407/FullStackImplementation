import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddNote from './component/AddNote';
import NoteList from './component/NoteList';


function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/notes" className="navbar-brand">
          Notes
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <a href="/add-note" className="nav-link">
              Add
            </a>
          </li>
          
        </div>
      </nav>
        <Switch>
          <Route exact path="/notes" component={NoteList}>
          </Route>
          <Route exact path="/add-note" component={AddNote}>
          </Route>
        </Switch>
   
    </BrowserRouter>
    
  );
}

export default App;
