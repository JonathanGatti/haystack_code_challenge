import React, { useState, ChangeEvent } from 'react';
import { UPDATE_VIEWER } from '../../../api/queries';
import { useMutation } from '@apollo/client';
import { ViewerInterface } from '../interfaces';
import { EditFormContainer, Button } from '../../../common/styled_components';

interface EditDetailsFormProps {
  user: ViewerInterface;
  onFormOpen: (val: boolean) => void;
}

function EditDetailsForm({ onFormOpen, user }: EditDetailsFormProps) {
  const [editedUser, editUser] = useState<ViewerInterface>(user);
  const [updateUser] = useMutation(UPDATE_VIEWER);

  const handlePhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    editUser({ ...editedUser, photo: e.target.value });
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    editUser({ ...editedUser, email: e.target.value });
  };

  const handleLinkedinChange = (e: ChangeEvent<HTMLInputElement>) => {
    editUser({ ...editedUser, linkedInProfileURL: e.target.value });
  };

  const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
    editUser({ ...editedUser, github: e.target.value });
  };

  const handleClick = () => {
    try {
      updateUser({
        variables: {
          id: user.id,
          photo: editedUser.photo,
          email: editedUser.email,
          linkedInProfileURL: editedUser.linkedInProfileURL,
          github: editedUser.github,
        },
      });
    } catch (e) {
      console.log(e);
    }
    onFormOpen(false);
  };

  return (
    <EditFormContainer>
      <h3>Edit Intro</h3>
      <Button className="close-btn" onClick={() => onFormOpen(false)}>
        X
      </Button>
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

        <label htmlFor="linkedin">New LinkedIn account</label>
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
    </EditFormContainer>
  );
}

export default EditDetailsForm;
