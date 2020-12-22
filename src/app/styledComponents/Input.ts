import styled from 'styled-components';
import { shadow } from '../variables';

export const Input = styled.input`
  padding: 15px;
  width: 100%;

  border: none;
  border-radius: 10px;

  background-color: #fff;
  box-shadow: ${shadow};

  font-size: 16px;
  line-height: 22px;
  color: #000;

  box-sizing: border-box;

  ::placeholder {
    color: #646464;
  }
`;
