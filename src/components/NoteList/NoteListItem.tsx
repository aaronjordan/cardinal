import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import FeatherIcon from '../FeatherIcon/FeatherIcon';
import {
  moveIcon,
  edit3Icon,
  moreHorizontalIcon,
  shareIcon,
  trash2Icon,
} from '../FeatherIcon/FeatherIconList';
import { extractFunctionFromIconId } from './NoteListHelpers';
import Button from '../Button/Button';

const NoteListItem = props => {
  const {
    title = "(no title)",
    id = null
  } = props;

  const [willOpen, setWillOpen] = useState(false);

  const handleAction = (e) => {
    e.stopPropagation();
    switch (extractFunctionFromIconId(e.currentTarget.id)) {
      case "sort": return undefined;
      case "filter": return undefined;
      case "rename": return undefined;
      case "more": return undefined;
      case "move": return undefined;
      default:
        console.error(`event on item with id ${e.currentTarget.id} was not recognized.`);
    }
  };

  return (
    <li className="line note-list-item"
      onClick={() => setWillOpen(true)}
    >
      { id && willOpen && <Redirect push to={`/view/${id}`} />}
      <span className="left-group">
        <Button 
          variant="icon"
          onClick={handleAction}
          id={id ? `${id}-move-icon` : undefined}
        >
          <FeatherIcon 
            className="action-icon view-hover" 
            icon={moveIcon} 
            size="sm" 
            />
        </Button>
        <Button 
          variant="link"
          onClick={() => setWillOpen(true)}
        >
          <span className="item-title">{title}</span>
        </Button>
        <Button 
          variant="icon"
          id={id ? `${id}-rename-icon` : undefined}
          onClick={handleAction}
        >
          <FeatherIcon className="action-icon view-hover" icon={edit3Icon} />
        </Button>
      </span>
      <span className="right-group">
        <Button 
          variant="icon"
          id={id ? `${id}-more-icon` : undefined}
          onClick={handleAction}
        >
          <FeatherIcon className="action-icon view-hover" icon={moreHorizontalIcon} />
        </Button>
      </span>
    </li>
  );
};

export default NoteListItem;
