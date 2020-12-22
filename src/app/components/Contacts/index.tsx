import * as React from 'react';
import { ContactsWrapper } from './style';
import ContactsItem from './ContactsItem';

const data = {
  name: 'Илья Рядинский',
  descr: 'Программист',
  imgPath:
    'https://sun9-6.userapi.com/impf/c858124/v858124180/a58ff/OYIY6I0f-w8.jpg?size=640x637&quality=96&proxy=1&sign=f3f663b69688e2c8a42705aa960f620f&type=album'
};

const Contacts: React.FC = () => {
  return (
    <ContactsWrapper>
      <ContactsItem data={data} />
      <ContactsItem data={data} />
      <ContactsItem data={data} classes={'active'} />
      <ContactsItem data={data} />
      <ContactsItem data={data} />
    </ContactsWrapper>
  );
};

export default Contacts;
