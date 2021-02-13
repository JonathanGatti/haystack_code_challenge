import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 10vh;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 5rem;
  background-color: #1a3f4d;
  align-items: center;
  color: white;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  ul li {
    display: inline;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .logo {
    color: #d6a52b;
  }
`;

interface NavbarProps {
  photo: string;
  status: boolean;
}

function Navbar({ photo, status }: NavbarProps) {
  return (
    <Container>
      <ul>
        <li className="logo">Heystack</li>
        <li>Find Jobs</li>
        <li>Inbox</li>
        <li>My Jobs</li>
        <li>
          status:
          {status ? ' online' : ' offline'}
        </li>
        <li>
          <img alt="profile" src={photo}></img>
        </li>
      </ul>
    </Container>
  );
}

export default Navbar;
