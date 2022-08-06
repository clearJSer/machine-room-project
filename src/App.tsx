import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    console.log(12213)
  })
  return (
    <div className="App">
      <canvas id="canvas"></canvas>
    </div>
  );
}

export default App;
