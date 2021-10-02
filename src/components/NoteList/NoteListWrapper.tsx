import React from 'react';

const NoteListWrapper = props => {
  const {
    className = "open",
    id,
  } = props;

  return (
    <ul id={id} className={`note-list ${className}`}>
      {props.children}
    </ul>
  );
};

export default NoteListWrapper;
