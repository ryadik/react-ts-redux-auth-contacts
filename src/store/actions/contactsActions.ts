import { GET_CONTACTS, SET_ACTIVE_CONTACT } from '../types';

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

interface IContacts {
  id: number;
  name: string;
  decr: string;
  imgPath: string;
}
