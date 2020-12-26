import styled from 'styled-components';
import { grayFade, redGradient90 } from '../../../variables';

export const ContactsItemWrapper = styled.div`
  position: relative;
  z-index: 5;

  cursor: pointer;
  width: 95%;

  padding: 15px;
  margin: 0 0 15px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  background: ${redGradient90} no-repeat;
  background-size: 0px;

  border-radius: 10px;
  box-sizing: border-box;

  font-size: 16px;
  line-height: 22px;
  color: #000;

  transition: background-size 0.3s linear, filter 0.3s linear, color 0.3s linear;

  div.bg-color {
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    opacity: 1;

    border-radius: 10px;
    background: ${grayFade} no-repeat;
    transition: opacity 0.3s linear;
  }

  &.active {
    div.bg-color {
      opacity: 0;
    }

    background-size: 100%;
    color: #fff;
  }

  & > div.image {
    width: 50px;
    height: 50px;
    margin-right: 10px;

    & img {
      border-radius: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  div.info {
    h3 {
      font-weight: bold;
    }
  }
`;
