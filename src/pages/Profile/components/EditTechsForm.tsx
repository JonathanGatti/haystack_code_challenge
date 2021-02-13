import React, { useState, ChangeEvent, MouseEvent, useEffect } from 'react';
import { UPDATE_TECHS } from '../../../api/queries';
import { FormContainer, Button } from '../../../common/styles';
import { technologies } from '../../../assets/technologies';
import { Tech } from '../interfaces';
import { useMutation } from '@apollo/client';

interface EditTechsForm {
  setEditFormOpen: (val: boolean) => void;
  techs: Tech[];
  userId: string;
}

const initialTech = {
  uid: '',
  weight: 0,
};

const initialTechnologies = [
  { uid: 'react', weight: 0 },
  { uid: 'javascript', weight: 0 },
  { uid: 'typescript', weight: 0 },
  { uid: 'html5', weight: 0 },
  { uid: 'css-3', weight: 0 },
];

function EditTechsForm({ setEditFormOpen, techs, userId }: EditTechsForm) {
  const [updateUser] = useMutation(UPDATE_TECHS);
  const [newTechnologies, setNewTechnologies] = useState<Tech[]>(
    initialTechnologies
  );
  const [newTech, setNewTech] = useState(initialTech);
  const [value, setValue] = useState('');

  useEffect(() => {
    const newTechs = techs.map((tech) => ({
      uid: tech.uid,
      weight: tech.weight,
    }));
    setNewTechnologies([...newTechs]);
  }, []);

  const handleChnage = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClick = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();
    setNewTech({ ...initialTech, uid: value });
    if (newTech.uid !== '' && newTechnologies)
      setNewTechnologies([...newTechnologies, newTech]);
  };

  const handleSubmit = () => {
    if (newTechnologies) {
      updateUser({
        variables: {
          id: userId,
          techs: newTechnologies,
        },
      });
      setEditFormOpen(false);
    }
  };

  const renderTechs = () => {
    const searchedTechs = technologies.filter((tech) => tech.name === value);
    return searchedTechs.map((icon) => (
      <div>
        <Button onClick={handleClick}>Add Tech</Button>
        <img src={icon.iconUrl}></img>
      </div>
    ));
  };
  return (
    <FormContainer>
      <form>
        <label>
          Search tech
          <input onChange={handleChnage} placeholder="Search..." />
        </label>
        {renderTechs()}
      </form>
      <Button onClick={handleSubmit}>Submit</Button>
    </FormContainer>
  );
}

export default EditTechsForm;
