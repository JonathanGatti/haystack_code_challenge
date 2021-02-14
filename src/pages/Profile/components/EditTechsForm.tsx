import React, { useState, ChangeEvent, MouseEvent, useEffect } from 'react';
import { UPDATE_VIEWER_TECHS } from '../../../api/queries';
import { FormContainer, Button } from '../../../common/styled_components';
import { icons } from '../../../assets/icons';
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
  const [editedTechnologies, setEditedTechnologies] = useState<Tech[]>(
    initialTechnologies
  );
  const [newTech, setNewTech] = useState<Tech>(initialTech);
  const [value, setValue] = useState('');

  useEffect(() => {
    const newTechs = techs.map((tech) => ({
      uid: tech.uid,
      weight: tech.weight,
    }));
    setEditedTechnologies([...newTechs]);
  }, []);

  useEffect(() => {
    if (newTech.uid !== '') {
      let includes = editedTechnologies.filter(
        (tech) => tech.uid === newTech.uid
      );
      if (!includes[0]) setEditedTechnologies([...editedTechnologies, newTech]);
    }
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
        techs: editedTechnologies,
      },
    });
    onFormOpen(false);
  };

  const renderTechIcons = () => {
    let searchedTechs: Icon[] = [];
    if (value !== '') {
      searchedTechs = icons.filter((icon) => icon.name.includes(value));
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
      <Button className="close-btn" onClick={() => onFormOpen(false)}>
        X
      </Button>
      <form>
        <label htmlFor="tech">Search tech </label>
        <input
          id="tech"
          placeholder="Search..."
          value={value}
          onChange={handleChange}
        />
        <ul>{renderTechIcons()}</ul>
      </form>
      <Button onClick={handleSubmit}>Submit</Button>
    </FormContainer>
  );
}

export default EditTechsForm;
