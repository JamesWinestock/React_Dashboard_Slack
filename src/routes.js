import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import UsersIndex from './components/users_index';
import UsersNew from './components/users_new';
import UsersShow from './components/users_show';
import UsersUpdate from './components/users_update';


export default (
<Route path="/" component={App} >
  <IndexRoute component={UsersIndex} />
  <Route path="/users/new" component={UsersNew} />
  <Route path="users/:id" component={UsersShow} />
  <Route path="users/update/:id" component={UsersUpdate} />
</Route>
)
