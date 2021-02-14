import styled from 'styled-components';
import { mediaQueries } from '../styles/mediaQueries';

export const FormContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  width: 30vw;
  height: 60vh;
  background-color: whitesmoke;
  border: 1px solid #1a3f4d;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
    height: 70%;
    width: 80%;
  }
  input {
    border-radius: 5px;
    height: 20px;
    margin-bottom: 10px;
  }
  ul {
    height: 20vw;
    list-style: none;
    overflow: scroll;
  }
  li {
    display: flex;
    align-items: center;
  }
  .close-btn {
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin-left: 90%;
    margin-top: 5px;
  }
  @media ${mediaQueries.tablet} {
    width: 60vw;
  }
`;

export const EditFormContainer = styled.div`
  position: absolute;
  left: 180%;
  top: 10%;
  transform: translate(-100%, -50%);
  z-index: 10;
  width: 30vw;
  height: 60vh;
  background-color: whitesmoke;
  border: 1px solid #1a3f4d;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
    height: 70%;
    width: 80%;
  }
  input {
    border-radius: 5px;
    height: 20px;
    margin-bottom: 10px;
  }
  .close-btn {
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin-left: 90%;
    margin-top: 5px;
  }
  @media ${mediaQueries.tablet} {
    width: 60vw;
    left: 180%;
    top: 10%;
    transform: translate(-235%, -150%);
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: 1px solid #1a3f4d;
  border-radius: 5px;
  margin-right: 5px;
  margin-bottom: 10px;
  height: 30px;
  width: 100px;
  font-size: 16px;
  transition: all 0.2s ease-in;
  :hover {
    cursor: pointer;
    color: white;
    background-color: #1a3f4d;
  }
`;
