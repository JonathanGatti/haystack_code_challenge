import React, { useState, ChangeEvent } from 'react';
import { UPDATE_TECHS, userId } from '../../../api/queries';
import { FormContainer, Button } from '../../../common/styles';
import { technologies } from '../../../assets/technologies';
import { Tech } from '../interfaces';
import { useMutation } from '@apollo/client';

interface EditTechsForm {
  setEditFormOpen: (val: boolean) => void;
  techs: Tech[];
}

const initialTech = {
  uid: '',
  wiegth: 0,
};

function EditTechsForm({ setEditFormOpen, techs }: EditTechsForm) {
  const [updateUser] = useMutation(UPDATE_TECHS);

  const [newTechnologies, setNewTechnologies] = useState<Tech[]>(techs);
  const [newTech, setNewTech] = useState(initialTech);
  const [value, setValue] = useState('');

  const handleChnage = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    //setEditFormOpen(false);
    setNewTech({ ...initialTech, uid: value });
    setNewTechnologies([...techs, newTech]);
    console.log(newTechnologies);
    updateUser({
      variables: {
        id: userId,
        techs: newTechnologies,
      },
    });
  };

  const renderTechs = () => {
    const searchedTechs = technologies.filter((tech) => tech.name === value);
    return searchedTechs.map((icon) => (
      <div>
        <img src={icon.iconUrl}></img>
        <Button onClick={handleClick}>Add tech</Button>
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
      </form>
      {renderTechs()}
    </FormContainer>
  );
}

export default EditTechsForm;
