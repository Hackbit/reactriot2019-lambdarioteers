import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import LandingPage from "./components/LandingPage";

import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <Route path="/register" component={Register} />
      <Route path="/" exact component={LandingPage} />
    </div>
  );
}

export default App;
