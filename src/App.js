import React from 'react';
import logo from './logo.svg';
import './App.css';
import Travels from './components/Travels';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Travel Manager
        </p>
      </header>
      <Main>
        <Travels />
      </Main>
    </div>
  );
}

export default App;
