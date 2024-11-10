//Step 2. Reusable component
// import react 
import React from 'react';

function Navigation({sections, currentSection, onSectionClick}) {
    return (
        <nav>
            <ul>
                {sections.map((section) => (
                <li
                    key={section}
                    className={currentSection === section ? 'active' : ''}
                    onClick={() => onSectionClick(section)}
                >
                    {section}
                </li>
                ))}
            </ul>
        </nav>
    );
}