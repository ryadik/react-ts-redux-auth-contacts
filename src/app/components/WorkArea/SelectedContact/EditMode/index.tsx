import * as React from 'react';
import { connect } from 'react-redux';

import {
  disableEditMode,
  updateContact
} from '../../../../../store/actions/contactsActions';

import { EditModeWrapper } from './style';

import { Input } from '../../../../styledComponents/Input';
import { Button } from '../../../../styledComponents/Button';
import { RootState } from '../../../../../store/rootReducer';

class EditMode extends React.PureComponent<IProps, IState> {
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

    const { data, userName, updateContact, disableEditMode } = this.props;

    const { nameForm, descrForm, imgPathForm } = this.state;

    const newContact = {
      id: data.id,
      name: nameForm || data.name,
      descr: descrForm || data.descr,
      imgPath: imgPathForm || data.imgPath
    };

    updateContact(userName, newContact);
    disableEditMode();
  };

  changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  render() {
    const {
      data: { name, descr, imgPath }
    } = this.props;
    const { nameForm, descrForm, imgPathForm } = this.state;

    return (
      <EditModeWrapper>
        <h3>Редактирование контакта</h3>
        <p>
          Если Вы не хотетите изменять некоторые из полей, оставьте их пустыми.
        </p>

        <form onSubmit={this.submitHandler}>
          <Input
            type="text"
            placeholder={name}
            name="nameForm"
            value={nameForm}
            onChange={this.changeHandler}
          />
          <Input
            type="text"
            placeholder={descr}
            name="descrForm"
            value={descrForm}
            onChange={this.changeHandler}
          />
          <Input
            type="text"
            placeholder={imgPath}
            name="imgPathForm"
            value={imgPathForm}
            onChange={this.changeHandler}
          />

          <div>
            <Button type="submit" className="submit">
              Сохранить
            </Button>
            <Button type="button" onClick={this.props.disableEditMode}>
              Отмена
            </Button>
          </div>
        </form>
      </EditModeWrapper>
    );
  }
}

interface IProps {
  data: {
    id: string;
    name: string;
    descr: string;
    imgPath: string;
  };

  userName: string;
  disableEditMode: any;
  updateContact: any;
}

interface IState {
  nameForm: string;
  descrForm: string;
  imgPathForm: string;
}

const mapStateToProps = (state: RootState) => ({
  userName: state.auth.user.login
});

const mapDispatchToProps = {
  disableEditMode,
  updateContact
};

export default connect(mapStateToProps, mapDispatchToProps)(EditMode as any);
