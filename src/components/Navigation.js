import React from 'react';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';

 

class Navigation extends React.Component {
   render() {
      return(
         <div>
          <NavLink to="/start">Home</NavLink>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/todo">Todo</NavLink>
       </div>
      )
   }
}
 
export default Navigation;