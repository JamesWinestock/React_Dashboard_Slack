import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createUser } from '../actions/index';

class UsersNew extends Component {
  render() {
    const { fields: { name, email, day }, handleSubmit } = this.props;
    return(
      <form onSubmit={handleSubmit(this.props.createUser)}>
        <h3>Create A New User</h3>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" {...name}/ >
        </div>

        <div className="form-group">
          <label>email</label>
          <input type="text" className="form-control" {...email}/ >
        </div>

        <div className="form-group">
          <label>day</label>
          <input type="text" className="form-control" {...day}/ >
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

export default UsersNew = reduxForm({
  form: 'UsersNewForm',
  fields: ['name', 'email', 'day']
}, null, { createUser })(UsersNew);
