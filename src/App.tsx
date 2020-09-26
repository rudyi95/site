import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from "./Pages/MainPage";
import MainPage from "./Pages/MainPage";

import "./App.css";

const App: React.FC = () => {
  return (
      <Router>
          <Header />
          <Switch>
            <Route path="/">
              <MainPage />
            </Route>
          </Switch>
      </Router>
  );
};

export default App;
