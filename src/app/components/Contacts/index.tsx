import * as React from 'react';
import { connect } from 'react-redux';

import NewContact from './NewContact';
import ContactsItem from './ContactsItem';

import { ContactsWrapper } from './style';
import { Input } from '../../styledComponents/Input';
import { Button } from '../../styledComponents/Button';

import { RootState } from '../../../store/rootReducer';
import { setActiveContactForm } from '../../../store/actions/contactsActions';

const ContactsRender: React.FC<IPropsContactsRender> = ({
  array,
  activeContact
}) => (
  <div className="contacts">
    {array.length > 0 &&
      array.map(item => (
        <ContactsItem
          key={item.id}
          data={item}
          isActive={item.id === activeContact && true}
        />
      ))}

    {array.length === 0 && <span>Список контактов пуст</span>}
  </div>
);

class Contacts extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  state: IState = {
    searchValue: ''
  };

  searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState(prev => ({
      ...prev,
      [e.target.name]: e.target.value.trim()
    }));
  };

  filterArray = (array: IContacts[], filterParam: string) => {
    return array.filter(
      item =>
        item.name.toLowerCase().search(filterParam) > -1 ||
        item.descr.toLowerCase().search(filterParam) > -1
    );
  };

  render() {
    const {
      contacts,
      activeContact,
      activeContactForm,
      setActiveContactForm
    } = this.props;
    const { searchValue } = this.state;

    const filteredContacts = searchValue
      ? this.filterArray(contacts, searchValue.trim().toLowerCase())
      : contacts;

    return (
      <ContactsWrapper>
        <header>
          <div className="title">
            <h2>Контакты</h2>

            <Button onClick={() => setActiveContactForm()}>+</Button>
          </div>

          <div className="search">
            <Input
              type="text"
              placeholder="Поиск"
              name="searchValue"
              value={searchValue}
              onChange={this.searchHandler}
            />
          </div>
        </header>

        {activeContactForm ? (
          <NewContact />
        ) : (
          <ContactsRender
            array={filteredContacts}
            activeContact={activeContact}
          />
        )}
      </ContactsWrapper>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  contacts: state.contacts.contacts,
  activeContact: state.contacts.activeContact,
  activeContactForm: state.contacts.activeAddContactForm
});

const mapDispatchToProps = {
  setActiveContactForm
};

interface IContacts {
  id: string;
  name: string;
  descr: string;
  imgPath: string;
}

interface IProps {
  contacts: IContacts[];
  activeContact: string | null;
  activeContactForm: boolean;
  setActiveContactForm: any;
}

interface IPropsContactsRender {
  array: IContacts[];
  activeContact: string | null;
}

interface IState {
  searchValue: string;
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts as any);
