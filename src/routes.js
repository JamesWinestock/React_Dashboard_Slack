import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import UsersIndex from './components/UsersIndex/users_index';
import UsersNew from './components/UsersNew/users_new';
import UsersShow from './components/UsersShow/users_show';
import UsersUpdate from './components/UsersUpdate/users_update';
import Authenticate from './components/Authenticate/authenticate';



export default (
<Route path="/" component={App} >
  <IndexRoute component={UsersIndex} />
  <Route path="/users/new" component={UsersNew} />
  <Route path="users/:id" component={UsersShow} />
  <Route path="users/update/:id" component={UsersUpdate} />
  <Route path="authenticate" component={Authenticate} />
</Route>
)
