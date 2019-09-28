import React from 'react';
import { Route } from "react-router-dom";
import './App.css';

import Register from "./components/Register";
import TaskView from "./components/TaskView"

function App() {
  return (
    <div className="App">
      <Route path="/register" component={Register} />
      <Route path="/task-view" component={TaskView} />
    </div>
  );
}

export default App;
