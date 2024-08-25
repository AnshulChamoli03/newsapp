import React, { Component } from 'react'
// import {News, searchit } from './News'

export default class Navbar extends Component {
  render() {
    return (
        <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href ="/">News</a>
          <form className="d-flex" role="search">
            <input id="category" className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button id="search" className="btn btn-outline-success" type="submit" onClick={searchit()}>Search</button>
          </form>
        </div>
      </nav>
    )
  }
}
