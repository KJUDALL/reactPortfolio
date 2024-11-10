// Single component used multiple times for my projects in the Porfolio section
import React from 'react';

function Project({title, image, appLink, repoLink}) {
    return (
        <section className='project'>
            <h3>{title}</h3>
            <img src={image} alt={'${title} screenshot'} />
            <section>
                <a href={appLink} target="_blank" rel='noopener noreferrer'>Live App</a>
                <a href={repoLink} target="_blank" rel='noopener noreferrer'>GitHub Repo</a>
            </section>
        </section>
    );
}

export default Project;