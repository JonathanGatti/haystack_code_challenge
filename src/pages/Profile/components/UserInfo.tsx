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
  height: 36vh;
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
          <TechStack userId={user.id} techs={user.techs} />

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
