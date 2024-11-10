//Step 2. Reusable component
// import react
import React from 'react';

function Header() {
    return (
        <header>
            <h1>
                Kenzie Udall
            </h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">About Me</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/resume">Resume</Link>
                    </li>
                </ul>
            </nav>
    </header>
)
}

//export header
export default Header;