import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Dashboard } from './Components/Dashboard';
import { Header } from './Layout/Header';
import { Footer } from './Layout/Footer';

function App() {
  return (<>
    <Header />
    <div >
      <Dashboard />
    </div>
     <Footer />
  </>
  );
}

export default App;
