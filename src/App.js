import React, { Component, Fragment } from 'react';
import 'typeface-roboto';
import { Navbar, HomePage, LoginPage, RecoverPage, ShowcasePage, SearchPage } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact render={ props => (
              <Fragment>
                <Navbar {...props}/>
                <HomePage />
              </Fragment>
             ) } />
            <Route path="/login" exact render={ props => (
              <Fragment>
                <Navbar {...props}/>
                <LoginPage />
              </Fragment>
             ) } />
            <Route path="/recover" exact render={ props => (
              <Fragment>
                <Navbar {...props}/>
                <RecoverPage />
              </Fragment>
             ) } />
            <Route path="/showcase" exact render={ props => (
              <Fragment>
                <Navbar {...props}/>
                <ShowcasePage />
              </Fragment>
             ) } />
            <Route path="/search" exact render={ props => (
              <Fragment>
                <Navbar {...props}/>
                <SearchPage />
              </Fragment>
             ) } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
