import * as React from 'react';

import { unSetUserIsLogged } from '../../../store/actions/authActions';

import Contacts from '../../components/Contacts';
import WorkArea from '../../components/WorkArea';

import { MainWrapper } from './style';
import { connect } from 'react-redux';

class Main extends React.PureComponent<IProps, any> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <MainWrapper>
        <button
          className="close-btn"
          title="Выход"
          onClick={this.props.unSetUserIsLogged}
        />
        <Contacts />
        <div className="divider" />
        <WorkArea />
      </MainWrapper>
    );
  }
}

interface IProps {
  unSetUserIsLogged: any;
}

const mapDispatchToProps = {
  unSetUserIsLogged
};

export default connect(null, mapDispatchToProps)(Main as any);
