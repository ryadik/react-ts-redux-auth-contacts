import styled from 'styled-components';
import { shadow } from '../../variables';

export const MainWrapper = styled.div`
  width: 100%;
  height: 705px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: ${shadow};

  padding: 40px;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    height: 100%;
  }

  div.divider {
    margin: 0 20px;
    width: 1px;
    height: 100%;
    background-color: #ec008c;
  }
`;
