import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Navigation from "./components/Navigation";
import Register from "./components/Register";
import TaskView from "./components/TaskView";
import TaskForm from "./components/TaskForm";
import TaskCard from "./components/TaskCard";
import Dashboard from "./components/Dashboard";
import SavedTasks from "./components/SavedTasks"

function App() {
  return (
    <div className="App">
      <Navigation />
      <Route path="/" exact component={LandingPage} />
      <Route path="/register" component={Register} />
      <Route path="login" component={LandingPage} />
      <Route path="/task-view" component={TaskView} />
      <Route path="/task-form" component={TaskForm} />
      <Route path="/task/:id" component={TaskCard} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/saved-tasks" component={SavedTasks} />
    </div>
  );
}

export default App;
