import React from 'react';

import NoteList from '../components/NoteList/NoteList';

const MyNotes = () => {
  const items = {
    notes: [
      {
        title: 'new section', 
        type: 's',
        notes: [
          {title: 'first note'},
          {title: 'second note'},
          {title: 'third note'},
        ],
      },
      {
        title: 'other section', 
        type: 's',
        notes: [
          {title: 'fourth note'},
        ],
      },
    ],
    totalItems: 6
  };

  return (
    <section id="myNotes">
      <h2>My Notes</h2>
      <NoteList items={items.notes} />
    </section>
  )
}

export default MyNotes;
