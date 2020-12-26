import { url } from '../../app/variables';
import {
  FETCH_USERS,
  SET_CURRENT_USER,
  UNSET_CURRENT_USER,
  SET_USER_ISLOGGED,
  UNSET_USER_ISLOGGED
} from '../types';

interface IUser {
  id: string;
  loginForm: string;
  passForm: string;
}

export function setCurrentUser(payload: IUser) {
  return {
    type: SET_CURRENT_USER,
    payload
  };
}

export function unSetCurrentUser() {
  return {
    type: UNSET_CURRENT_USER
  };
}

export function fetchUser() {
  return async function(dispatch: any) {
    try {
      const res = await fetch(`${url}users`);
      const json = await res.json();

      dispatch({
        type: FETCH_USERS,
        payload: json
      });
    } catch (e) {
      console.error(e);
    }
  };
}

export function setUserIsLogged() {
  return function(dispatch: any) {
    dispatch({
      type: SET_USER_ISLOGGED
    });
  };
}

export function unSetUserIsLogged() {
  return function(dispatch: any) {
    dispatch(unSetCurrentUser());
    dispatch({ type: UNSET_USER_ISLOGGED });
  };
}
