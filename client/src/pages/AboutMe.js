//Step 3. Add structure and placeholder text for now. Provides a framework  
// The About Me section is the default landing page
// it needs to have an <h2> tag, a < p > tag, a user avatar, and footer image links (github, linkedin, stack overflow images)

import React from 'react';

function AboutMe() {

    const title = "About Me";
    const avatarImage = 'https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=';
    const gitHub = 'https://banner2.cleanpng.com/20180920/aey/kisspng-scalable-vector-graphics-github-computer-icons-log-github-brand-octacat-social-svg-png-icon-free-down-5ba35d7db54fe5.6273953815374329577427.jpg';
    const linkedIn = 'https://www.citypng.com/public/uploads/preview/hd-linkedin-square-black-icon-transparent-background-7017516949739946gsykkwdmd.png?v=2024101600';
    const stackOverflow = 'https://banner2.cleanpng.com/20180718/lho/60799647bb5891b19c2c07aa760ccd85.webp';

    return (
        <section className='aboutMeSection'>
        <h2>{title}</h2>
            <p>Hey there! I'm Kenz and I'm glad you're here. This application shows a bit of my development work and skillset. Hopefully you like what you see. <br />If I'm not working on new coding projects, you'll catch me boxing at my local gym where I also coach. Aside from that, I love my morkie puppy and spending time with my husband as much as possible. We're currently working on a paint-by-numbers, which has been fun to do together. </p>
            <img src={avatarImage} alt='User Avatar' />
        
        <footer>
        <a href={gitHub} target='_blank' rel='noopener noreferrer'>
                    <img src='https://banner2.cleanpng.com/20180920/aey/kisspng-scalable-vector-graphics-github-computer-icons-log-github-brand-octacat-social-svg-png-icon-free-down-5ba35d7db54fe5.6273953815374329577427.jpg' alt='GitHub profile link' />
                </a>
                <a href={linkedIn} target='_blank' rel='noopener noreferrer'>
                    <img src='https://www.citypng.com/public/uploads/preview/hd-linkedin-square-black-icon-transparent-background-7017516949739946gsykkwdmd.png?v=2024101600' alt='LinkedIn profile link' />
                </a>
                <a href={stackOverflow} target='_blank' rel='noopener noreferrer'>
                    <img src='https://banner2.cleanpng.com/20180718/lho/60799647bb5891b19c2c07aa760ccd85.webp' alt='Stack Overflow profile link' />
                </a>
        </footer>
        </section>
    );
}

export default AboutMe;