import styled from 'styled-components';
import { shadow } from '../../variables';

export const MainWrapper = styled.div`
  position: relative;

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

  button.close-btn {
    display: block;
    position: absolute;
    top: 15px;
    left: 15px;

    padding: 0;
    border: 1px solid #ec4c45;
    background-color: #ff6158;

    width: 15px;
    height: 15px;

    border-radius: 100%;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);

    transition: background-color 0.15s linear;

    &:hover {
      background-color: #ec4c45;
    }
  }

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
