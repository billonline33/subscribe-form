import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SubscribeForm from './components/subscribe/SubscribeForm';
import SubscribeAction from './components/subscribeAction/SubscribeAction';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={SubscribeForm}></Route>
        <Route path="/subscribe-success" component={SubscribeAction}></Route>
      </div>
    </Router>
  );
}

export default App;
