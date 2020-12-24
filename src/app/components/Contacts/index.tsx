import * as React from 'react';
import { ContactsWrapper } from './style';
import ContactsItem from './ContactsItem';
import { RootState } from '../../../store/rootReducer';
import { connect } from 'react-redux';
import { Input } from '../../styledComponents/Input';

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
    const { contacts, activeContact } = this.props;
    const { searchValue } = this.state;

    const filteredContacts = searchValue
      ? this.filterArray(contacts, searchValue.trim().toLowerCase())
      : contacts;

    return (
      <ContactsWrapper>
        <header>
          <div className="top">
            <h2>Контакты</h2>
          </div>

          <div className="bottom">
            <Input
              type="text"
              placeholder="Поиск"
              name="searchValue"
              value={searchValue}
              onChange={this.searchHandler}
            />
          </div>
        </header>
        <div className="contacts">
          {filteredContacts.map(item => (
            <ContactsItem
              key={item.id}
              data={item}
              isActive={item.id === activeContact && true}
            />
          ))}
        </div>
      </ContactsWrapper>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  contacts: state.contacts.contacts,
  activeContact: state.contacts.activeContact
});

interface IContacts {
  id: number;
  name: string;
  descr: string;
  imgPath: string;
}

interface IProps {
  contacts: IContacts[];
  activeContact: number | null;
}

interface IState {
  searchValue: string;
}

export default connect(mapStateToProps)(Contacts);
