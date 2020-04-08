import React from 'react';
import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Start from './components/Start';
import Register from './components/Register';
import Todolist from './components/Todolist';
import history from './components/history'



export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div>
            <Navigation history={history} />
              <Switch>
               <Route  exact={true} path="/" component={Start}/>
               <Route  exact path="/Register" component={Register}/>
               <Route  exact path="/ToDoList" component={Todolist}/>
              </Switch>
          </div> 
      </BrowserRouter>
    );
  }
}

