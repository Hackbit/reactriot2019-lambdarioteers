import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Navigation from "./components/Navigation";
import Register from "./components/Register";
import TaskView from "./components/TaskView";
import TaskForm from "./components/TaskForm";
import TaskCard from "./components/TaskCard";
import Dashboard from "./components/Dashboard";
import SavedTasks from "./components/SavedTasks"
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/register" component={Register} />
        <Route path="login" component={LandingPage} />
        <Route path="/task-view" component={TaskView} />
        <Route path="/task-form" component={TaskForm} />
        <Route path="/task/:id" component={TaskCard} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/saved-tasks" component={SavedTasks} />
      </Switch>
    </div>
  );
};

export default App;
