import React, { useState, ChangeEvent, MouseEvent, useEffect } from 'react';
import { UPDATE_TECHS } from '../../../api/queries';
import { FormContainer, Button } from '../../../common/styles';
import { technologies } from '../../../assets/technologies';
import { Tech, Icon } from '../interfaces';
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClick = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    techName: string
  ) => {
    e.preventDefault();
    setNewTech({ ...initialTech, uid: techName });
    if (newTech.uid !== '' && newTechnologies)
      setNewTechnologies([...newTechnologies, newTech]);
    setValue('');
  };

  const handleSubmit = () => {
    if (newTechnologies) {
      updateUser({
        variables: {
          id: userId,
          techs: initialTechnologies,
        },
      });
      setEditFormOpen(false);
    }
  };

  const renderTechs = () => {
    let searchedTechs: Icon[] = [];
    if (value !== '') {
      searchedTechs = technologies.filter((tech) => tech.name.includes(value));
    }
    return searchedTechs.map((icon) => (
      <li>
        <img alt="tech icon" src={icon.iconUrl}></img>
        <Button onClick={(e) => handleClick(e, icon.name)}>Add Tech</Button>
      </li>
    ));
  };
  return (
    <FormContainer>
      <h3>Add techs</h3>
      <form>
        <label>
          Search tech{' '}
          <input
            placeholder="Search..."
            value={value}
            onChange={handleChange}
          />
        </label>
        <ul>{renderTechs()}</ul>
      </form>
      <Button onClick={handleSubmit}>Submit</Button>
    </FormContainer>
  );
}

export default EditTechsForm;
