import * as React from 'react';
import { Button } from '../../../../styledComponents/Button';
import { ViewModeWrapper } from './style';
import { RootState } from '../../../../../store/rootReducer';
import {
  deleteContact,
  enableEditMode
} from '../../../../../store/actions/contactsActions';
import { connect } from 'react-redux';

const ViewMode: React.FC<IProps> = ({
  data: { id, name, descr, imgPath },
  userName,
  deleteContact,
  enableEditMode
}) => (
  <ViewModeWrapper>
    <div className="image">
      <img src={imgPath} alt="user avatar" />
    </div>

    <h3>{name}</h3>
    <p>{descr}</p>

    <div className="control">
      <Button className="edit" onClick={enableEditMode}>
        Редактировать
      </Button>
      <Button onClick={() => deleteContact(userName, id)}>Удалить</Button>
    </div>
  </ViewModeWrapper>
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
  enableEditMode: any;
}

const mapStateToProps = (state: RootState) => ({
  userName: state.auth.user.login
});

const mapDispatchToProps = {
  deleteContact,
  enableEditMode
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewMode);
