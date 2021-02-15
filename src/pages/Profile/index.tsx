import React from 'react';
import User from './components/User';
import Navbar from './components/Navbar';
import { useQuery } from '@apollo/client';
import { VIEWER_QUERY } from '../../api/queries';
import styled from 'styled-components';

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 80vw;
  height: 100vh;
  color: #1a3f4d;
  font-size: 18px;
`;

function Profile() {
  const { loading, error, data } = useQuery(VIEWER_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Container>
      <Navbar photo={data.viewer.photo} status={data.viewer.active} />
      <User user={data.viewer} />
    </Container>
  );
}

export default Profile;
