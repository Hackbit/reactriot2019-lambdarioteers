import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import LandingPage from "./components/LandingPage";

import Register from "./components/Register";
import TaskView from "./components/TaskView"
import TaskForm from './components/TaskForm';

function App() {
  return (
    <div className="App">
      <Route path="/register" component={Register} />
      <Route path="/task-view" component={TaskView} />
      <Route path="/task-form" component={TaskForm} />
      <Route path="/" exact component={LandingPage} />
    </div>
  );
}

export default App;
