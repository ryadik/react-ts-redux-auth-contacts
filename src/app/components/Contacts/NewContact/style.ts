import styled from 'styled-components';
import { Input } from '../../../styledComponents/Input';
import { Button } from '../../../styledComponents/Button';
import { greenGradient90, redGradient90, shadow } from '../../../variables';

export const NewContactWrapper = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  & > h3 {
    width: 100%;
    text-align: left;

    font-size: 18px;
    line-height: 24px;
    font-weight: bold;
    margin-bottom: 15px;
  }

  ${Input} {
    height: 50px;
    margin-bottom: 15px;
  }

  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;

    ${Button} {
      width: 48%;
      height: 50px;

      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
      background: ${redGradient90} no-repeat;
      background-size: 0px;
      color: #000;

      transition: background-size 0.2s linear, color 0.2s linear,
        box-shadow 0.2s linear;

      &:hover {
        box-shadow: ${shadow};
        background-size: 100%;
        color: #fff;
      }

      &.submit {
        background: ${greenGradient90} no-repeat;
        background-size: 0px;

        &:hover {
          background-size: 100%;
          color: #fff;
        }
      }
    }
  }
`;
