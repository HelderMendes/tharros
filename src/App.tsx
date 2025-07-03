import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Lecture from './pages/Lecture';
import Comenius from './pages/Comenius';
import ABD from './pages/ABD';
import BZR from './pages/BZR';
import Workshops from './pages/Workshops';
import Coaching from './pages/Coaching';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lecture" element={<Lecture />} />
            <Route path="/comenius" element={<Comenius />} />
            <Route path="/abd" element={<ABD />} />
            <Route path="/bzr" element={<BZR />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/coaching" element={<Coaching />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;