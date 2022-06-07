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
            <Link to="/add-note" className="nav-link">
              Add
            </Link>
          </li>
          
        </div>
      </nav>
     
        <Switch>
      
          <Route exact path="/notes">
            <NoteList />
          </Route>
          <Route exact path="/add-note">
            <AddNote />
          </Route>
          <Route exact path="/">
            <NoteList/>
          </Route>

        </Switch>
   
    </BrowserRouter>
    
  );
}

export default App;
