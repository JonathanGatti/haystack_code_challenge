import styled from 'styled-components';

export const FormContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  width: 40vw;
  height: 50vh;
  background-color: whitesmoke;
  border: 1px solid #1a3f4d;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  form {
    display: flex;
    flex-direction: column;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: 1px solid #1a3f4d;
  border-radius: 5px;
  margin-right: 5px;
  height: 30px;
  width: 150px;
  font-size: 16px;
  transition: all 0.2s ease-in;
  :hover {
    cursor: pointer;
    color: white;
    background-color: #1a3f4d;
  }
`;
