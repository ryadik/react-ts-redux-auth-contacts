import styled from 'styled-components';

export const LoginFormComponent = styled.div`
  max-width: 500px;
  width: 100%;
  padding: 40px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.13);

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

    input {
      height: 50px;
      padding: 15px;
      width: 100%;

      border: none;
      border-radius: 10px;

      background-color: #fff;
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.13);

      font-size: 16px;
      line-height: 22px;
      color: #000;

      box-sizing: border-box;

      &:not(:last-child) {
        margin-bottom: 20px;
      }

      ::placeholder {
        color: #646464;
      }
    }

    button {
      height: 50px;

      width: 100%;
      border: none;
      border-radius: 10px;

      background: linear-gradient(90deg, #ec008c 0%, #fc6767 100%);
      filter: drop-shadow(2px 2px 10px rgba(203, 127, 127, 0.5));

      font-size: 16px;
      line-height: 22px;
      font-weight: bold;
      color: #fff;

      box-sizing: border-box;

      outline: none;
    }
  }
`;
