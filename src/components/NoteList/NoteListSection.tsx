import React, { useState } from 'react';
import PropTypes from 'prop-types';

import FeatherIcon from '../FeatherIcon/FeatherIcon';
import NoteListWrapper from './NoteListWrapper';
import NoteListCreate from './NoteListCreate';
import Button from '../Button/Button';
import { 
  generateListItems,
  extractFunctionFromIconId,
} from './NoteListHelpers';
import { 
  chevronDownIcon, 
  edit3Icon,
  listIcon,
  filterIcon,
  moreHorizontalIcon
} from '../FeatherIcon/FeatherIconList';

/**
 * NoteListSection: A header for a section which embeds the items within it below.
 */
const NoteListSection = props => {
  const {
    notes = [],
    title = "(no title)",
    id = null,
  } = props;

  const [isOpen, setIsOpen] = useState(true);
  const toggledClassName = isOpen ? "open" : "closed";

  const handleCollapse = (e) => {
    e.stopPropagation();
    setIsOpen(x => !x);
  };

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
    <>
      <li
        id={`${id}-section-header`}
        className={`line note-list-section ${toggledClassName}`} 
        onClick={handleCollapse}>
        <span className="left-group">
          <Button variant="icon">
            <FeatherIcon
              className="section-chevron action-icon" 
              icon={chevronDownIcon} 
              size="lg" />
          </Button>
          <span className="item-title">{title}</span>
          <Button 
            variant="icon"
            id={id ? `${id}-rename-icon` : undefined}
            onClick={handleAction}
          >
            <FeatherIcon
              className="action-icon view-hover" 
              icon={edit3Icon} 
              />
          </Button>
        </span>
        <span className="right-group">
          <Button 
            variant="icon"
            id={id ? `${id}-sort-icon` : undefined}
            onClick={handleAction}
          >
            <FeatherIcon
              className="action-icon"
              icon={listIcon} 
              />
          </Button>
          <Button 
            variant="icon"
            id={id ? `${id}-filter-icon` : undefined}
            onClick={handleAction}
          >
            <FeatherIcon
              className="action-icon"
              icon={filterIcon} 
              />
          </Button>
          <Button 
            variant="icon"
            id={id ? `${id}-more-icon` : undefined}
            onClick={handleAction}
          >
            <FeatherIcon
              className="action-icon"
              icon={moreHorizontalIcon} 
              />
          </Button>
        </span>
      </li>
      <NoteListWrapper className={toggledClassName}>
        { !props.readOnly && <NoteListCreate id={id} /> }
        { notes.map(generateListItems) }
      </NoteListWrapper>
    </>
  );
};

export default NoteListSection;
