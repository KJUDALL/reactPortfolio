// Step 1. Central hub of application
//Add imports to display in the App fx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import AboutMe from './pages/AboutMe.js';
import Portfolio from './pages/Portfolio.js';
import Contact from './pages/Contact.js';
import Resume from './pages/Resume.js';

// This fx is to display all the routes/html using React
function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path='/' element={<AboutMe />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/resume' element={<Resume />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;