import React from 'react';
import './App.css';
import Story from './components/Story';
import BestStories from './components/BestStories';

function App() {
  return (
    <div className="App">
      <h1>Hacker news</h1>
      {/* <Story /> */}
      <BestStories />
    </div>
  );
}

export default App;
