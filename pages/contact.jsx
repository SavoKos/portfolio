'use client';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare } from 'lucide-react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
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
                  className="contact-item glass"
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
                    className="social-link glass"
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
            <div className="form-container glass">
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
  );
};

const Container = styled.div`
  min-height: 100vh;
  background: #000000;
`;

const HeroSection = styled.section`
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 8rem 2rem 4rem;

  .hero-content {
    max-width: 800px;

    h1 {
      font-size: 3.5rem;
      margin: 2rem 0;
      line-height: 1.2;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 2.5rem;
      }
    }

    .hero-description {
      font-size: 1.25rem;
      line-height: 1.6;
      color: ${({ theme }) => theme.colors.textSecondary};
      margin-bottom: 2rem;
    }
  }
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(120, 119, 198, 0.1);
  border: 1px solid rgba(120, 119, 198, 0.3);
  border-radius: 50px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const ContactSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;

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
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
    }

    > p {
      font-size: 1.1rem;
      line-height: 1.7;
      color: ${({ theme }) => theme.colors.textSecondary};
      margin-bottom: 3rem;
    }
  }

  .contact-details {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 3rem;
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem;
    border-radius: 12px;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
    }

    .contact-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      border-radius: 12px;
      background: ${({ theme }) => theme.gradients.primary};
      color: white;
      flex-shrink: 0;
    }

    .contact-text {
      h4 {
        font-size: 1.1rem;
        margin-bottom: 0.25rem;
        color: ${({ theme }) => theme.colors.text};
      }

      a, span {
        color: ${({ theme }) => theme.colors.textSecondary};
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }

  .social-links {
    h4 {
      font-size: 1.2rem;
      margin-bottom: 1rem;
      color: ${({ theme }) => theme.colors.text};
    }

    .social-grid {
      display: flex;
      gap: 1rem;
    }

    .social-link {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1rem;
      border-radius: 8px;
      color: ${({ theme }) => theme.colors.textSecondary};
      text-decoration: none;
      transition: all 0.3s ease;

      &:hover {
        color: ${({ theme }) => theme.colors.text};
        background: rgba(255, 255, 255, 0.1);
      }
    }
  }

  .contact-form {
    .form-container {
      padding: 2rem;
      border-radius: 20px;

      h3 {
        font-size: 1.8rem;
        margin-bottom: 2rem;
        text-align: center;
      }
    }

    .form-group {
      margin-bottom: 1.5rem;

      label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.text};
      }

      input, textarea {
        width: 100%;
        padding: 1rem;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.05);
        color: ${({ theme }) => theme.colors.text};
        font-size: 1rem;
        transition: all 0.3s ease;

        &::placeholder {
          color: ${({ theme }) => theme.colors.textSecondary};
        }

        &:focus {
          outline: none;
          border-color: ${({ theme }) => theme.colors.primary};
          background: rgba(255, 255, 255, 0.1);
        }
      }

      textarea {
        resize: vertical;
        min-height: 120px;
      }
    }

    .submit-btn {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 1rem 2rem;
      background: ${({ theme }) => theme.gradients.primary};
      border: none;
      border-radius: 12px;
      color: white;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;

      &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 30px rgba(120, 119, 198, 0.4);
      }
    }
  }
`;

export default ContactPage; 