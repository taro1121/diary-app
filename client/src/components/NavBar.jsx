import React, { Component } from 'react'
// import styled from '/styled-components'

import Logo from './Logo'

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <a class="navbar-brand" href="#">Chart Diary</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link active" href="/">Home <span class="sr-only">(current)</span></a>
              <a class="nav-item nav-link" href="/diaries/create">Entry</a>
              <a class="nav-item nav-link" href="/diaries/list">List</a>
            </div>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
          </div>
        </nav>
      </div>
    )
  }
}

export default NavBar