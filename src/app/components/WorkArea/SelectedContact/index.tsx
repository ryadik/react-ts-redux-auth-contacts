import * as React from 'react';
import { connect } from 'react-redux';

import { RootState } from '../../../../store/rootReducer';

import ViewMode from './ViewMode';
import EditMode from './EditMode';

const SelectedContact: React.FC<IProps> = ({ data, editMode }) => {
  if (editMode) {
    return <EditMode data={data} />;
  }

  return <ViewMode data={data} />;
};

interface IProps {
  data: {
    id: string;
    name: string;
    descr: string;
    imgPath: string;
  };

  editMode?: boolean;
}

const mapStateToProps = (state: RootState) => ({
  editMode: state.contacts.editMode
});

export default connect(mapStateToProps, null)(SelectedContact);
