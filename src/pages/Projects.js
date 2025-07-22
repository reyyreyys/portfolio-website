import React, { useState } from 'react';


const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Rehabify - AI-Powered Active Ageing",
      category: "Startup/Healthcare",
      description: "Gamified active ageing platform using AI motion tracking and Unity AR games to promote physical activity among elderly users.",
      tech: ["Unity", "C#", "MediaPipe", "Android", "AR"],
      achievements: ["Batey Gold 2024", "NTU KSIP Finalists 2025", "Ground Zero Finalist 2025"],
      imagePlaceholder: "Rehabify App Screenshots"
    },
    {
      id: 2,
      title: "Project INC - AI Request Management Portal",
      category: "AI/Enterprise",
      description: "Led AI Development Team to build RAG-powered request management system for real client using JavaScript, PostgreSQL, and AWS.",
      tech: ["JavaScript", "PostgreSQL", "AWS Bedrock", "RAG", "Vector Search"],
      achievements: ["Team Leadership", "Client Delivery"],
      imagePlaceholder: "Portal Interface Screenshots"
    },
    {
      id: 3,
      title: "Snake Ball Z - VR Game",
      category: "VR/Gaming",
      description: "7-stage VR zombie survival shooter with AI companions, voice controls, and Dragon Ball-inspired gameplay.",
      tech: ["Unity3D", "C#", "VR", "Voice Recognition"],
      achievements: ["Largest VR project", "Voice-activated controls"],
      imagePlaceholder: "VR Game Screenshots"
    },
    {
      id: 4,
      title: "Carrie K Ring Customization",
      category: "Web/Innovation",
      description: "Interactive web prototype with 3D ring rendering, AR projection, and personalization quiz for custom engagement rings.",
      tech: ["React", "3D Rendering", "AR", "Figma"],
      achievements: ["Client impressed", "Working prototype"],
      imagePlaceholder: "Ring Customizer Interface"
    }
  ];

  const toggleProject = (id) => {
    setActiveProject(activeProject === id ? null : id);
  };

  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-header" onClick={() => toggleProject(project.id)}>
              <h3>{project.title}</h3>
              <span className="category">{project.category}</span>
              <span className="toggle-icon">
                {activeProject === project.id ? '−' : '+'}
              </span>
            </div>
            
            {activeProject === project.id && (
              <div className="project-details">
                <div className="project-image">
                  <div className="image-placeholder">
                    <span>{project.imagePlaceholder}</span>
                  </div>
                </div>
                <p>{project.description}</p>
                
                <div className="tech-stack">
                  <h4>Technologies:</h4>
                  <div className="tech-tags">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="achievements">
                  <h4>Key Achievements:</h4>
                  <ul>
                    {project.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
