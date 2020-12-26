import { url } from '../../app/variables';
import {
  ADD_CONTACT,
  GET_CONTACTS,
  SET_ACTIVE_ADD_CONTACT_FORM,
  SET_ACTIVE_CONTACT,
  UNSET_ACTIVE_ADD_CONTACT_FORM
} from '../types';

export function getContacts(contacts: IContacts[]) {
  return {
    type: GET_CONTACTS,
    payload: contacts
  };
}

export function setActiveContact(id: number) {
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
      const users = await fetch(`${url}users`);
      const usersParsed: IFetchedUser[] = await users.json();
      const filteredUser = usersParsed.filter(item => item.login === userName);

      filteredUser[0].contacts.push(contact);

      const res = await fetch(`${url}users/${filteredUser[0].id}`, {
        method: 'PATCH',
        body: JSON.stringify(filteredUser[0]),
        headers: { 'Content-Type': 'application/json' }
      });

      if (res.ok) {
        dispatch({
          type: ADD_CONTACT,
          payload: contact
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
}

interface IContacts {
  id: number;
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
