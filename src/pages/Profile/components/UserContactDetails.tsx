import React, { useState } from 'react';
import { ViewerInterface } from '../interfaces';
import EditDetailsForm from './EditDetailsForm';
import styled from 'styled-components';
import { mediaQueries } from '../../../styles/mediaQueries';

interface UserContactDetailsProps {
  user: ViewerInterface;
}

const Container = styled.div`
  width: 30vw;
  position: absolute;
  margin-top: 15rem;
  @media ${mediaQueries.laptop} {
    margin-top: 0;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    width: 80vw;
    display: flex;
    flex-direction: column;
    margin-left: 3em;
  }
`;

function UserContactDetails({ user }: UserContactDetailsProps) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <Container>
      <h3>
        Contact details{' '}
        <i onClick={() => setIsFormOpen(true)} className="far fa-edit"></i>
      </h3>
      <p>Email: {user.email}</p>
      <p>User since: {new Date(user.created).toLocaleDateString()}</p>
      <p>Location: {user.location.name}</p>
      <p>
        <a target="_blank" href={`${user.linkedInProfileURL}`}>
          LinkedIn
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
