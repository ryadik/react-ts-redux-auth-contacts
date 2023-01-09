import * as React from 'react';
import { connect } from 'react-redux';

import {
  unSetActiveContactForm,
  addContact
} from '../../../../store/actions/contactsActions';

import { Button } from '../../../styledComponents/Button';
import { Input } from '../../../styledComponents/Input';

import { NewContactWrapper } from './style';
import { RootState } from '../../../../store/rootReducer';

class NewContact extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  state: IState = {
    nameForm: '',
    descrForm: '',
    imgPathForm: ''
  };

  submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { unSetActiveContactForm, addContact, userName } = this.props;
    const { nameForm, descrForm, imgPathForm } = this.state;

    const newContact = {
      id: Date.now().toString(),
      name: nameForm,
      descr: descrForm,
      imgPath: imgPathForm
    };

    addContact(userName, newContact);
    unSetActiveContactForm();
  };

  changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState(prev => ({
      ...prev,
      [e.target.name]: e.target.value.trim()
    }));
  };

  render() {
    const { unSetActiveContactForm } = this.props;
    const { nameForm, descrForm, imgPathForm } = this.state;

    return (
      <NewContactWrapper onSubmit={this.submitHandler}>
        <h3>Новый контакт</h3>

        <Input
          type="text"
          placeholder="Имя Фамилия"
          name="nameForm"
          value={nameForm}
          onChange={this.changeHandler}
        />
        <Input
          type="text"
          placeholder="Описание"
          name="descrForm"
          value={descrForm}
          onChange={this.changeHandler}
        />
        <Input
          type="text"
          placeholder="Изображение"
          name="imgPathForm"
          value={imgPathForm}
          onChange={this.changeHandler}
        />

        <div>
          <Button type="submit" className="submit">
            Создать
          </Button>
          <Button type="button" onClick={unSetActiveContactForm}>
            Отмена
          </Button>
        </div>
      </NewContactWrapper>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  userName: state.auth.user.login
});

const mapDispatchToProps = {
  unSetActiveContactForm,
  addContact
};

interface IProps {
  userName: string;

  unSetActiveContactForm: any;
  addContact: any;
}

interface IState {
  nameForm: string;
  descrForm: string;
  imgPathForm: string;
}

export default connect(mapStateToProps, mapDispatchToProps)(NewContact as any);
