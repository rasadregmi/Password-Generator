import './App.css';
import { useState } from 'react';
import { LC, UC, SC, NC } from "./Data/passChar.jsx";

function App() {
  let [uppercase, setUppercase] = useState(false);
  let [lowercase, setLowercase] = useState(false);
  let [number, setNumber] = useState(false);
  let [symbols, setSymbols] = useState(false);
  let [passwordlen, setPasswordlen] = useState(8);
  let [fpass, setFpass] = useState('');

  let createPassword = () => {
    let charSet = '';
    let finalPass = '';
    if (uppercase || lowercase || number || symbols) {
      if (uppercase) charSet += UC;
      if (lowercase) charSet += LC;
      if (number) charSet += NC;
      if (symbols) charSet += SC;
      for (let i = 0; i < passwordlen; i++) {
        finalPass += charSet.charAt(Math.floor(Math.random() * charSet.length))
      }
      setFpass(finalPass);
    } else {
      alert("Please check at least one checkbox!")
    }
  }

  let handleCopyvalue = () => {
    navigator.clipboard.writeText(fpass);
  }

  return (
    <div className="App">
      <div className='passwordBox'>
        <h2>Password Generator</h2>

        <div className='passwordBoxin'>
          <input type='text' value={fpass} readOnly />
          <button onClick={handleCopyvalue}>Copy</button>
        </div>

        <div className='passLength'>
          <label>Password Length</label>
          <input type='number' min={8} max={20} value={passwordlen} onChange={(event) => setPasswordlen(event.target.value)} />
        </div>

        <div className='passLength'>
          <label>Include UpperCase Letters</label>
          <input type='checkbox' checked={uppercase} onChange={() => setUppercase(!uppercase)} />
        </div>

        <div className='passLength'>
          <label>Include LowerCase Letters</label>
          <input type='checkbox' checked={lowercase} onChange={() => setLowercase(!lowercase)} />
        </div>

        <div className='passLength'>
          <label>Include Numbers</label>
          <input type='checkbox' checked={number} onChange={() => setNumber(!number)} />
        </div>

        <div className='passLength'>
          <label>Include Symbols</label>
          <input type='checkbox' checked={symbols} onChange={() => setSymbols(!symbols)} />
        </div>
      </div>

      <button className='btn' onClick={createPassword}>Generate Password</button>

    </div>
  );
}

export default App;
