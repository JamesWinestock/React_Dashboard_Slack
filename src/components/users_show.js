import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/index';


class UsersShow extends Component {

  componentWillMount() {
    this.props.fetchUser(this.props.params.id)
  }

  render() {
    return (
      <div>UsersShow {this.props.params.id}</div>
    )
  }
}

export default connect(null, { fetchUser })(UsersShow);
