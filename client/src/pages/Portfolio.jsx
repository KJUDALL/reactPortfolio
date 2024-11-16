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
                    title="Employee Payroll Tracker"
                    image='link-to-image1.jpg'
                    appLink='https://media.istockphoto.com/id/1224495764/vector/abstract-contemporary-aesthetic-background-with-geometric-sun-lines-earth-tone-golden-color.jpg?s=2048x2048&w=is&k=20&c=Is-F8W2MW_KlyvTKoDnUCu4YMihxav0tEy52FmBaLoU='
                    repoLink='https://github.com/KJUDALL/employeePayrollTracker'
                />
                <Project
                    title="Grocery Time-Saver"
                    image='link-to-image2.jpg'
                    appLink='file:///Users/chrisandkenz/Downloads/project%20two.jpg'
                    repoLink='https://github.com/KJUDALL/groceryTimeSaverApplication.git'
                />
                <Project
                    title="Personal Porfolio"
                    image='link-to-image3.jpg'
                    appLink='file:///Users/chrisandkenz/Downloads/project%20_three.jpg'
                    repoLink='https://github.com/KJUDALL/personalPortoflio.git'
                />
                <Project
                    title="Vehicle Builder App"
                    image='link-to-image4.jpg'
                    appLink='https://media.istockphoto.com/id/1477609105/photo/beige-abstract-background-with-palm-leaves-shadow.jpg?s=2048x2048&w=is&k=20&c=6grZPgG8n_uFWNK4CzfimCSvEE7nrPyPCnuzguHFUXE='
                    repoLink='https://github.com/KJUDALL/vehicleBuilderApp.git'
                />
            </section>
        </section>
    );
}

export default Porfolio;