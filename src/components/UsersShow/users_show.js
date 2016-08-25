import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser, deleteUser } from '../../actions/index';
import { Link } from 'react-router';


class UsersShow extends Component {
static contextTypes = {
  router: PropTypes.object
};
  componentWillMount() {
    this.props.fetchUser(this.props.params.id);
  }

  onDeleteClick() {
    this.props.deleteUser(this.props.params.id).then(() => {
      this.context.router.push('/');
    });
  }

  render() {
    const { user } = this.props;

    if (!user) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <Link to="/">Back to list</Link>
        <button className="btn btn-danger pull-xs-right"
        onClick={this.onDeleteClick.bind(this)}>
          Delete User
        </button>
        <h2>{user.name}</h2>
        <h5>Cleaning Day:{user.day}</h5>
        <h5>Cleaning Week:{user.week}</h5>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.users.user};
}

export default connect(mapStateToProps, { fetchUser, deleteUser})(UsersShow);
