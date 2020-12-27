import * as React from 'react';
import { connect } from 'react-redux';

import { RootState } from '../../../../store/rootReducer';
import { deleteContact } from '../../../../store/actions/contactsActions';

import { SelectedContactWrapper } from './style';
import { Button } from '../../../styledComponents/Button';

const SelectedContact: React.FC<IProps> = ({
  data: { id, name, descr, imgPath },
  userName,
  deleteContact
}) => (
  <SelectedContactWrapper>
    <div className="image">
      <img src={imgPath} alt="user avatar" />
    </div>

    <h3>{name}</h3>
    <p>{descr}</p>

    <div className="control">
      <Button className="edit">Редактировать</Button>
      <Button onClick={() => deleteContact(userName, id)}>Удалить</Button>
    </div>
  </SelectedContactWrapper>
);

interface IProps {
  data: {
    id: string;
    name: string;
    descr: string;
    imgPath: string;
  };

  userName: string;
  deleteContact: any;
}

const mapStateToProps = (state: RootState) => ({
  userName: state.auth.user.login
});

const mapDispatchToProps = {
  deleteContact
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectedContact);
