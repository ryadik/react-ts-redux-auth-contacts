import { FETCH_USERS, LOGIN_USER } from '../types';

const initialState: IState = {
  user: {
    id: '',
    login: '',
    password: ''
  },
  fetchedUsers: []
};

export const authReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload
        }
      };

    case FETCH_USERS:
      return {
        ...state,
        fetchedUsers: [...state.fetchedUsers, action.payload]
      };
    default:
      return state;
  }
};

interface IAction {
  type: string;
  payload?: any;
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
  }[];
}
