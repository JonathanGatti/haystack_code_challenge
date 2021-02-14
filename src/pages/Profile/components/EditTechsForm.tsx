import React, { useState, ChangeEvent, MouseEvent, useEffect } from 'react';
import { UPDATE_VIEWER_TECHS } from '../../../api/queries';
import { FormContainer, Button } from '../../../common/styled_components';
import { technologies } from '../../../assets/technologies';
import { Tech, Icon } from '../interfaces';
import { useMutation } from '@apollo/client';

interface EditTechsForm {
  onFormOpen: (val: boolean) => void;
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

function EditTechsForm({ onFormOpen, techs, userId }: EditTechsForm) {
  const [updateUser] = useMutation(UPDATE_VIEWER_TECHS);
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

  useEffect(() => {
    if (newTech.uid !== '') setNewTechnologies([...newTechnologies, newTech]);
  }, [newTech.uid]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClick = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    techName: string
  ) => {
    e.preventDefault();
    setNewTech({ ...initialTech, uid: techName });
    setValue('');
  };

  const handleSubmit = () => {
    updateUser({
      variables: {
        id: userId,
        techs: newTechnologies,
      },
    });
    onFormOpen(false);
  };

  const renderTechIcons = () => {
    let searchedTechs: Icon[] = [];
    if (value !== '') {
      searchedTechs = technologies.filter((icon) => icon.name.includes(value));
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
        <ul>{renderTechIcons()}</ul>
      </form>
      <Button onClick={handleSubmit}>Submit</Button>
    </FormContainer>
  );
}

export default EditTechsForm;
