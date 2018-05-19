import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from "react-router-dom";

import logo from './logo.svg';
import Main from './Main';
import Search from './Search';
import './App.css';
import './scss/styles.css'

class App extends Component {
  constructor(props) {
    super(props);
  }
    render() {
      return (
          <div className="page-container">
            <Main />
          </div>
      );
    }
}

export default withRouter(App);
