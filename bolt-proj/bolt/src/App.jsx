import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar.jsx';
import Hero from './components/home/Hero.jsx';
import QRGenerator from './components/qr/QRGenerator.jsx';
import MenuTemplates from './components/templates/MenuTemplates.jsx';
import Page2 from './components/home/Page2.jsx';
import Page3 from './components/home/Page3.jsx'; 

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero /> 
                <Page2 /> 
                <Page3 />
              </>
            }
          />
          <Route path="/generator" element={<QRGenerator />} />
          <Route path="/templates" element={<MenuTemplates />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
