import React, { useState, ChangeEvent, memo } from 'react';
import styled from 'styled-components';
import { ViewerInterface } from '../interfaces';
import TechStack from './TechStack';
import UserContactDetails from './UserContactDetails';
import { UPDATE_VIEWER_BIOGRAPHY } from '../../../api/queries';
import { useMutation } from '@apollo/client';
import { Button } from '../../../common/styled_components';
import { mediaQueries } from '../../../styles/mediaQueries';
import image from '../../../assets/background-image2.jpg';

interface UserInfoProps {
  user: ViewerInterface;
}

const Container = styled.div`
  display: flex;
  width: 100%;
  @media ${mediaQueries.laptop} {
    flex-direction: column;
    align-items: center;
  }
  img {
    max-height: 250px;
    max-width: 300px;
    object-fit: cover;
    border-radius: 8px;
  }

  .text-area {
    display: flex;
    flex-direction: column;
    textarea {
      width: 90%;
    }
  }
`;
const UserDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5rem;
  width: 60vw;
  @media ${mediaQueries.laptop} {
    margin-left: 0;
    .image {
      display: none;
    }
  }
  hr {
    color: #1a3f4d;
    width: 100%;
    opacity: 0.8;
  }
  .image {
    background-image: url(${image});
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(45%, -75%);
    width: 495px;
    height: 400px;
    opacity: 0.3;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

function User({ user }: UserInfoProps) {
  const [showTextInput, toggleTextInput] = useState(false);
  const [newBiography, setNewBiography] = useState('');
  const [updateBiography] = useMutation(UPDATE_VIEWER_BIOGRAPHY);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewBiography(e.target.value);
  };

  const handleSubmit = () => {
    if (newBiography !== '') {
      try {
        updateBiography({
          variables: {
            id: user.id,
            biography: newBiography,
          },
        });
      } catch (e) {
        console.log(e);
      }
    }
    toggleTextInput(!showTextInput);
  };
  return (
    <>
      <Container>
        <img alt="profile" src={user.photo}></img>

        <UserDetailsContainer>
          <h2>
            {user.firstName} {user.lastName}
          </h2>
          <span>Current Company: {user.currentCompany}</span>
          <TechStack userId={user.id} techs={user.techs} />
          <div className="image" />

          <hr />
          <h3>
            About{' '}
            <i
              onClick={() => toggleTextInput(!showTextInput)}
              className="fas fa-edit"
            />
          </h3>
          {!showTextInput ? (
            <p>{user.biography}</p>
          ) : (
            <div className="text-area">
              <textarea onChange={handleChange} />
              <Button onClick={handleSubmit}>Submit</Button>
            </div>
          )}
        </UserDetailsContainer>
        <UserContactDetails user={user} />
      </Container>
    </>
  );
}

export default memo(User);
