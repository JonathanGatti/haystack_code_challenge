import React, { useState } from 'react';
import { ViewerInterface } from '../interfaces';
import EditDetailsForm from './EditDetailsForm';

interface UserContactDetailsProps {
  user: ViewerInterface;
}

function UserContactDetails({ user }: UserContactDetailsProps) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <div>
      <h4>
        Contact details{' '}
        <i onClick={() => setIsFormOpen(true)} className="far fa-edit"></i>
      </h4>
      <p>Email: {user.email}</p>
      <p>User since: {new Date(user.created).toLocaleDateString()}</p>
      <p>Location: {user.location.name}</p>
      <p>
        <a target="_blank" href={`${user.linkedInProfileURL}`}>
          Linkedin
        </a>
      </p>
      <p>
        <a target="_blank" href={`${user.github}`}>
          GitHub
        </a>
      </p>
      {isFormOpen && <EditDetailsForm onFormOpen={setIsFormOpen} user={user} />}
    </div>
  );
}

export default UserContactDetails;
