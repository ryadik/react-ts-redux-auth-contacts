import * as React from 'react';

import { ContactsItemWrapper } from './style';
import { setActiveContact } from '../../../../store/actions/contactsActions';
import { connect } from 'react-redux';

const ContactsItem: React.FC<IProps> = ({
  data: { id, name, descr, imgPath },
  isActive,
  setActiveContact
}) => {
  const classList = isActive ? 'active' : '';

  return (
    <ContactsItemWrapper
      className={classList}
      onClick={() => setActiveContact(id)}
    >
      <div className="bg-color" />

      <div className="image">
        <img src={imgPath} alt="avatar" />
      </div>

      <div className="info">
        <h3>{name}</h3>
        <p>{descr}</p>
      </div>
    </ContactsItemWrapper>
  );
};

interface IProps {
  data: {
    id: number;
    name: string;
    descr: string;
    imgPath: string;
  };
  isActive?: boolean;
  setActiveContact: any;
}

const mapDispatchToProps = {
  setActiveContact
};

export default connect(null, mapDispatchToProps)(ContactsItem);
