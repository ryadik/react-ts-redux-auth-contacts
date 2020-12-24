import { combineReducers } from 'redux';

import { authReducer } from './reducers/authReducer';
import { contactsReducer } from './reducers/contactsReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  contacts: contactsReducer
});

export type RootState = ReturnType<typeof rootReducer>;
