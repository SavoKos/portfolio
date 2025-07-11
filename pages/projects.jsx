'use client';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Code, Zap, Sparkles, Globe, Database } from 'lucide-react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import Image from 'next/image';

const ProjectsPage = () => {
  const projects = [
    {
      title: 'Kobalt',
      description: 'A comprehensive food delivery platform with full e-commerce functionality, user authentication, admin panel, and payment processing.',
      image: '/kobalt.png',
      liveUrl: 'https://kobalt.savokos.com',
      githubUrl: 'https://github.com/savokos/kobalt',
      technologies: ['NextJS', 'NodeJS', 'MongoDB', 'Express'],
      features: [
        'User authentication & authorization',
        'Food ordering & cart management',
        'Admin panel for restaurant management',
        'Payment processing integration',
        'Order tracking & history',
        'Review & rating system'
      ],
      icon: <Database size={24} />
    },
    {
      title: 'Game Portal',
      description: 'A comprehensive gaming discovery platform with over 245,000 game titles, advanced filtering, and detailed game information.',
      image: '/game-portal.png',
      liveUrl: 'https://gameportal.savokos.com',
      githubUrl: 'https://github.com/savokos/game-portal',
      technologies: ['React', 'NextJS', 'API Integration'],
      features: [
        'Browse 245,000+ game titles',
        'Advanced filtering & search',
        'Detailed game information',
        'Store integration',
        'Similar games recommendations',
        'Responsive design'
      ],
      icon: <Globe size={24} />
    },
    {
      title: 'Movie Geek',
      description: 'A movie and TV show discovery platform with comprehensive information, ratings, and upcoming releases.',
      image: '/moviegeek.png',
      liveUrl: 'https://moviegeek.savokos.com',
      githubUrl: 'https://github.com/savokos/moviegeek',
      technologies: ['JavaScript', 'HTML', 'CSS', 'API'],
      features: [
        'Movie & TV show database',
        'Upcoming releases tracking',
        'Detailed information pages',
        'Search & filtering',
        'Responsive design',
        'Modern UI/UX'
      ],
      icon: <Code size={24} />
    },
    {
      title: 'Greenery',
      description: 'An e-commerce platform for plants with advanced shopping features, user accounts, and secure checkout.',
      image: '/greenery.png',
      liveUrl: 'https://greenery.savokos.com',
      githubUrl: 'https://github.com/savokos/greenery',
      technologies: ['React', 'NextJS', 'Redux', 'Firebase'],
      features: [
        'E-commerce functionality',
        'User authentication',
        'Shopping cart & wishlist',
        'Product filtering',
        'Secure checkout',
        'Order management'
      ],
      icon: <Zap size={24} />
    },
    {
      title: 'Excellence',
      description: 'A comprehensive banking application for managing credit cards, transactions, and financial goals.',
      image: '/excellence.png',
      liveUrl: 'https://excellence.savokos.com',
      githubUrl: 'https://github.com/savokos/excellence',
      technologies: ['React', 'NextJS', 'Firebase'],
      features: [
        'Credit card management',
        'Transaction tracking',
        'Money transfers',
        'Investment goals',
        'Loan applications',
        'Financial analytics'
      ],
      icon: <Sparkles size={24} />
    },
    {
      title: 'Tasty',
      description: 'A modern restaurant website with beautiful design, responsive layout, and dark/light mode functionality.',
      image: '/tasty.png',
      liveUrl: 'https://tasty.savokos.com',
      githubUrl: 'https://github.com/savokos/tasty',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      features: [
        'Responsive design',
        'Dark/light mode',
        'Modern UI/UX',
        'Menu showcase',
        'Contact integration',
        'Mobile-friendly'
      ],
      icon: <Code size={24} />
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
            <Sparkles size={16} />
            <span>My Work</span>
          </Badge>
          
          <h1 className="gradient-text">
            Featured <span className="gradient-text-blue">Projects</span>
          </h1>
          
          <p className="hero-description">
            A collection of my latest work showcasing modern web development, 
            innovative design, and cutting-edge technologies.
          </p>
        </motion.div>
      </HeroSection>

      <ProjectsSection>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="project-card glass"
            >
              <div className="project-image">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="project-img"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="project-link"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </motion.a>
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="project-link"
                      >
                        <Github size={20} />
                        <span>Code</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <div className="project-icon">
                    {project.icon}
                  </div>
                  <h3 className="gradient-text">{project.title}</h3>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-cta"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>View Project</span>
                  <ArrowRight size={20} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </ProjectsSection>

      <StatsSection>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="stats-container"
        >
          <div className="stats-grid">
            <div className="stat-card glass">
              <h3 className="gradient-text">{projects.length}</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-card glass">
              <h3 className="gradient-text">100%</h3>
              <p>Client Satisfaction</p>
            </div>
            <div className="stat-card glass">
              <h3 className="gradient-text">3+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-card glass">
              <h3 className="gradient-text">15+</h3>
              <p>Technologies Used</p>
            </div>
          </div>
        </motion.div>
      </StatsSection>
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

const ProjectsSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1400px;
  margin: 0 auto;

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 2rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      grid-template-columns: 1fr;
    }
  }
`;

const StatsSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;

  .stats-container {
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
    }

    .stat-card {
      text-align: center;
      padding: 2rem;
      border-radius: 16px;
      transition: all 0.3s ease;

      h3 {
        font-size: 3rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
      }

      p {
        color: ${({ theme }) => theme.colors.textSecondary};
        font-size: 1.1rem;
      }
    }
  }
`;

// Add these styles to the existing styled components
const projectCardStyles = `
  .project-card {
    border-radius: 20px;
    overflow: hidden;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(120, 119, 198, 0.2);
    }
  }

  .project-image {
    position: relative;
    overflow: hidden;
    height: 250px;

    .project-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .project-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;

      .project-links {
        display: flex;
        gap: 1rem;
      }

      .project-link {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.75rem 1.5rem;
        background: ${({ theme }) => theme.gradients.primary};
        color: white;
        border-radius: 8px;
        font-weight: 600;
        transition: all 0.3s ease;

        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(120, 119, 198, 0.4);
        }
      }
    }

    &:hover .project-overlay {
      opacity: 1;
    }

    &:hover .project-img {
      transform: scale(1.1);
    }
  }

  .project-content {
    padding: 2rem;

    .project-header {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1rem;

      .project-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        border-radius: 12px;
        background: ${({ theme }) => theme.gradients.primary};
        color: white;
      }

      h3 {
        font-size: 1.5rem;
        font-weight: 700;
      }
    }

    .project-description {
      color: ${({ theme }) => theme.colors.textSecondary};
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .project-technologies {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1.5rem;

      .tech-tag {
        padding: 0.25rem 0.75rem;
        background: rgba(120, 119, 198, 0.1);
        border: 1px solid rgba(120, 119, 198, 0.3);
        border-radius: 20px;
        font-size: 0.8rem;
        color: ${({ theme }) => theme.colors.primary};
        font-weight: 500;
      }
    }

    .project-features {
      margin-bottom: 2rem;

      h4 {
        font-size: 1.1rem;
        margin-bottom: 0.75rem;
        color: ${({ theme }) => theme.colors.text};
      }

      ul {
        list-style: none;
        padding: 0;

        li {
          color: ${({ theme }) => theme.colors.textSecondary};
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
          padding-left: 1rem;
          position: relative;

          &:before {
            content: '•';
            color: ${({ theme }) => theme.colors.primary};
            position: absolute;
            left: 0;
          }
        }
      }
    }

    .project-cta {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 600;
      transition: all 0.3s ease;

      &:hover {
        color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }
`;

// Apply the project card styles
const ProjectCard = styled.div`
  ${projectCardStyles}
`;

export default ProjectsPage;
