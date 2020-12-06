
import React,{useState} from 'react'
import './App.css';
import P from './components/parent'
import counterContext from './components/counter'
import counterReducer from './components/counterReducer'

function App() {
  let counterset=useState(1)
  return (
    <div className="App">
      <counterContext.Provider value={counterset}>
        <div>
     <P />
     </div>
     </counterContext.Provider>
    </div>
  );
}

export default App;
