import * as React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { render } from "react-dom";
import { Bar2 } from "./Routes";
import MainPage from "./Pages/MainPage";
import Header from "./Components/Header";
import CovidPage from "./Pages/CovidPage";
import NewsPage from "./Pages/NewsPage";
import ProblemsPage from './Pages/ProblemsPage';
import CurrentProjectsPage from './Pages/CurrentProjectsPage';
import ProjectsForInvestors from './Pages/ProjectsForInvestors';

import "./App.css";


class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/covid" component={CovidPage} />
            <Route exact path="/news" component={NewsPage} />
            <Route exact path="/registration" component={Bar2} />
            <Route exact path="/problems" component={ProblemsPage} />
            <Route exact path="/curent_projects" component={CurrentProjectsPage} />
            <Route exact path="/projects_for_investors" component={ProjectsForInvestors} />
          </Switch>
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById("root"));
