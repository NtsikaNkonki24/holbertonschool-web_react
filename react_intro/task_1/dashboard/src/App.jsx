import React from 'react';
import logo from './assets/holberton-logo.jpg'; // adjust path if needed
import { getCurrentYear, getFooterCopy } from './utils';
import Notifications from './Notifications';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="holberton logo" />
        <h1>School dashboard</h1>
      </header>

      <main className="App-body">
        <p>Login to access the full dashboard</p>

        {/* Notifications wrapped in root-notifications */}
        <div className="root-notifications">
          <Notifications />
        </div>
      </main>

      <footer className="App-footer">
        <p>
          {getFooterCopy(true)} - {getCurrentYear()}
        </p>
      </footer>
    </div>
  );
}

export default App;
