import React from 'react';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';

 

class Navigation extends React.Component {
   render() {
      return(
         <div>
          <NavLink to="/start"></NavLink>
          <NavLink to="/register"></NavLink>
          <NavLink to="/todolist"></NavLink>
       </div>
      )
   }
}
 
export default Navigation;