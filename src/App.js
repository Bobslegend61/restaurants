import React, { Component } from 'react';
import 'typeface-roboto';
import { Navbar, HomePage, LoginPage, RecoverPage, ShowcasePage, SearchPage } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact component={ HomePage } />
            <Route path="/login" exact component={ LoginPage } />
            <Route path="/recover" exact component={ RecoverPage } />
            <Route path="/showcase" exact component={ ShowcasePage } />
            <Route path="/search" exact component={ SearchPage } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
