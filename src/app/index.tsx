import * as React from 'react';

import { connect } from 'react-redux';

import { RootState } from '../store/rootReducer';
import { fetchUser, setUserIsLogged } from '../store/actions/authActions';

import LoginForm from './pages/LoginForm';
import Main from './pages/Main';

import { Container } from './style';

class App extends React.PureComponent<IProps, any> {
  constructor(props: IProps) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser();
  }

  checkToUserExisting = (usersArr: IUser[], userItem: IUser): void => {
    for (let i = 0; i < usersArr.length; i++) {
      if (usersArr[i].login !== userItem.login) {
        continue;
      }

      if (usersArr[i].password !== userItem.password) {
        continue;
      }

      this.props.setUserIsLogged();
      break;
    }
  };

  render() {
    const { user, fetchedUsers, isLogged } = this.props;

    if (isLogged) {
      return (
        <Container>
          <Main />
        </Container>
      );
    }

    this.checkToUserExisting(fetchedUsers, user);

    return (
      <Container>
        <LoginForm />
      </Container>
    );
  }
}

interface IProps {
  user: IUser;
  fetchedUsers: IUser[];
  isLogged: boolean;

  fetchUser: any;
  setUserIsLogged: any;
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
  setUserIsLogged
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
