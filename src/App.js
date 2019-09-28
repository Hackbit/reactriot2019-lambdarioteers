import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import LandingPage from "./components/LandingPage";

import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={LandingPage} />
      <Route path="/register" component={Register} />
      <Route path="login" component={LandingPage} />
    </div>
  );
}

export default App;
