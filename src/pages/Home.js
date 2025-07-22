import React from 'react';
import ImageCarousel from '../components/ImageCarousel';
import MatrixGame from '../components/MatrixGame';

import profileImage1 from '../assets/images/profile-1.jpg';
import profileImage2 from '../assets/images/profile-2.jpg';
import profileImage3 from '../assets/images/profile-3.jpg';
import profileImage4 from '../assets/images/profile-4.jpg';

import teamCollaborationPhoto from '../assets/images/team-collaboration.jpg';
const Home = () => {
  const profileImages = [
    {
      type: 'image',
      src: profileImage1, 
      alt: 'Professional headshot of Reyes'
    },
    {
      type: 'image',
      src: profileImage2,
      alt: 'Reyes at Apple Developer Center event'
    },
    {
      type: 'image',
      src: profileImage3,
      alt: 'Reyes with Rehabify development team'
    },
    {
      type: 'image',
      src: profileImage4,
      alt: 'Reyes with INC project team'
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
              interval={5000}
              autoPlay={true}
            />
          </div>
        </div>
      </section>

      {/* Interactive Minigame Section */}
      <section className="minigame-section">
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <MatrixGame />
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
            <img 
              src={teamCollaborationPhoto}
              alt="Reyes collaborating with team members on projects"
              className="about-photo"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
