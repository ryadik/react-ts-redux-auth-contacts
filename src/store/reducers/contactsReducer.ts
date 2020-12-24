import { GET_CONTACTS, SET_ACTIVE_CONTACT } from '../types';

const initialState: IState = {
  contacts: [],
  activeContact: null
};

export const contactsReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload
      };

    case SET_ACTIVE_CONTACT:
      return {
        ...state,
        activeContact: action.payload
      };
    default:
      return state;
  }
};

interface IAction {
  type: string;
  payload?: any;
}

interface IContacts {
  id: number;
  name: string;
  descr: string;
  imgPath: string;
}

interface IState {
  contacts: IContacts[];
  activeContact: number | null;
}
