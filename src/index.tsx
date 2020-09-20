import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";

/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); */
const render = (App: React.SFC) =>
  ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);

render(App);
