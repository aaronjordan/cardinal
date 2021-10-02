import React from 'react';

import NoteList from '../components/NoteList/NoteList';

const MyNotes = () => {
  const items = {
    notes: [
      {
        title: 'new section', 
        id: 'bd13cf80-0ab4-11ec-9a03-0242ac130003',
        type: 's',
        notes: [
          {
            title: 'first note',
            id: "f5116902-2e5f-4112-93a5-fafb758adf7b",
          },
          {
            title: 'second note',
            id: "a9ffb056-b732-4243-be60-210757ed33a2",
          },
          {
            title: 'third note',
            id: "d231be6e-3560-4e32-9896-501ec172409e",
          },
        ],
      },
      {
        title: 'other section', 
        id: 'bd13d1ba-0ab4-11ec-9a03-0242ac130003',
        type: 's',
        notes: [
          {
            title: 'fourth note',
            id: "2c7d99c1-a5e8-44b8-ad81-23d9188432dc",
          },
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
