import * as React from 'react';

import { useSelector } from 'react-redux';

import { RootState } from '../store/rootReducer';

import LoginForm from './components/LoginForm';

import { Container } from './style';

function App() {
  const user = useSelector((state: RootState) => state.auth.user);

  console.log('user: ', user);

  return (
    <Container>
      <LoginForm />
    </Container>
  );
}

export default App;
