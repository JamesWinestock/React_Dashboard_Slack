import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router'

class Navigation extends Component {
  render() {
    return (
      <nav>
    <IndexLink to='/' activeClassName='active'>Home</IndexLink>
    { " | " }
    <Link to='authenticate' activeClassName='active'>Authenticate</Link>
  </nav>
    )
  }
}

export default Navigation
