import styled from 'styled-components';
import { Button } from '../../../../styledComponents/Button';
import { Input } from '../../../../styledComponents/Input';
import { greenGradient90, redGradient90, shadow } from '../../../../variables';

export const EditModeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-size: 22px;
    line-height: 27px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  p {
    max-width: 250px;
    font-size: 16px;
    line-height: 19px;
    text-align: center;

    color: #a09e9e;

    margin-bottom: 15px;
  }

  form {
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;

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
        height: 45px;

        filter: unset;
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
          background-size: 100%;
          color: #fff;
        }
      }
    }
  }
`;
