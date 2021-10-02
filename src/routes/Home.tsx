import React from 'react';
import MyNotes from '../modules/MyNotes';

const Home = () => {
  return (
    <main id="home-page">
      <h1>Home component</h1>
      <p>All the user's notes are listed below.</p>
      <MyNotes />
    </main>
  );
};

export default Home;