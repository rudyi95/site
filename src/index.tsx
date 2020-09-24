import * as React from 'react'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { render } from 'react-dom';
import {Bar2, Foo, Bar} from './Routes';
import MainPage from './Pages/Main';
import Header from './Components/Header';

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/foo" component={Foo} />
            <Route exact path="/bar" component={Bar} />
            <Route exact path="/bar2" component={Bar2} />
          </Switch>
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));
