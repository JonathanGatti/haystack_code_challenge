import React, { useState } from 'react';
import { ViewerInterface } from '../interfaces';
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

interface UserContactDetailsProps {
  user: ViewerInterface;
}

function UserContactDetails({ user }: UserContactDetailsProps) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <Container>
      <h4>
        Contact details{' '}
        <i onClick={() => setIsFormOpen(true)} className="far fa-edit"></i>
      </h4>
      <p>User since: {new Date(user.created).toLocaleDateString()}</p>
      <p>Location: {user.location.name}</p>
      <p>Email: {user.email}</p>
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
    </Container>
  );
}

export default UserContactDetails;
