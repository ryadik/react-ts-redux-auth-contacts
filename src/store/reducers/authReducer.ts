import {
  FETCH_USERS,
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
  isLogged: boolean;
}
