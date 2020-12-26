import styled from 'styled-components';

import { Input } from '../../styledComponents/Input';
import { Button } from '../../styledComponents/Button';

import { shadow } from '../../variables';

export const ContactsWrapper = styled.div`
  width: 30%;

  header {
    padding-top: 10px;
    margin-bottom: 15px;
    border-bottom: 1px solid #ec008c;

    div.title {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      border-bottom: 1px solid #ec008c;

      & > h2 {
        font-size: 30px;
        line-height: 36px;
        font-weight: bold;
        color: #000;
      }

      ${Button} {
        margin-bottom: 9px;
        padding: 0;

        width: 30px;
        height: 30px;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);

        background: linear-gradient(98.96deg, #f54ea2 12.96%, #ff7676 111.49%)
          no-repeat;
        background-size: 0px;
        filter: unset;

        font-size: 20px;
        color: #000;

        transition: background-size 0.15s linear, box-shadow 0.15s linear,
          color 0.05s linear;

        &:hover {
          color: #fff;
          box-shadow: ${shadow};
          background-size: 100%;
        }
      }
    }

    div.search {
      padding: 10px 0;

      ${Input} {
        width: 100%;
        height: 40px;

        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);

        transition: box-shadow 0.3s linear;

        &:active,
        &:focus {
          box-shadow: ${shadow};
        }
      }
    }
  }

  div.contacts {
    position: relative;

    height: 100%;
    max-height: 510px;
    overflow-y: auto;

    span {
      text-align: center;
      width: 100%;
      position: absolute;

      left: 50%;
      top: 50%;

      transform: translate(-50%, -250%);
    }
  }
`;
