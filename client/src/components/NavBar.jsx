import React, { Component } from 'react'
// import styled from '/styled-components'

import Logo from './Logo'

class NavBar extends Component {

    render() {
        return (
          <div>

          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="#">Chart Diary</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-item nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
                <a className="nav-item nav-link" href="/diaries/create">Entry</a>
                <a className="nav-item nav-link" href="/diaries/list">List</a>
                {/* <a className="nav-item nav-link disabled" href="#">Disabled</a> */}
              </div>
              {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button> */}
            </div>
        </nav>
      </div>
    )
  }
}

export default NavBar