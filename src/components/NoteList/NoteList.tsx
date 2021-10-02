import React from 'react';
import NoteListWrapper from './NoteListWrapper';
import { generateListItems } from './NoteListHelpers';

const NoteList = props => {
  const {items = []} = props;

  return (
    <NoteListWrapper className="outer">
      {items.map(generateListItems)}
    </NoteListWrapper>
  );
};

export default NoteList;
