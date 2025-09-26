import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header style={{zIndex: 10000}} className="App-header">
        <h1>Добро пожаловать в LP4 React App</h1>
        <p>
          Это чистое React приложение с TypeScript
        </p>
      </header>
    </div>
  );
};

export default App;
