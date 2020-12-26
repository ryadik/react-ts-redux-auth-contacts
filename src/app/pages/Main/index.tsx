import * as React from 'react';

import Contacts from '../../components/Contacts';
import WorkArea from '../../components/WorkArea';

import { MainWrapper } from './style';

class Main extends React.PureComponent<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <MainWrapper>
        <Contacts />
        <div className="divider" />
        <WorkArea />
      </MainWrapper>
    );
  }
}

export default Main;
