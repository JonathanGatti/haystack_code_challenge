import React, { useState } from 'react';
import { Tech } from '../interfaces';
import styled from 'styled-components';
import { technologies } from '../../../assets/technologies';
import EditTechsForm from './EditTechsForm';
import { Button } from '../../../common/styles';

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
  userId: string;
}

function TechStack({ techs, userId }: TechStackProps) {
  const [isEditFormOpen, setEditFormOpen] = useState(false);

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
      <div>
        <Button onClick={() => setEditFormOpen(true)}>Add Tech</Button>
      </div>
      {isEditFormOpen && (
        <EditTechsForm
          userId={userId}
          techs={techs}
          setEditFormOpen={setEditFormOpen}
        />
      )}
    </Container>
  );
}

export default TechStack;
