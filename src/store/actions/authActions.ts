import {
  FETCH_USERS,
  SET_CURRENT_USER,
  UNSET_CURRENT_USER,
  SET_USER_ISLOGGED,
  UNSET_USER_ISLOGGED,
  GET_CONTACTS,
  SET_ACTIVE_CONTACT
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

export function getContacts() {
  return {
    type: GET_CONTACTS
  };
}

export function fetchUser() {
  return async function(dispatch: any) {
    try {
      const url = 'http://localhost:3001/users';

      const res = await fetch(url);
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
    dispatch(getContacts());
  };
}

export function unSetUserIsLogged() {
  return function(dispatch: any) {
    dispatch(unSetCurrentUser());
    dispatch({ type: UNSET_USER_ISLOGGED });
  };
}

export function setActiveContact(id: number) {
  return {
    type: SET_ACTIVE_CONTACT,
    payload: id
  };
}
