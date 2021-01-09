import {
  ADD_CONTACT,
  DELETE_CONTACT,
  DISABLE_EDIT_MODE,
  ENABLE_EDIT_MODE,
  GET_CONTACTS,
  SET_ACTIVE_ADD_CONTACT_FORM,
  SET_ACTIVE_CONTACT,
  UNSET_ACTIVE_ADD_CONTACT_FORM,
  UPDATE_CONTACT
} from '../types';

const initialState: IState = {
  contacts: [],
  activeContact: null,
  activeAddContactForm: false,
  editMode: false
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

    case SET_ACTIVE_ADD_CONTACT_FORM:
      return {
        ...state,
        activeAddContactForm: true
      };

    case UNSET_ACTIVE_ADD_CONTACT_FORM:
      return {
        ...state,
        activeAddContactForm: false
      };

    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      };

    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: action.payload
      };

    case DELETE_CONTACT:
      return {
        ...state,
        contacts: action.payload
      };

    case ENABLE_EDIT_MODE:
      return {
        ...state,
        editMode: true
      };

    case DISABLE_EDIT_MODE:
      return {
        ...state,
        editMode: false
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
  id: string;
  name: string;
  descr: string;
  imgPath: string;
}

interface IState {
  contacts: IContacts[];
  activeContact: string | null;
  activeAddContactForm: boolean;
  editMode: boolean;
}
