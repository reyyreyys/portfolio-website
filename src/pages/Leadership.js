import React, { useState } from 'react';

const Leadership = () => {
  const [expandedRole, setExpandedRole] = useState(null);

  const roles = [
    {
      id: 1,
      title: "AI Development Team Lead",
      organization: "Project INC - Singapore Polytechnic",
      period: "Sep 2024 - Present",
      description: "Leading R&D into AI use cases and implementing RAG systems for real client solutions.",
      achievements: [
        "Led team in building full-featured AI portal",
        "Implemented scalable AWS deployment",
        "Managed SCRUM workflow and client delivery"
      ],
      imagePlaceholder: "Team Photo or Project Demo"
    },
    {
      id: 2,
      title: "Engagement Coordinator",
      organization: "Singapore Red Cross Youth",
      period: "Jan 2025 - Present",
      description: "Organizing community outreach initiatives and national-scale events for disaster preparedness.",
      achievements: [
        "Organized Punggol Coast Emergency Preparedness Day 2024",
        "Developed interactive VR game for first aid education",
        "Coordinated Project Swift and Red Cross Youth Fiesta"
      ],
      imagePlaceholder: "Red Cross Event Photos"
    },
    {
      id: 3,
      title: "Area Coordinator",
      organization: "National Police Cadet Corps",
      period: "2024 - Present",
      description: "Overseeing committee operations and volunteer development across multiple schools.",
      achievements: [
        "Enhanced volunteer engagement programs",
        "Managed area-wide training camps",
        "Created media content reaching 30,000+ views"
      ],
      imagePlaceholder: "NPCC Leadership Photos"
    },
    {
      id: 4,
      title: "Executive Committee Member",
      organization: "Singapore Polytechnic Apple Developers Society",
      period: "2024 - Present",
      description: "Contributing to event planning, publicity, and technical education initiatives.",
      achievements: [
        "Organized Swift Nano Bootcamp 2024",
        "Managed National Software Competition",
        "Gained expertise in SwiftUI development"
      ],
      imagePlaceholder: "Apple Developer Events"
    }
  ];

  const toggleExpand = (id) => {
    setExpandedRole(expandedRole === id ? null : id);
  };

  return (
    <div className="leadership">
      <h1>Leadership & Community Engagement</h1>
      <div className="leadership-timeline">
        {roles.map(role => (
          <div key={role.id} className="role-card">
            <div className="role-header" onClick={() => toggleExpand(role.id)}>
              <div className="role-info">
                <h3>{role.title}</h3>
                <h4>{role.organization}</h4>
                <span className="period">{role.period}</span>
              </div>
              <span className="expand-icon">
                {expandedRole === role.id ? '−' : '+'}
              </span>
            </div>
            
            {expandedRole === role.id && (
              <div className="role-details">
                <div className="role-content">
                  <div className="role-text">
                    <p>{role.description}</p>
                    <h4>Key Achievements:</h4>
                    <ul>
                      {role.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="role-image">
                    <div className="image-placeholder">
                      <span>{role.imagePlaceholder}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leadership;
