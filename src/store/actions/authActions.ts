import { LOGIN_USER } from '../types';

interface LoginUser {
  loginForm: string;
  passForm: string;
}

export function loginUser(payload: LoginUser) {
  return {
    type: LOGIN_USER,
    payload
  };
}
