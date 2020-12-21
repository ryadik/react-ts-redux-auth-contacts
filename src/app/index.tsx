import * as React from 'react';

import { RootState } from '../store/rootReducer';
import {
  fetchUser,
  setUserIsLogged,
  unSetUserIsLogged
} from '../store/actions/authActions';

import LoginForm from './components/LoginForm';

import { Container } from './style';
import { connect } from 'react-redux';

class App extends React.PureComponent<IProps, any> {
  constructor(props: IProps) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser();
  }

  checkToUserExisting = (usersArr: IUser[], userItem: IUser): void => {
    console.log('userItem', userItem);

    for (let i = 0; i < usersArr.length; i++) {
      console.log('итерация: ', i);
      console.log('usersArr ', usersArr[i]);

      if (usersArr[i].login !== userItem.login) {
        continue;
      }

      if (usersArr[i].password !== userItem.password) {
        continue;
      }

      console.log('successful');
      this.props.setUserIsLogged();
      break;
    }
  };

  render() {
    const { user, fetchedUsers, isLogged, unSetUserIsLogged } = this.props;

    if (isLogged) {
      return (
        <Container>
          <div>
            <h1>Вошел пользователь</h1>
            <p>Под ником: {user.login}</p>
            <p>Пароль: {user.password}</p>
            <button onClick={unSetUserIsLogged}>Выйти</button>
          </div>
        </Container>
      );
    }

    if (!isLogged) {
      this.checkToUserExisting(fetchedUsers, user);

      return (
        <Container>
          <LoginForm />
        </Container>
      );
    }
  }
}

interface IProps {
  user: IUser;
  fetchedUsers: IUser[];
  isLogged: boolean;

  fetchUser: any;
  setUserIsLogged: any;
  unSetUserIsLogged: any;
}

interface IUser {
  id: string;
  login: string;
  password: string;
}

const mapStateToProps = (state: RootState) => ({
  user: state.auth.user,
  fetchedUsers: state.auth.fetchedUsers,
  isLogged: state.auth.isLogged
});

const mapDispatchToProps = {
  fetchUser,
  setUserIsLogged,
  unSetUserIsLogged
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
