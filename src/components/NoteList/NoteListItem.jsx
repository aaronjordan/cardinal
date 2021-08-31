import React from 'react';
import PropTypes from 'prop-types';
import FeatherIcon from '../FeatherIcon/FeatherIcon';
import { edit3Icon } from '../FeatherIcon/FeatherIconList';

const NoteListItem = props => {
  const {
    title = "(no title)",
  } = props;

  return (
    <li className="line note-list-item">
      <span className="left-group">
        <FeatherIcon icon="empty" size="lg" />
        <span className="item-title">{title}</span>
        <FeatherIcon icon={edit3Icon} />
      </span>
      <span className="right-group">
        right icons
      </span>
    </li>
  );
};

NoteListItem.propTypes = {
  title: PropTypes.string,
  itemType: PropTypes.string,
};

export default NoteListItem;
