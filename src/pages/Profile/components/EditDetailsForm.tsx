import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { UPDATE_VIEWER } from '../../../api/queries';
import { useMutation } from '@apollo/client';
import { ViewerInterface, Location } from '../interfaces';
import { FormContainer, Button } from '../../../common/styles';

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
    <FormContainer>
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
      <Button onClick={handleClick}>Submit</Button>
    </FormContainer>
  );
}

export default EditDetailsForm;
