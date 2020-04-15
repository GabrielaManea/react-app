import React from 'react';
import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navigation from './components/navigation';
import Start from './components/start';
import Register from './components/register';
import Todo from './components/todo';
import history from './components/history'



export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div>
            <Navigation history={history} />
              <Switch>
               <Route  exact={true} path="/start" component={Start}/>
               <Route  exact path="/register" component={Register}/>
               <Route  exact path="/todo" component={Todo}/>
              </Switch>
          </div> 
      </BrowserRouter>
    );
  }
}

