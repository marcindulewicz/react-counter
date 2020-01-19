import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Counter from './Counter.js'


function App() {
  return (
    <div className="App">

      <Counter initValue='110' />
      <Counter initValue='111' />

    </div>
  );
}

export default App;
