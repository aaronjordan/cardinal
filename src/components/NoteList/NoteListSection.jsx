import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FeatherIcon from '../FeatherIcon/FeatherIcon';
import NoteListWrapper from './NoteListWrapper';
import { generateListItems } from './NoteListHelpers';
import { chevronDownIcon } from '../FeatherIcon/FeatherIconList';

/**
 * NoteListSection: A header for a section which embeds the items within it below.
 */
const NoteListSection = props => {
  const {
    notes = [],
    title = "(no title)",
  } = props;

  const [isOpen, setIsOpen] = useState(true);
  const toggledClassName = isOpen ? "open" : "closed";

  const handleCollapse = (e) => {
    e.stopPropagation();
    setIsOpen(x => !x);
  }

  return (
    <>
      <li className={`line note-list-section ${toggledClassName}`} onClick={handleCollapse}>
        <span className="left-group">
          <FeatherIcon className="section-chevron" icon={chevronDownIcon} size="lg" />
          <span className="item-title">{title}</span>
        </span>
      </li>
      <NoteListWrapper className={toggledClassName}>
        {notes.map(generateListItems)}
      </NoteListWrapper>
    </>
  );
};

NoteListSection.propTypes = {
  title: PropTypes.string,
  itemType: PropTypes.string,
};

export default NoteListSection;
