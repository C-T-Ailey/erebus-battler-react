import logo from './logo.svg';
import './App.css';
import UnitPurchase from './UnitPurchase';
import { useEffect, useState } from 'react';
import UnitList from './UnitList';

function App() {

  const [points, setPoints] = useState(1000)

  const [factionIsChosen, setFactionIsChosen] = useState(false)

  const [faction, setFaction] = useState("Not selected")

  const [lightUnits, setLightUnits] = useState([])

  const [medUnits, setMedUnits] = useState([])

  const [heavyUnits, setHeavyUnits] = useState([])

  const [ruinerUnits, setRuinerUnits] = useState([])

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
        <div className='game-area'>
          <UnitPurchase 
            points={points} 
            setPoints={setPoints} 
            faction={faction} 
            lightUnits={lightUnits} 
            medUnits={medUnits} 
            heavyUnits={heavyUnits}
            ruinerUnits={ruinerUnits}
            setLightUnits={setLightUnits} 
            setMedUnits={setMedUnits} 
            setHeavyUnits={setHeavyUnits}
            setRuinerUnits={setRuinerUnits} 
          />
          <UnitList
            lightUnits={lightUnits} 
            medUnits={medUnits} 
            heavyUnits={heavyUnits}
            ruinerUnits={ruinerUnits}
          />
        </div>
        }
      </div>
    </div>
  );
}

export default App;
