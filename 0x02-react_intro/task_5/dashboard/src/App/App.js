import React from 'react';
import './App.css';
import { getFullYear, getFooterCopy } from '../utils/utils'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="../assets/holberton-logo.jpg" className="App-logo" alt="logo" />
        <h1>
        School dashboard
        </h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <label for="email">Email</label>
            <input type="email" id="email" name="email" required></input>
        <label for="pass">Password</label>
            <input type="password" id="pass" name="password" minlength="8" required></input>
        <input type="button" value="OK" />
      </body>
      <footer>
        <p>Copyright {getFullYear} - {getFooterCopy}</p>
      </footer>
    </div>
  );
}

export default App;
