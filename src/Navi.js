import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Username from './Username';
import Password from './Password';
import Login from './Login';
const Navi = (props) => {
    return (
       <Router>
            <div>
              <ul>
                <li><link to="/username">Username</link></li>
                <li><link to="/password">Password</link></li>
                <li><link to="/login">Login</link></li>
              </ul>
              <Route path="/username" component={Username}/>
              <Route path="/password" component={Password}/>
              <Route path="/login" component={Login}/>
           </div>
       </Router>
    )
}