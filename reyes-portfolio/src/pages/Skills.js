import React, { useState } from 'react';


const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('programming');

  const skillCategories = {
    programming: {
      title: "Programming & Computing",
      skills: [
        { name: "JavaScript", level: 85 },
        { name: "React", level: 75 },
        { name: "C#", level: 80 },
        { name: "Unity3D", level: 85 },
        { name: "SQL", level: 70 }
      ],
      imagePlaceholder: "Coding Setup Photo"
    },
    ai: {
      title: "AI & Machine Learning",
      skills: [
        { name: "RAG Implementation", level: 85 },
        { name: "MediaPipe", level: 80 },
        { name: "AWS Bedrock", level: 70 },
        { name: "Vector Search", level: 75 },
        { name: "Computer Vision", level: 80 }
      ],
      imagePlaceholder: "AI Project Demo"
    },
    leadership: {
      title: "Leadership & Management",
      skills: [
        { name: "Team Leadership", level: 90 },
        { name: "SCRUM Master", level: 85 },
        { name: "Event Management", level: 90 },
        { name: "Public Speaking", level: 80 },
        { name: "Project Management", level: 85 }
      ],
      imagePlaceholder: "Leadership Event Photo"
    }
  };

  return (
    <div className="skills">
      <h1>Skills & Expertise</h1>
      
      <div className="skills-navigation">
        {Object.keys(skillCategories).map(category => (
          <button
            key={category}
            className={`skill-nav-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {skillCategories[category].title}
          </button>
        ))}
      </div>

      <div className="skills-content">
        <div className="skills-image">
          <div className="image-placeholder">
            <span>{skillCategories[activeCategory].imagePlaceholder}</span>
          </div>
        </div>
        
        <div className="skills-list">
          <h2>{skillCategories[activeCategory].title}</h2>
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{width: `${skill.level}%`}}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
