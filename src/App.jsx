import React from 'react';
import RandomJoke from './components/RandomJoke';
import MultipleJokes from './components/MultipleJokes';
import Website from './components/Website';
import './styles.css';

export default function App() {
  return (
    <div className="App">
      <RandomJoke />
      <MultipleJokes />
      <Website />
    </div>
  );
}
