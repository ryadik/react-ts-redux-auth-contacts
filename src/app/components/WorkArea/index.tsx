import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../../store/rootReducer';

import { setActiveContact } from '../../../store/actions/contactsActions';

import SelectedContact from './SelectedContact';

import { WorkAreaWrapper, EmptyArea } from './style';

class WorkArea extends React.PureComponent<IProps, any> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    const { activeContact, contacts } = this.props;

    if (!activeContact) {
      return (
        <EmptyArea>
          <span>Выберите контакт</span>
        </EmptyArea>
      );
    }

    return (
      <WorkAreaWrapper>
        {contacts !== undefined &&
          contacts.map(item => {
            if (item.id === activeContact) {
              return <SelectedContact key={item.id} data={item} />;
            }
          })}
      </WorkAreaWrapper>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  contacts: state.contacts.contacts,
  activeContact: state.contacts.activeContact
});

interface IContacts {
  id: string;
  name: string;
  descr: string;
  imgPath: string;
}

// without "?" don't work, idk why
interface IProps {
  contacts?: IContacts[];
  activeContact?: string | null;
}

export default connect(mapStateToProps, null)(WorkArea);
