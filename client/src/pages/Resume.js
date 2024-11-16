//Step 3. Add structure and placeholder text for now. Provides a framework  
import React from 'react';


function Resume() {
    const title = 'Resume';
    
    return (
        <section className='resumeSection'>
            <h2>{title}</h2>
            <p className='downloadResume'>
            <a
                href='https://docs.google.com/document/d/195eXBLje92xfSFajWAeEVKHwf6UENLvXNWsdkJhdo7o/edit?usp=sharing'
                target='_blank'
                rel='noopener noreferrer'
            >
                Download my resume
                </a>
                </p>
            <br />
            <h2>Front-end Proficiencies</h2>
            <br />
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Bootstrap</li>
                <li>jQuery</li>
                <li>Bulma</li>
                <li>Responsive Design</li>
                <li>Mobile Focused</li>
            </ul>
            <br />
            <h2>Back-end Proficiencies</h2>
            <br />
            <ul>
                <li>API</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL + Sequelize</li>
                <li>Postgres</li>
                <li>REST</li>
                <li>npm</li>
            </ul>
            </section>
    );
}

export default Resume;