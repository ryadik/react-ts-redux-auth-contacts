import * as React from 'react';
import { ContactsWrapper } from './style';
import ContactsItem from './ContactsItem';
import { RootState } from '../../../store/rootReducer';
import { connect } from 'react-redux';

class Contacts extends React.PureComponent<IProps, any> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    const { contacts, activeContact } = this.props;

    return (
      <ContactsWrapper>
        {contacts.map(item => (
          <ContactsItem
            key={item.id}
            data={item}
            isActive={item.id === activeContact && true}
          />
        ))}
      </ContactsWrapper>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  contacts: state.auth.contacts,
  activeContact: state.auth.activeContact
});

interface IProps {
  contacts: {
    id: number;
    name: string;
    descr: string;
    imgPath: string;
  }[];
  activeContact: number | null;
}

export default connect(mapStateToProps)(Contacts);
