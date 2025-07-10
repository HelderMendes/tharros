import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Tharros from './pages/Tharros';
import FerdiProfile from './pages/FerdiProfile';
import Lecture from './pages/Lecture';
import Comenius from './pages/Comenius';
import ABR from './pages/ABR';
import Workshops from './pages/Workshops';
import Coaching from './pages/Coaching';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import MinisterieBZK from './pages/MinisterieBZK';

function App() {
    return (
        <HelmetProvider>
            <Router>
                <div className='min-h-screen bg-white'>
                    <Navbar />
                    <main>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/tharros' element={<Tharros />} />
                            <Route
                                path='/ferdi-licher'
                                element={<FerdiProfile />}
                            />
                            <Route path='/lecture' element={<Lecture />} />
                            <Route path='/comenius' element={<Comenius />} />
                            <Route path='/abr' element={<ABR />} />
                            <Route
                                path='/ministerie-BZK'
                                element={<MinisterieBZK />}
                            />
                            <Route path='/workshops' element={<Workshops />} />
                            <Route path='/coaching' element={<Coaching />} />
                            <Route path='/contact' element={<Contact />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
        </HelmetProvider>
    );
}

export default App;
