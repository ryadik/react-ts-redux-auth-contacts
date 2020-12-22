import * as React from 'react';

import { ContactsItemWrapper } from './style';

interface IProps {
  data: {
    name: string;
    descr: string;
    imgPath: string;
  };
  classes?: string;
}

const ContactsItem: React.FC<IProps> = ({
  data: { name, descr, imgPath },
  classes
}) => {
  return (
    <ContactsItemWrapper className={classes}>
      <div className="bg-color" />

      <div className="image">
        <img src={imgPath} alt="avatar" />
      </div>

      <div className="info">
        <h2>{name}</h2>
        <p>{descr}</p>
      </div>
    </ContactsItemWrapper>
  );
};

export default ContactsItem;
