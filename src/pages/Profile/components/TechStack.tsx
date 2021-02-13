import React from 'react';
import { Tech } from '../interfaces';
import styled from 'styled-components';

const Container = styled.div`
  p {
    margin: 0 2em;
  }
`;

interface TechStackProps {
  techs: Tech[];
}

function TechStack({ techs }: TechStackProps) {
  return (
    <Container>
      <h4>Tech Stack</h4>
      {techs.map((tech) => (
        <i className={`fab fa-${tech.uid} fa-5x`} key={tech.uid} />
      ))}
    </Container>
  );
}

export default TechStack;
