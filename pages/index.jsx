'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, Code, Zap, Sparkles, Database } from 'lucide-react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import Image from 'next/image';

const HomePage = () => {
  const skills = [
    { name: 'React', icon: <Code size={20} /> },
    { name: 'Next.js', icon: <Zap size={20} /> },
    { name: 'JavaScript', icon: <Code size={20} /> },
    { name: 'TypeScript', icon: <Code size={20} /> },
    { name: 'Node.js', icon: <Zap size={20} /> },
    { name: 'MongoDB', icon: <Database size={20} /> },
    { name: 'PHP', icon: <Code size={20} /> },
    { name: 'MySQL', icon: <Database size={20} /> },
  ];

  const socialLinks = [
    { href: 'https://github.com/savokos', icon: <Github size={24} />, label: 'GitHub' },
    { href: 'https://linkedin.com/in/savokos', icon: <Linkedin size={24} />, label: 'LinkedIn' },
    { href: 'mailto:savo@savokos.com', icon: <Mail size={24} />, label: 'Email' },
  ];

  return (
    <Container>
      <Navigation />
      
      <HeroSection>
        <HeroContent>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge>
              <Sparkles size={16} />
              <span>Front-End Developer</span>
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="gradient-text gradient-animate"
          >
            Hi, I'm <span className="gradient-text-blue">Savo Kos</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-description"
          >
            I craft exceptional digital experiences with modern web technologies. 
            Passionate about creating beautiful, functional, and user-centric applications 
            that make a difference.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hero-actions"
          >
            <PrimaryButton>
              <span>View My Work</span>
              <ArrowRight size={20} />
            </PrimaryButton>
            
            <SecondaryButton>
              <Download size={20} />
              <span>Download CV</span>
            </SecondaryButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="social-links"
          >
            {socialLinks.map((social, index) => (
              <SocialLink key={social.href} href={social.href} target="_blank" rel="noopener noreferrer">
                <motion.div
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="social-icon"
                >
                  {social.icon}
                </motion.div>
              </SocialLink>
            ))}
          </motion.div>
        </HeroContent>

        <HeroVisual>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hero-image-container"
          >
            <div className="hero-image glass">
              <Image
                src="/portrait.jpg"
                alt="Savo Kos"
                width={300}
                height={400}
                className="hero-image"
              />
            </div>
            <div className="floating-card card-1 glass">
              <Code size={24} />
              <span>React</span>
            </div>
            <div className="floating-card card-2 glass">
              <Zap size={24} />
              <span>Next.js</span>
            </div>
            <div className="floating-card card-3 glass">
              <Sparkles size={24} />
              <span>Modern</span>
            </div>
          </motion.div>
        </HeroVisual>
      </HeroSection>

      <SkillsSection>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="skills-container"
        >
          <h2 className="gradient-text">Technologies I Work With</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="skill-card glass"
              >
                {skill.icon}
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </SkillsSection>

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
              <h3 className="gradient-text">13+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-card glass">
              <h3 className="gradient-text">5+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-card glass">
              <h3 className="gradient-text">100%</h3>
              <p>Client Satisfaction</p>
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
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  max-width: 1200px;
  margin: 0 auto;
  gap: 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
    padding: 2rem 1rem;
    gap: 2rem;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  z-index: 2;

  .hero-description {
    font-size: 1.25rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin: 2rem 0;
    max-width: 600px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 1.1rem;
    }
  }

  .hero-actions {
    display: flex;
    gap: 1rem;
    margin: 2rem 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      flex-direction: column;
      align-items: center;
    }
  }

  .social-links {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      justify-content: center;
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

const PrimaryButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.gradients.primary};
  border: none;
  border-radius: 12px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${({ theme }) => theme.shadows.glow};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(120, 119, 198, 0.4);
  }
`;

const SecondaryButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }
`;

const SocialLink = styled.a`
  .social-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.05);
    color: ${({ theme }) => theme.colors.textSecondary};
    transition: all 0.3s ease;

    &:hover {
      background: ${({ theme }) => theme.gradients.primary};
      color: white;
      box-shadow: ${({ theme }) => theme.shadows.glow};
    }
  }
`;

const HeroVisual = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .hero-image-container {
    position: relative;
    width: 300px;
    height: 400px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      width: 250px;
      height: 350px;
    }
  }

  .hero-image {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    object-fit: cover;
  }

  .floating-card {
    position: absolute;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    border-radius: 12px;
    font-weight: 600;
    font-size: 0.9rem;
    animation: float 6s ease-in-out infinite;

    &.card-1 {
      top: -20px;
      left: -20px;
      animation-delay: 0s;
    }

    &.card-2 {
      top: 50%;
      right: -30px;
      animation-delay: 2s;
    }

    &.card-3 {
      bottom: -20px;
      left: 20px;
      animation-delay: 4s;
    }
  }
`;

const SkillsSection = styled.section`
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;

  .skills-container {
    text-align: center;

    h2 {
      font-size: 2.5rem;
      margin-bottom: 3rem;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 2rem;
      }
    }
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1.5rem;
    max-width: 800px;
    margin: 0 auto;
  }

  .skill-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 2rem 1rem;
    border-radius: 16px;
    transition: all 0.3s ease;
    cursor: pointer;

    span {
      font-weight: 600;
      font-size: 1rem;
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

export default HomePage;
