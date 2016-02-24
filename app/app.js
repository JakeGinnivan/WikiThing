import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <nav className='navbar navbar-fixed-top navbar-light bg-faded'>
          <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#exCollapsingNavbar'>
            &#9776;
          </button>
          <h1 className='navbar-brand'>Static Wiki Editor</h1>
        </nav>
        <div className='container-fluid'>
          {this.props.children}
        </div>
        <nav className='navbar navbar-fixed-bottom navbar-light bg-faded'>
          <a className='navbar-brand' href='#'>Fixed bottom</a>
        </nav>
      </div>
    )
  }
}
