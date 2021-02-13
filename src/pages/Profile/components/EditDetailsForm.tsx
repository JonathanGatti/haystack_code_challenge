import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { UPDATE_VIEWER } from '../../../api/queries';
import { useMutation } from '@apollo/client';
import { ViewerInterface, Location } from '../interfaces';

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  width: 60vw;
  height: 60vh;
  background-color: whitesmoke;
  border: 1px solid #1a3f4d;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  form {
    display: flex;
    flex-direction: column;
  }
`;

interface EditDetailsFormProps {
  user: ViewerInterface;
  onClose: (val: boolean) => void;
}

function EditDetailsForm({ onClose, user }: EditDetailsFormProps) {
  const [newPhotoUrl, setNewPhotoUrl] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newLinkedinUrl, setNewLinkedinUrl] = useState('');
  const [newGithubUrl, setNewGithubUrl] = useState('');
  const [updateUser] = useMutation(UPDATE_VIEWER);

  const handlePhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewPhotoUrl(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewEmail(e.target.value);
  };

  const handleLinkedinChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewLinkedinUrl(e.target.value);
  };

  const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewGithubUrl(e.target.value);
  };

  const handleClick = () => {
    onClose(false);
    updateUser({
      variables: {
        id: user.id,
        photo: newPhotoUrl === '' ? user.photo : newPhotoUrl,
        email: newEmail === '' ? user.email : newEmail,
        linkedinProfileUrl:
          newLinkedinUrl === '' ? user.linkedInProfileURL : newLinkedinUrl,
        github: newGithubUrl === '' ? user.github : newGithubUrl,
      },
    });
  };

  return (
    <Container>
      <form>
        <label>
          Edit Profile Picture
          <input onChange={handlePhotoChange} />
        </label>
        <label>
          New Email
          <input onChange={handleEmailChange} />
        </label>
        <label>
          New Linkedin url
          <input onChange={handleLinkedinChange} />
        </label>
        <label>
          New Github url
          <input onChange={handleGithubChange} />
        </label>
      </form>
      <button onClick={handleClick}>Submit</button>
    </Container>
  );
}

export default EditDetailsForm;
