import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Link} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const Users = ({ match }) => <div>{match.url}</div>;

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about" replace>About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>{" "}
        </li>
      </ul>
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/users" component={Users} />
    </div>
  </BrowserRouter>
);

export default App;
