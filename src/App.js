import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Rockets from './Components/Rockets';
import Dashboard from './Components/Dashboard';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <Router>
      <div className="main-container">
        <div className='ulta'>
          <Sidebar />
        </div>
        <div className="container">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/rockets" element={<Rockets />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
