import React, { Component }from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUsers } from '../actions/index'
import { Link } from 'react-router';

class UsersIndex extends Component {

  componentWillMount() {
    this.props.fetchUsers();
  }

  render () {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/users/new" className="btn btn-primary">
          Add A user
          </Link>
        List of blog posts
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUsers }, dispatch);
}

export default connect(null, mapDispatchToProps)(UsersIndex);
