import axios from 'axios';

export const FETCH_USERS = 'FETCH_USERS';
export const CREATE_USER = 'CREATE_USER';
export const FETCH_USER = 'FETCH_USER';
export const DELETE_USER = 'DELETE_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const CHECK_AUTH = 'CHECK_AUTH';
export const AUTH_USER = 'AUTH_USER';
export const UNAUTH_USER = 'UNAUTH_USER';

const ROOT_URL = 'http://localhost:3000';

export function fetchUsers() {
  const request = axios.get(`${ROOT_URL}/users`);
  return {
    type: FETCH_USERS,
    payload: request
  };
}

export function createUser(props) {
  const request = axios.post(`${ROOT_URL}/users/newUser`, props);
  return {
    type: CREATE_USER,
    payload: request
  };
}

export function fetchUser(id) {
  const request = axios.get(`${ROOT_URL}/users/${id}`);
  return {
    type: FETCH_USER,
    payload: request
  };
}

export function deleteUser(id) {
  const request = axios.delete(`${ROOT_URL}/users/${id}`);
  return {
    type: DELETE_USER,
    payload: request
  };
}


export function updateUser(props, id) {
  const request = axios.post(`${ROOT_URL}/users/${id}`, props);
  return {
    type: UPDATE_USER,
    payload: request
  };
}

export function checkAuth(props) {
  const request = axios.get(`${ROOT_URL}/login`, props);
  return {
    type: CHECK_AUTH,
    payload: request
  };
}

export function signinUser({ username, password }) {
  
}
