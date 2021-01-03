import styled from 'styled-components';
import { Button } from '../../../../styledComponents/Button';
import { greenGradient90, redGradient90, shadow } from '../../../../variables';

export const ViewModeWrapper = styled.div`
  width: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  & > div.image {
    width: 250px;
    height: 250px;

    border-radius: 100%;
    overflow: hidden;
    box-shadow: ${shadow};

    margin-bottom: 10px;

    & img {
      width: 100%;
      object-fit: cover;
    }
  }

  h3 {
    font-size: 22px;
    line-height: 27px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    line-height: 21px;
    margin-bottom: 25px;
  }

  & > div.control {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

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

      &.edit {
        color: #fff;
        background: linear-gradient(180deg, #4481eb 0%, #04befe 140%) no-repeat;
        background-size: 100%;
      }
    }
  }
`;
