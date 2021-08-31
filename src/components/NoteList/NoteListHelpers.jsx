import React from 'react';
import NoteListSection from './NoteListSection';
import NoteListItem from "./NoteListItem";
import {
  SECTION_CODE
} from './NoteListConstants';

export const generateListItems = (item, index) => {
  const itemType = (() => {
    if (item.type === SECTION_CODE) return NoteListSection;
    else return NoteListItem;
  })();

  return React.createElement(
    itemType,
    {
      key: index,
      title: item.title,
      notes: item.notes,
    }
  );
};