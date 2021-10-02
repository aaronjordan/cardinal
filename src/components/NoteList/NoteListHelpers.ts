import React from 'react';
import NoteListSection from './NoteListSection';
import NoteListItem from "./NoteListItem";
import {
  SECTION_CODE
} from './NoteListConstants';
import {
  getShortId
} from '../../modules/Shared/Utils';

export const extractFunctionFromIconId = (id) => {
  if (typeof id === "string" && id.lastIndexOf("-icon") > 0) {
    return id.slice(id.indexOf('-')+1, id.lastIndexOf('-'));
  } else {
    console.error("extractFunctionFromIconId was passed an invalid value.");
    return null;
  }
}

export const generateListItems = (item, index) => {
  const itemType = (() => {
    if (item.type === SECTION_CODE) return NoteListSection;
    else return NoteListItem;
  })();

  return React.createElement(
    itemType,
    {
      key: index,
      id: getShortId(item.id), // should be enough to be unique in any uuid string
      title: item.title,
      notes: item.notes,
    }
  );
};