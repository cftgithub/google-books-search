import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Save from "./pages/Save";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
// import Jumbotron from "./components/Jumbotron";
import './App.css';

const App = () =>
<Router>
  <div>
    <Navbar />
    <Route exact path="/" component={Search} />
    <Route exact path="/search" component={Search} />
    <Route exact path="/save" component={Save} />
  </div>
</Router>

export default App;
