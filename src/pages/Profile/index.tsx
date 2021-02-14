import React from 'react';
import UserInfo from './components/UserInfo';
import Navbar from './components/Navbar';
import { useQuery } from '@apollo/client';
import { VIEWER_QUERY } from '../../api/queries';
import styled from 'styled-components';
import { mediaQueries } from '../../styles/mediaQueries';

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 80vw;
  height: 100vh;
  color: #1a3f4d;
`;

function Profile() {
  const { loading, error, data } = useQuery(VIEWER_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Container>
      <Navbar photo={data.viewer.photo} status={data.viewer.active} />
      <UserInfo user={data.viewer} />
    </Container>
  );
}

export default Profile;
