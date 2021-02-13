import React, { useState } from 'react';
import { Data, Location, ViewerInterface } from '../interfaces';
import EditDetailsForm from './EditDetailsForm';
import styled from 'styled-components';

const Container = styled.div`
  a {
    color: #1a3f4d;
    text-decoration: none;
  }
  a:visited {
    color: #1a3f4d;
  }
`;

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
    <Container>
      <h4>
        Contact details{' '}
        <i onClick={() => setIsOpen(true)} className="far fa-edit"></i>
      </h4>
      <p>User since: {new Date(user.created).toLocaleDateString()}</p>
      <p>Location: {user.location.name}</p>
      <p>Email: {user.email}</p>
      <p>
        <a href={`${user.linkedInProfileURL}`}>Linkedin</a>
      </p>
      <p>
        <a href={`${user.github}`}>GitHub</a>
      </p>
      {isOpen && <EditDetailsForm onClose={setIsOpen} user={user} />}
    </Container>
  );
}

export default UserContactDetails;
