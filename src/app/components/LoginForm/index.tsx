import * as React from 'react';
import { connect } from 'react-redux';

import { setCurrentUser } from '../../../store/actions/authActions';

import { LoginFormComponent } from './style';

class LoginForm extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  state: IState = {
    loginForm: '',
    passForm: ''
  };

  changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState(prev => ({
      ...prev,
      [e.target.name]: e.target.value.trim()
    }));
  };

  submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { loginForm, passForm } = this.state;

    if (!loginForm || !passForm) {
      return;
    }

    const user = {
      id: Date.now().toString(),
      login: loginForm,
      password: passForm
    };

    this.props.setCurrentUser(user);

    this.setState(prev => ({
      ...prev,
      loginForm: '',
      passForm: ''
    }));
  };

  render() {
    return (
      <LoginFormComponent>
        <h1>Авторизация</h1>

        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            placeholder="Логин"
            name="loginForm"
            value={this.state.loginForm}
            onChange={this.changeHandler}
          />
          <input
            type="password"
            placeholder="Пароль"
            name="passForm"
            value={this.state.passForm}
            onChange={this.changeHandler}
          />
          <button type="submit">Войти</button>
        </form>
      </LoginFormComponent>
    );
  }
}

const mapDispatchToProps = {
  setCurrentUser
};

interface IProps {
  setCurrentUser: any;
}

interface IState {
  loginForm: string;
  passForm: string;
}

export default connect(null, mapDispatchToProps)(LoginForm);
