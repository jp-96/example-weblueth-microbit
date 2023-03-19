import React from 'react'
import Logo from './Logo';  // logo.svg ==> Logo.tsx
//import './App.css'; // ==> ../index.html
import { MicrobitContextProvider } from '@weblueth/microbit';
import { MicrobitConn, MicrobitName, MicrobitBtn, MicrobitAcc } from '../components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo className="App-logo" />
        <p>
          Edit <code>src/app/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MicrobitContextProvider connectionName={"micro:bit"}>
          <p>
            <MicrobitConn />
            <br />
            micro:bit Name: <MicrobitName />
            <br />
            Button A: <MicrobitBtn button='a' /> Button B: <MicrobitBtn button='b' />
          </p>
          Accelerometer
          <MicrobitAcc />
        </MicrobitContextProvider>
      </header>
    </div>
  );
}

export default App;
