import logo from './logo.svg';
import './App.css';
import Units from './Units';
import { useEffect, useState } from 'react';

function App() {

  const [points, setPoints] = useState(1000)

  useEffect(() => {
    console.log(points)
  }, [points])

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
        Points: {points}
      </div>
      <div>
        <Units points={points} setPoints={setPoints}></Units>
      </div>
      <div>
        <p>Display</p>
      </div>
    </div>
  );
}

export default App;
