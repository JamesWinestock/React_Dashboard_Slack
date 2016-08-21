import React, { Component }from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUsers } from '../actions/index'
import { Link } from 'react-router';

class UsersIndex extends Component {

  componentWillMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map((user) => {
      return (
        <li className="list-group-item" key={user.id}>
          <Link to={"users/" + user.id}>
          <span className="pull-xs-right">{user.userEntry.day}</span>
          <strong>{user.userEntry.name}</strong>
          </Link>
        </li>
      );
    });
  }


  render () {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/users/new" className="btn btn-primary">
          Add A user
          </Link>
          <h3>Users</h3>
            <ul className="list-group">
              {this.renderUsers()}
            </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users.all };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUsers }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersIndex);
