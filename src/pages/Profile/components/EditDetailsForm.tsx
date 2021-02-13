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
        linkedInProfileURL:
          newLinkedinUrl === '' ? user.linkedInProfileURL : newLinkedinUrl,
        github: newGithubUrl === '' ? user.github : newGithubUrl,
      },
    });
  };

  return (
    <FormContainer>
      <h3>Edit Intro</h3>
      <form>
        <label htmlFor="photo"> Edit Profile Picture</label>
        <input
          id="photo"
          onChange={handlePhotoChange}
          placeholder=" Insert image url..."
        />

        <label htmlFor="email">New Email </label>
        <input
          id="email"
          onChange={handleEmailChange}
          placeholder=" Insert new email..."
        />

        <label htmlFor="linkedin">New Linkedin account</label>
        <input
          id="linkedin"
          onChange={handleLinkedinChange}
          placeholder=" Insert new linkedin link..."
        />

        <label htmlFor="github">New Github account</label>
        <input
          id="github"
          onChange={handleGithubChange}
          placeholder=" Insert new github link..."
        />
      </form>
      <Button onClick={handleClick}>Submit</Button>
    </FormContainer>
  );
}

export default EditDetailsForm;
