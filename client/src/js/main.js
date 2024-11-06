// WHEN I click on a navigation title
// THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted
// WHEN I load the portfolio the first time
// THEN the About Me title and section are selected by default
// WHEN I move my cursor out of one of the form fields without entering text
// THEN I receive a notification that this field is required
// WHEN I enter text into the email address field
// THEN I receive a notification if I have entered an invalid email address
// WHEN I am presented with the Resume section
// THEN I see a link to a downloadable resume and a list of the developer’s proficiencies

// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import { Modal, Tooltip, Collapse, Dropdown, Alert, Button } from 'bootstrap'

import { BroswerRouter as Router, Route, Routes, NavLink } from 'react-router-dom';

function app() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<AboutMe />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/resume' element={<Resume />} />
            </Routes>
            <Footer />
        </Router>
    );
};