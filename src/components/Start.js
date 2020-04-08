import React from 'react';
import { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import '../App.css';


class Start extends React.Component {
    render() {
        return(
            <div className="container">
                <div className="btn-click">
                    <a href='./Register' >Click</a>
                </div>
            </div>
        )
    }
}



export default Start;
