'use client';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare } from 'lucide-react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import SEO from '../components/SEO';
import SEOOptimizer from '../components/SEOOptimizer';
import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Thank you for your message! I will get back to you soon.');
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'savo@savokos.com',
      link: 'mailto:savo@savokos.com'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+387 60 123 4567',
      link: 'tel:+387601234567'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Prijedor, Bosnia & Herzegovina',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      title: 'GitHub',
      url: 'https://github.com/savokos',
      color: '#333'
    },
    {
      icon: <Linkedin size={24} />,
      title: 'LinkedIn',
      url: 'https://linkedin.com/in/savokos',
      color: '#0077b5'
    }
  ];

  return (
    <>
      <SEO 
        title="Contact Savo Kos - Expert Front-End Developer | Hire Me for Your Project"
        description="Contact Savo Kos - Expert Front-End Developer specializing in React, Next.js, and modern web technologies. Get in touch for professional web development services, project inquiries, and collaboration opportunities."
        keywords={[
          'contact savo kos',
          'hire front-end developer',
          'react developer contact',
          'next.js developer contact',
          'web developer contact',
          'freelance web developer',
          'hire web developer',
          'web development services',
          'react development services',
          'next.js development services',
          'front-end development contact',
          'web application development',
          'custom web development',
          'responsive web design',
          'modern web technologies',
          'web development consultation',
          'project inquiry',
          'developer collaboration',
          'web development quote',
          'front-end development quote',
          'react development quote',
          'next.js development quote',
          'web developer bosnia',
          'prijedor web developer',
          'bosnia and herzegovina web developer'
        ]}
        url="/contact"
        type="website"
      />
      <SEOOptimizer 
        pageType="contact"
        primaryKeyword="contact savo kos"
        secondaryKeywords={[
          'hire front-end developer',
          'react developer contact',
          'next.js developer contact',
          'web developer contact',
          'freelance web developer',
          'hire web developer',
          'web development services',
          'react development services',
          'next.js development services',
          'front-end development contact'
        ]}
        contentLength="medium"
        targetAudience="businesses"
      />
      <Container>
        <Navigation />
      
      <HeroSection>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <Badge>
            <MessageSquare size={16} />
            <span>Get In Touch</span>
          </Badge>
          
          <h1 className="gradient-text">
            Let's Work <span className="gradient-text-blue">Together</span>
          </h1>
          
          <p className="hero-description">
            I'm always open to discussing new projects, creative ideas, 
            or opportunities to be part of your visions.
          </p>
        </motion.div>
      </HeroSection>

      <ContactSection>
        <div className="contact-grid">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="contact-info"
          >
            <h2 className="gradient-text">Get In Touch</h2>
            <p>
              Ready to start your next project? I'd love to hear about it. 
              Send me a message and I'll respond as soon as possible.
            </p>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="contact-item"
                >
                  <div className="contact-icon">
                    {info.icon}
                  </div>
                  <div className="contact-text">
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} target={info.link.startsWith('mailto:') ? undefined : '_blank'} rel="noopener noreferrer">
                        {info.value}
                      </a>
                    ) : (
                      <span>{info.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-grid">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.title}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="social-link"
                  >
                    {social.icon}
                    <span>{social.title}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="contact-form"
          >
            <div className="form-container">
              <h3 className="gradient-text">Send Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="Project inquiry"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </ContactSection>
    </Container>
    </>
  );
};

const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: #000;
  overflow-x: hidden;
  position: relative;
  font-family: 'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`;

const HeroSection = styled.section`
  min-height: 50vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 8rem 2rem 4rem;
  background: transparent;
  position: relative;
  z-index: 1;
  &::before {
    content: '';
    position: absolute;
    top: -20%;
    left: -10%;
    width: 120vw;
    height: 120vh;
    background: radial-gradient(circle at 60% 40%, #7877c6 0%, transparent 70%),
      radial-gradient(circle at 30% 80%, #ff77c6 0%, transparent 70%),
      radial-gradient(circle at 80% 20%, #78dbff 0%, transparent 70%);
    opacity: 0.22;
    filter: blur(80px) saturate(1.2);
    z-index: 0;
    pointer-events: none;
    animation: bgGradientMove 18s ease-in-out infinite alternate;
  }
  .hero-content {
    max-width: 800px;
    z-index: 2;
    position: relative;
    h1 {
      font-size: 3.5rem;
      margin: 2rem 0;
      line-height: 1.2;
      font-weight: 800;
      letter-spacing: -1.5px;
      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 2.5rem;
      }
    }
    .hero-description {
      font-size: 1.25rem;
      line-height: 1.6;
      color: ${({ theme }) => theme.colors.textSecondary};
      margin-bottom: 2rem;
      font-weight: 500;
    }
  }
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(120, 119, 198, 0.13);
  border: 1px solid rgba(120, 119, 198, 0.3);
  border-radius: 50px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  box-shadow: 0 2px 16px 0 rgba(120,119,198,0.08);
  letter-spacing: 0.5px;
  backdrop-filter: blur(8px);
`;

const ContactSection = styled.section`
    .social-grid{
      display: flex;
      flex-direction: column;
    }

  padding: 5rem 2rem 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  z-index: 2;
  position: relative;
  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }
  .contact-info {
    h2 {
      font-size: 2.7rem;
      margin-bottom: 2.2rem;
      font-weight: 800;
      letter-spacing: -1px;
    }
    > p {
      font-size: 1.18rem;
      line-height: 1.7;
      color: ${({ theme }) => theme.colors.textSecondary};
      margin-bottom: 3rem;
      font-weight: 500;
    }
  }
  .contact-details {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 3rem;


  }
  .contact-form {
    background: rgba(255,255,255,0.09);
    box-shadow: 0 2px 16px 0 rgba(120,119,198,0.08);
    backdrop-filter: blur(14px);
    border-radius: 18px;
    padding: 2.5rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      padding: 1.5rem 1rem;
    }
    .form-container {
      h3 {
        font-size: 1.8rem;
        margin-bottom: 2rem;
        font-weight: 700;
        text-align: center;
      }
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      label {
        font-weight: 600;
        font-size: 1rem;
        color: ${({ theme }) => theme.colors.textSecondary};
        margin-bottom: 0.3rem;
      }
    }
    input, textarea {
      width: 100%;
      padding: 1rem;
      border-radius: 10px;
      border: 1.5px solid rgba(255,255,255,0.13);
      background: rgba(255,255,255,0.04);
      color: #fff;
      font-size: 1.08rem;
      font-family: inherit;
      font-weight: 500;
      transition: border 0.3s cubic-bezier(0.4,0,0.2,1);
      &:focus {
        border-color: #a855f7;
        outline: none;
      }
    }
    button {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 1.1rem 2.3rem;
      background: ${({ theme }) => theme.gradients.primary};
      border: none;
      border-radius: 16px;
      color: white;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
      font-family: inherit;
      font-size: 1.15rem;
      letter-spacing: 0.5px;
      position: relative;
      overflow: hidden;
      &:hover {
        transform: translateY(-2px) scale(1.04);
        box-shadow: 0 10px 30px rgba(120, 119, 198, 0.4);
        filter: brightness(1.08);
      }
      &::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(120deg,rgba(255,255,255,0.08),rgba(120,119,198,0.08));
        opacity: 0.5;
        pointer-events: none;
        border-radius: 16px;
      }
    }
  }
`;

export default ContactPage; 