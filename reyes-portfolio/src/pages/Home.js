import React from 'react';


const Home = () => {
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
            {/* Place your profile image here */}
            <div className="image-placeholder">
              <span>Your Profile Photo</span>
            </div>
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
            {/* Place an image of you working or at an event */}
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
