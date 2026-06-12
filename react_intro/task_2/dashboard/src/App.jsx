import React from 'react';
import './App.css';
import logo from './assets/holberton-logo.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="holberton logo" />
        <h1>School dashboard</h1>
      </header>

      <main className="App-body">
        <p>Login to access the full dashboard</p>

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        <button type="button">OK</button>
      </main>

      <footer className="App-footer">
        <p>© {new Date().getFullYear()} Holberton School</p>
      </footer>
    </div>
  );
}

export default App;
