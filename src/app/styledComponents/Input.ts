import styled from 'styled-components';
import { shadow } from '../variables';

export const Input = styled.input`
  padding: 15px;
  width: 100%;

  border: none;
  border-radius: 10px;

  background-color: #fff;

  font-size: 16px;
  line-height: 22px;
  color: #000;

  box-sizing: border-box;

  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);

  transition: box-shadow 0.3s linear;

  &:active,
  &:focus {
    box-shadow: ${shadow};
  }

  ::placeholder {
    color: #646464;
  }
`;
