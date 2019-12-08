import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SubscribeForm from './components/subscribe/SubscribeForm';
import SubscribeAction from './components/subscribeAction/SubscribeAction';
import ErrorDisplay from './components/error/Error';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={SubscribeForm}></Route>
        <Route path="/subscribe-success" component={SubscribeAction}></Route>
        <Route exact path="/error" component={ErrorDisplay} />
      </div>
    </Router>
  );
}

export default App;
