//Step 3. Add structure and placeholder text for now. Provides a framework  
// make sure I'm using the project.js component in here to display my projects
import React from 'react';
import Project from '../components/Project';
import { defer } from 'react-router-dom';

function Porfolio() {
    return (
        <section>
            <h2>My Portfolio</h2>
            <section className='project-list'>
                <Project
                    title="Project One"
                    image='link-to-image1.jpg'
                    appLink='https://liveapp1.com'
                    repoLink='https://github.com/username/project1'
                />
                <Project
                    title="Project Two"
                    image='link-to-image2.jpg'
                    appLink='https://liveapp2.com'
                    repoLink='https://github.com/username/project2'
                />
                <Project
                    title="Project Three"
                    image='link-to-image3.jpg'
                    appLink='https://liveapp3.com'
                    repoLink='https://github.com/username/project3'
                />
                <Project
                    title="Project Four"
                    image='link-to-image4.jpg'
                    appLink='https://liveapp4.com'
                    repoLink='https://github.com/username/project4'
                />
            </section>
        </section>
    );
}

export default Porfolio;