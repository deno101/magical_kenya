import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'jquery/dist/jquery.min.js'
import 'popper.js/dist/popper.min.js'
import Navbar from './components/navbar/Navbar';
import 'font-awesome/css/font-awesome.min.css'

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
