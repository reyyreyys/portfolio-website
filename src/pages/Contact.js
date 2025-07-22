import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact">
      <h1>Get In Touch</h1>
      <div className="contact-content">
        <div className="contact-info">
          <h2>Let's Connect</h2>
          <p>
            I'm always open to discussing new opportunities, collaborations, 
            or interesting projects. Feel free to reach out!
          </p>
          
          <div className="contact-links">
            <div className="contact-item">
              <strong>LinkedIn:</strong> 
              <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/reyes-ng
              </a>
            </div>
            <div className="contact-item">
              <strong>Website:</strong> 
              <a href="https://your-website.com" target="_blank" rel="noopener noreferrer">
                your-portfolio-site.com
              </a>
            </div>
            <div className="contact-item">
              <strong>Location:</strong> Singapore
            </div>
          </div>

          <div className="profile-image">
            <div className="image-placeholder">
              <span>Professional Photo</span>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
