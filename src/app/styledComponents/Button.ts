import styled from 'styled-components';
import { redGradient90, shadowBtn } from '../variables';

export const Button = styled.button`
  width: 100%;
  border: none;
  border-radius: 10px;

  background: ${redGradient90};
  filter: ${shadowBtn};

  font-size: 16px;
  line-height: 22px;
  font-weight: bold;
  color: #fff;

  box-sizing: border-box;
`;
