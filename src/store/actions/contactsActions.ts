import { url } from '../../app/variables';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  GET_CONTACTS,
  SET_ACTIVE_ADD_CONTACT_FORM,
  SET_ACTIVE_CONTACT,
  UNSET_ACTIVE_ADD_CONTACT_FORM
} from '../types';

async function getUserByLogin(userName: string) {
  const users = await fetch(`${url}users`);
  const usersParsed: IFetchedUser[] = await users.json();
  const filteredUser: IFetchedUser[] = usersParsed.filter(
    item => item.login === userName
  );

  return filteredUser[0];
}

export function getContacts(contacts: IContacts[]) {
  return {
    type: GET_CONTACTS,
    payload: contacts
  };
}

export function setActiveContact(id: string | null) {
  return {
    type: SET_ACTIVE_CONTACT,
    payload: id
  };
}

export function setActiveContactForm() {
  return {
    type: SET_ACTIVE_ADD_CONTACT_FORM
  };
}

export function unSetActiveContactForm() {
  return {
    type: UNSET_ACTIVE_ADD_CONTACT_FORM
  };
}

export function addContact(userName: string, contact: IContacts) {
  return async function(dispatch: any) {
    try {
      getUserByLogin(userName).then(async filteredUser => {
        filteredUser.contacts.push(contact);

        const res = await fetch(`${url}users/${filteredUser.id}`, {
          method: 'PATCH',
          body: JSON.stringify(filteredUser),
          headers: { 'Content-Type': 'application/json' }
        });

        if (res.ok) {
          dispatch({
            type: ADD_CONTACT,
            payload: contact
          });
        }
      });
    } catch (e) {
      console.log(e);
    }
  };
}

export function deleteContact(userName: string, contactID: string) {
  return async function(dispatch: any) {
    try {
      getUserByLogin(userName).then(async filteredUser => {
        const filteredContacts: IContacts[] = filteredUser.contacts.filter(
          item => item.id !== contactID
        );

        filteredUser.contacts = filteredContacts;

        const res = await fetch(`${url}users/${filteredUser.id}`, {
          method: 'PATCH',
          body: JSON.stringify(filteredUser),
          headers: { 'Content-Type': 'application/json' }
        });

        if (res.ok) {
          dispatch({
            type: DELETE_CONTACT,
            payload: filteredContacts
          });
        }
      });
    } catch (e) {
      console.log(e);
    }
  };
}

interface IContacts {
  id: string;
  name: string;
  decr: string;
  imgPath: string;
}

interface IFetchedUser {
  id: string;
  login: string;
  password: string;
  contacts: IContacts[];
}
