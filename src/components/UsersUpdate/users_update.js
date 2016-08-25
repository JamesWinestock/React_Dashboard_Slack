import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';
import { updateUser } from '../../actions/index';
import { Link } from 'react-router';

class UsersUpdate extends Component {
  static contextTypes = {
    router: PropTypes.object
  };



  onSubmit(props) {
    console.log(this.props.params)
    this.props.updateUser(props, this.props.params.id)
    .then(() => {
      this.context.router.push('/');
    });
  }


  render() {
    const { fields: { name, email, day, week }, handleSubmit } = this.props;
    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Update User</h3>
        <div className={`form-group`}>
          <label>Name</label>
          <input type="text" className="form-control"
           {...name}/ >
        </div>

        <div className={`form-group`}>
          <label>email</label>
          <input type="text" className="form-control" {...email}/ >
        </div>

        <div className={`form-group`}>
          <label>day</label>
          <input type="text" className="form-control" {...day}/ >
        </div>

        <div className={`form-group`}>
          <label>Week</label>
          <input type="text" className="form-control" {...week}/ >
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateUser}, dispatch);
}

export default UsersUpdate = reduxForm({
  form: 'UsersUpdateForm',
  fields: ['name', 'email', 'day', 'week']
}, null, mapDispatchToProps)(UsersUpdate);
