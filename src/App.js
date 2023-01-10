import logo from './logo.svg';
import './App.css';
import Units from './Units';
import { useEffect, useState } from 'react';

function App() {

  const [points, setPoints] = useState(1000)

  const [factionIsChosen, setFactionIsChosen] = useState(false)

  const [faction, setFaction] = useState("Not selected")

  useEffect(() => {
    console.log(factionIsChosen)
    console.log(faction)
  }, [factionIsChosen, faction])

  useEffect(() => {
    console.log(points)
  }, [points])

  const factionSelect = (e) => {
    console.log(e.target.name)
    setFactionIsChosen(true)
    setFaction(e.target.name)
  }

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <div>
        <p>Faction: {faction}</p>
        <p>Points: {points}</p>
      </div>
      <div>
        { !factionIsChosen 
        ? 
        <div>
          <p>Choose a faction:</p> 
          <button name='The Tyranny' onClick={(e) => factionSelect(e)}>Tyranny</button>
          <button name='The Necropolis' onClick={(e) => factionSelect(e)}>Necropolis</button>
        </div>
        :
        <Units points={points} setPoints={setPoints} faction={faction}></Units>
        }
      </div>
    </div>
  );
}

export default App;
