import React from 'react';
import ImageCarousel from '../components/ImageCarousel';

import profileImage1 from '../assets/images/profile-1.jpg';
import profileImage2 from '../assets/images/profile-2.jpg';

const Home = () => {
  // Define your profile images here
  const profileImages = [
    {
      type: 'image',
      src: profileImage1, // Use the imported variable
      alt: 'Headshot'
    },
    {
      type: 'image',
      src: profileImage2,
      alt: 'Apple Dev Center'
    },
        {
      type: 'image',
      src: profileImage2,
      alt: 'Apple Dev Center'
    }
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Reyes Ng</h1>
            <h2>AI Development Team Lead | Entrepreneur | Game Developer</h2>
            <p>
              Passionate about leveraging technology to solve real-world problems. 
              Currently leading AI development for Project INC and founding Rehabify, 
              a startup focused on active ageing through AI-powered motion tracking games.
            </p>
          </div>
          <div className="hero-image">
            <ImageCarousel 
              images={profileImages}
              interval={4000}
              autoPlay={true}
            />
          </div>
        </div>
      </section>

      <section className="about">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              My entrepreneurial journey began with a fascination for the intersection 
              of technology and real-world problem-solving. Through hands-on experiences 
              in hackathons and startup competitions, I discovered the transformative 
              power of innovative ideas.
            </p>
            <p>
              I am driven by the desire to create impactful solutions that address 
              pressing societal challenges, particularly in healthcare and active 
              ageing sectors. Founding Rehabify has allowed me to channel this passion 
              into a tangible venture.
            </p>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <span>Working/Event Photo</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
