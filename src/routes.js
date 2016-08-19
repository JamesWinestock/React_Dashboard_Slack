import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import UsersIndex from './components/users_index';
import UsersNew from './components/users_new'


export default (
<Route path="/" component={App} >
  <IndexRoute component={UsersIndex} />
  <Route path="/users/new" component={UsersNew} />
</Route>
)
