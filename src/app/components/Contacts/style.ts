import styled from 'styled-components';
import { Input } from '../../styledComponents/Input';
import { shadow } from '../../variables';

export const ContactsWrapper = styled.div`
  width: 30%;

  header {
    padding-top: 10px;
    margin-bottom: 15px;
    border-bottom: 1px solid #ec008c;

    div.top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ec008c;

      & > h2 {
        font-size: 22px;
        line-height: 29px;
        font-weight: bold;
        color: #000;
      }
    }

    div.bottom {
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

      padding: 10px 0;
    }
  }

  div.contacts {
    height: 100%;
    max-height: 510px;
    overflow-y: auto;
  }
`;
