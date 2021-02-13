import React from 'react';
import styled from 'styled-components';
import { ViewerInterface } from '../interfaces';
import TechStack from './TechStack';
import UserContactDetails from './UserContactDetails';

interface UserInfoProps {
  user: ViewerInterface;
}

const Container = styled.div`
  display: flex;
  height: 40vh;
  width: 100%;
  img {
    max-height: 250px;
    max-width: 300px;
    object-fit: cover;
    border-radius: 8px;
  }
`;
const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5rem;
  width: 60vw;
  hr {
    color: #1a3f4d;
    width: 100%;
    opacity: 0.8;
  }
`;
const ButtonsContainer = styled.div`
  button {
    background-color: transparent;
    border: 1px solid #1a3f4d;
    border-radius: 5px;
    margin-right: 5px;
    height: 30px;
    width: 150px;
    font-size: 16px;
    transition: all 0.2s ease-in;
  }
  button:hover {
    cursor: pointer;
    color: white;
    background-color: #1a3f4d;
  }
`;

function UserInfo({ user }: UserInfoProps) {
  return (
    <>
      <Container>
        <img alt="profile" src={user.photo}></img>

        <UserDetails>
          <h3>
            {user.firstName} {user.lastName}
          </h3>
          <span>Current Company: {user.currentCompany}</span>
          <TechStack techs={user.techs} />

          <ButtonsContainer>
            <button>Add Tech</button>
          </ButtonsContainer>
          <hr />
          <h3>About</h3>
          <p>{user.biography}</p>
        </UserDetails>
      </Container>
      <UserContactDetails user={user} />
    </>
  );
}

export default UserInfo;
