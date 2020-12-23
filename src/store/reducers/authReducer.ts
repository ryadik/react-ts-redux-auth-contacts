import {
  FETCH_USERS,
  GET_CONTACTS,
  SET_ACTIVE_CONTACT,
  SET_CURRENT_USER,
  SET_USER_ISLOGGED,
  UNSET_CURRENT_USER,
  UNSET_USER_ISLOGGED
} from '../types';

const initialState: IState = {
  user: {
    id: '',
    login: '',
    password: ''
  },
  fetchedUsers: [],
  contacts: [],
  activeContact: null,
  isLogged: false
};

export const authReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload
        }
      };

    case UNSET_CURRENT_USER:
      return {
        ...state,
        user: {
          ...state.user,
          id: '',
          login: '',
          password: ''
        }
      };

    case FETCH_USERS:
      return {
        ...state,
        fetchedUsers: [...action.payload]
      };

    case GET_CONTACTS:
      let contacts: IContacts[] = [];

      state.fetchedUsers.forEach(item => {
        if (state.user.login === item.login) {
          contacts = item.contacts;
        }
      });

      return {
        ...state,
        contacts
      };

    case SET_USER_ISLOGGED:
      return {
        ...state,
        isLogged: true
      };

    case UNSET_USER_ISLOGGED:
      return {
        ...state,
        isLogged: false
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
  user: {
    id: string;
    login: string;
    password: string;
  };
  fetchedUsers: {
    id: string;
    login: string;
    password: string;
    contacts: IContacts[];
  }[];
  contacts: IContacts[];
  activeContact: number | null;
  isLogged: boolean;
}
