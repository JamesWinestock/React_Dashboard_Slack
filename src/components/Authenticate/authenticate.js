import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { checkAuth } from '../../actions/index';
import { Link } from 'react-router';

class Authenticate extends Component {
  static contextTypes = {
    router: PropTypes.object
  };


  onSubmit(props) {
    this.props.checkAuth()

    .then((user) => {
      if(user.payload.data.username === props.username){
     console.log('success')
   } else {
     console.log('error')
   }

    });
  }
  render () {
    const { fields: { username, password }, handleSubmit } = this.props;
    return (
      <form
      onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Sign in</h3>
        <div className={"form-group"}>
          <label>Username</label>
          <input type="text"
          className="form-control" {...username}/>
        </div>

        <div className={"form-group"}>
          <label>Password</label>
          <input type="password"
          className="form-control"
          {...password}/ >
        </div>

        <button type="submit"
        className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

export default Authenticate = reduxForm({
  form: 'AuthenticateForm',
  fields: ['username', 'password'],
}, null, { checkAuth})(Authenticate);
