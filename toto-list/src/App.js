import React from 'react';
import Todo from './containers/todoForm'
import './App.css';
import Navbar from './components/Navbar';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Todo />

    </div>
  );
}

export default App;
