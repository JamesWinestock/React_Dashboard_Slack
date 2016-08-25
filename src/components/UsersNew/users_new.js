import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createUser } from '../../actions/index';
import { Link } from 'react-router';

class UsersNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    this.props.createUser(props)
    .then(() => {
      this.context.router.push('/');
    });
  }


  render() {
    const { fields: { name, email, day, week }, handleSubmit } = this.props;
    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create A New User</h3>
        <div className={`form-group ${name.touched && name.invalid ? 'has-danger' : ''}`}>
          <label>Name</label>
          <input type="text" className="form-control" {...name}/ >
          <div className="text-help">
            {name.touched ? name.error : ''}
          </div>
        </div>

        <div className={`form-group ${email.touched && email.invalid ? 'has-danger' : ''}`}>
          <label>email</label>
          <input type="text" className="form-control" {...email}/ >
          <div>
            {email.touched ? email.error : ''}
          </div>
        </div>

        <div className={`form-group ${day.touched && day.invalid ? 'has-danger' : ''}`}>
          <label>day</label>
          <input type="text" className="form-control" {...day}/ >
          <div>
            {day.touched ? day.error : ''}
          </div>
        </div>

        <div className={`form-group ${week.touched && week.invalid ? 'has-danger' : ''}`}>
          <label>Week</label>
          <input type="text" className="form-control" {...week}/ >
          <div>
            {week.touched ? week.error : ''}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if(!values.name) {
    errors.name = "Enter a name";
  }

  if(!values.email) {
    errors.email = "Enter an email address";
  }

  if(!values.day) {
    errors.day = "Enter a day this user needs to clean";
  }

  if(!values.week) {
    errors.day = "Enter the week this user is assigned to";
  }

  return errors;
}

export default UsersNew = reduxForm({
  form: 'UsersNewForm',
  fields: ['name', 'email', 'day', 'week'],
  validate
}, null, { createUser })(UsersNew);
