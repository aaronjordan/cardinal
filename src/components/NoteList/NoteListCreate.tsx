import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FeatherIcon from '../FeatherIcon/FeatherIcon';
import { 
  plusCircleIcon,
} from '../FeatherIcon/FeatherIconList';
import Button from '../Button/Button';

const NoteListCreate = props => {
  const { id } = props;
  const [isCreateActive, setIsCreateActive] = useState(false);
  
  // create logic here?

  const handleCreate = (e) => {
    console.log('create a new note')
    setIsCreateActive(true);
  };

  return (
    <li className="line note-list-item">
      <span className="left-group" onClick={handleCreate}>
        <Button variant="flex">
          <FeatherIcon 
            id={`${props.id || 'GENERATE_ID'}-create-icon`}
            className="icon action-icon view-hover" 
            icon={plusCircleIcon}
            size="md"
            />
          <span className="item-title">Create a new note</span>
        </Button>
      </span>
    </li>
  );
};

NoteListCreate.propTypes = {
  title: PropTypes.string,
  itemType: PropTypes.string,
  id: PropTypes.string.isRequired,
};

export default NoteListCreate;
