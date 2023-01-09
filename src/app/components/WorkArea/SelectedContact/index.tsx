import * as React from 'react';
import { connect } from 'react-redux';

import { RootState } from '../../../../store/rootReducer';

import ViewMode from './ViewMode';
import EditMode from './EditMode';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
function SelectedContact({ data, editMode }) {
  if (editMode) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return <EditMode data={data} />;
  }

  return <ViewMode data={data} />;
}

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

export default connect(mapStateToProps, null)(SelectedContact as any);
