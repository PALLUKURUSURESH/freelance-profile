import React from 'react';
import Home from './Component/Home';
import About from './Component/About';
import NotFound from './Component/NotFound';
import Menu from './Component/Menu'
import Review from './Component/Review';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Menu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/reviews" component={Review} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
