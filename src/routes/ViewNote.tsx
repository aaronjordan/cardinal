import React from 'react';
import { useParams } from 'react-router';
import Note from '../components/Note/Note';

const NoteData = {
  note: {
    title: 'first note',
    id: "f5116902-2e5f-4112-93a5-fafb758adf7b",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at laoreet elit. \n\n\
Donec et auctor felis, non rutrum odio. Vestibulum efficitur tristique bibendum.",
    dateModified: new Date(1631672946065),
    dateCreated: new Date(1631672546065),
  }
};

const ViewNote = () => {
  const { noteId = null } = useParams();
  if(noteId === null) {
    console.error('no note was provided in url')
  }

  return (
    <main>
      <Note content={NoteData.note} />
    </main>
  );
};

export default ViewNote;
