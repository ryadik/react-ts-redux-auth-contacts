import styled from 'styled-components';
import { shadow } from '../../variables';

export const WorkAreaWrapper = styled.div`
  width: 70%;

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: ${shadow};
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
`;

export const EmptyArea = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
