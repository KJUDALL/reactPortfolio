// Step 1. Central hub of application
//Add imports to display in the App fx
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import AboutMe from './pages/AboutMe.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';
import Resume from './pages/Resume.jsx';
import React from 'react';

// This fx is to display all the routes/html using React
function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<AboutMe />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/resume' element={<Resume />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;