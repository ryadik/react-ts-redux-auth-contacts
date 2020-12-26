import styled from 'styled-components';

import { shadow } from '../../variables';

import { Button } from '../../styledComponents/Button';
import { Input } from '../../styledComponents/Input';

export const LoginFormComponent = styled.div`
  max-width: 500px;
  width: 100%;
  padding: 40px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: ${shadow};

  h1 {
    font-size: 30px;
    line-height: 41px;
    font-weight: 900;
    margin-bottom: 20px;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    ${Input} {
      height: 50px;

      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }

    ${Button} {
      height: 50px;
    }
  }
`;
