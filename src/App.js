import './App.css';
import Navbar from './compoments/Navbar';

import React, { Component } from 'react'
import News from './compoments/News';

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar/>
        <News/>
      </>
    )
  }
}

