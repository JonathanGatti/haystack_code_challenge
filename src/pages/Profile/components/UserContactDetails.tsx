import React, { useState } from 'react';
import { Data, Location, ViewerInterface } from '../interfaces';
import EditDetailsForm from './EditDetailsForm';

// interface UserContactDetailsProps {
//   email: string;
//   linkedin: string | null;
//   github: string | null;
//   location: Location;
//   userId: string;
// }

interface UserContactDetailsProps {
  user: ViewerInterface;
}

function UserContactDetails({ user }: UserContactDetailsProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <i onClick={() => setIsOpen(true)} className="far fa-edit"></i>
      <h4>User contact details</h4>
      <p>Loaction: {user.location.name}</p>
      <p>Email: {user.email}</p>
      <p>
        <a href={`${user.linkedInProfileURL}`}>Linkedin</a>
      </p>
      <p>
        <a href={`${user.github}`}>GitHub</a>
      </p>
      {isOpen && <EditDetailsForm onClose={setIsOpen} user={user} />}
    </div>
  );
}

export default UserContactDetails;
