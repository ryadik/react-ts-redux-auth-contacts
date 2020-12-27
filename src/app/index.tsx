import * as React from 'react';

import { connect } from 'react-redux';

import { RootState } from '../store/rootReducer';
import { fetchUser, setUserIsLogged } from '../store/actions/authActions';
import {
  getContacts,
  setActiveContact
} from '../store/actions/contactsActions';

import LoginForm from './pages/LoginForm';
import Main from './pages/Main';

import { Container } from './style';

class App extends React.PureComponent<IProps, any> {
  constructor(props: IProps) {
    super(props);
  }

  escapeHandler = (e: KeyboardEvent) => {
    if (e.code === 'Escape' && e.key === 'Escape') {
      this.props.setActiveContact(null);
    }
  };

  componentDidMount() {
    this.props.fetchUser();
    window.addEventListener('keydown', this.escapeHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.escapeHandler);
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
      this.props.getContacts(usersArr[i].contacts);
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
  getContacts: any;
  setActiveContact: any;
}

interface IUser {
  id: string;
  login: string;
  password: string;
  contacts?: {
    id: string;
    name: string;
    descr: string;
    imgPath: string;
  }[];
}

const mapStateToProps = (state: RootState) => ({
  user: state.auth.user,
  fetchedUsers: state.auth.fetchedUsers,
  isLogged: state.auth.isLogged
});

const mapDispatchToProps = {
  fetchUser,
  setUserIsLogged,
  getContacts,
  setActiveContact
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
