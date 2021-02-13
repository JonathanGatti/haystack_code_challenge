import React from 'react';
import { Tech } from '../interfaces';
import styled from 'styled-components';
import { technologies } from '../../../assets/technologies';

const Container = styled.div`
  img {
    height: 50px;
    width: 50px;
    object-fit: cover;
    margin: 0.3em 0.8em;
  }
`;

interface TechStackProps {
  techs: Tech[];
}

function TechStack({ techs }: TechStackProps) {
  const renderTechnologies = () => {
    return techs.map((tech) => {
      for (let icon of technologies) {
        if (tech.uid === icon.name) {
          return <img src={icon.iconUrl}></img>;
        }
      }
    });
  };
  return (
    <Container>
      <h4>Tech Stack</h4>
      {renderTechnologies()}
    </Container>
  );
}

export default TechStack;
