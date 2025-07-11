'use client';
import { motion } from 'framer-motion';
import { Download, Calendar, MapPin, GraduationCap, Code, Zap, Sparkles, Award } from 'lucide-react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import Image from 'next/image';

const AboutPage = () => {
  const experiences = [
    {
      year: '2021 - Present',
      title: 'Front-End Developer',
      company: 'Freelance',
      description: 'Building modern web applications with React, Next.js, and modern JavaScript frameworks.',
      icon: <Code size={20} />
    },
    {
      year: '2020 - 2021',
      title: 'Web Development Student',
      company: 'Self-Taught',
      description: 'Intensive learning of web development technologies and best practices.',
      icon: <GraduationCap size={20} />
    }
  ];

  const skills = [
    { name: 'React', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'MongoDB', level: 70 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Git', level: 85 }
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
            <span>About Me</span>
          </Badge>
          
          <h1 className="gradient-text">
            Crafting Digital <span className="gradient-text-blue">Experiences</span>
          </h1>
          
          <p className="hero-description">
            I'm a passionate Front-End Developer from Bosnia and Herzegovina, 
            dedicated to creating exceptional web experiences that combine 
            beautiful design with powerful functionality.
          </p>
        </motion.div>
      </HeroSection>

      <AboutSection>
        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="about-content"
          >
            <h2 className="gradient-text">My Story</h2>
            <p>
              My journey in web development began when I was 16 years old, 
              when I first discovered HTML and CSS. From that moment, I was 
              captivated by the power of creating something from nothing - 
              turning ideas into interactive digital experiences.
            </p>
            <p>
              As a self-taught developer, I've spent countless hours learning, 
              experimenting, and building projects that challenge my skills and 
              push the boundaries of what's possible on the web.
            </p>
            <p>
              Today, I specialize in modern JavaScript frameworks like React and 
              Next.js, creating responsive, accessible, and performant web 
              applications that users love to interact with.
            </p>
            
            <DownloadButton>
              <Download size={20} />
              <span>Download CV</span>
            </DownloadButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="about-image"
          >
            <div className="image-container glass">
              <Image
                src="/portrait.jpg"
                alt="Savo Kos"
                width={400}
                height={500}
                className="profile-image"
              />
            </div>
          </motion.div>
        </div>
      </AboutSection>

      <ExperienceSection>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="experience-container"
        >
          <h2 className="gradient-text">Experience & Education</h2>
          
          <div className="timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="timeline-item glass"
              >
                <div className="timeline-icon">
                  {exp.icon}
                </div>
                <div className="timeline-content">
                  <div className="timeline-year">{exp.year}</div>
                  <h3>{exp.title}</h3>
                  <div className="timeline-company">{exp.company}</div>
                  <p>{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </ExperienceSection>

      <SkillsSection>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="skills-container"
        >
          <h2 className="gradient-text">Technical Skills</h2>
          
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="skill-item glass"
              >
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="skill-progress"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </SkillsSection>

      <ValuesSection>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="values-container"
        >
          <h2 className="gradient-text">What I Value</h2>
          
          <div className="values-grid">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="value-card glass"
            >
              <div className="value-icon">
                <Code size={32} />
              </div>
              <h3>Clean Code</h3>
              <p>Writing maintainable, readable, and efficient code that others can easily understand and build upon.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="value-card glass"
            >
              <div className="value-icon">
                <Zap size={32} />
              </div>
              <h3>Performance</h3>
              <p>Creating fast, responsive applications that provide smooth user experiences across all devices.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="value-card glass"
            >
              <div className="value-icon">
                <Award size={32} />
              </div>
              <h3>Quality</h3>
              <p>Delivering high-quality solutions that exceed expectations and provide real value to users.</p>
            </motion.div>
          </div>
        </motion.div>
      </ValuesSection>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  background: #000000;
`;

const HeroSection = styled.section`
  min-height: 60vh;
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

const AboutSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;

  .about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }

  .about-content {
    h2 {
      font-size: 2.5rem;
      margin-bottom: 2rem;
    }

    p {
      font-size: 1.1rem;
      line-height: 1.7;
      color: ${({ theme }) => theme.colors.textSecondary};
      margin-bottom: 1.5rem;
    }
  }

  .about-image {
    display: flex;
    justify-content: center;

    .image-container {
      position: relative;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: ${({ theme }) => theme.shadows.glass};
    }

    .profile-image {
      width: 100%;
      height: auto;
      border-radius: 20px;
    }
  }
`;

const DownloadButton = styled.button`
  display: inline-flex;
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
  margin-top: 2rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(120, 119, 198, 0.4);
  }
`;

const ExperienceSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;

  .experience-container {
    h2 {
      font-size: 2.5rem;
      text-align: center;
      margin-bottom: 3rem;
    }
  }

  .timeline {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 800px;
    margin: 0 auto;
  }

  .timeline-item {
    display: flex;
    gap: 2rem;
    padding: 2rem;
    border-radius: 16px;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      flex-direction: column;
      gap: 1rem;
    }
  }

  .timeline-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    border-radius: 12px;
    background: ${({ theme }) => theme.gradients.primary};
    color: white;
    flex-shrink: 0;
  }

  .timeline-content {
    flex: 1;

    .timeline-year {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 600;
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
    }

    h3 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    .timeline-company {
      color: ${({ theme }) => theme.colors.textSecondary};
      font-weight: 500;
      margin-bottom: 1rem;
    }

    p {
      color: ${({ theme }) => theme.colors.textSecondary};
      line-height: 1.6;
    }
  }
`;

const SkillsSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;

  .skills-container {
    h2 {
      font-size: 2.5rem;
      text-align: center;
      margin-bottom: 3rem;
    }
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    max-width: 800px;
    margin: 0 auto;
  }

  .skill-item {
    padding: 1.5rem;
    border-radius: 12px;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
    }
  }

  .skill-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    .skill-name {
      font-weight: 600;
      font-size: 1.1rem;
    }

    .skill-level {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 600;
    }
  }

  .skill-bar {
    width: 100%;
    height: 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    overflow: hidden;
  }

  .skill-progress {
    height: 100%;
    background: ${({ theme }) => theme.gradients.primary};
    border-radius: 4px;
    transition: width 1s ease;
  }
`;

const ValuesSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;

  .values-container {
    h2 {
      font-size: 2.5rem;
      text-align: center;
      margin-bottom: 3rem;
    }
  }

  .values-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .value-card {
    padding: 2rem;
    border-radius: 16px;
    text-align: center;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }

    .value-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80px;
      height: 80px;
      border-radius: 16px;
      background: ${({ theme }) => theme.gradients.primary};
      color: white;
      margin: 0 auto 1.5rem;
    }

    h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    p {
      color: ${({ theme }) => theme.colors.textSecondary};
      line-height: 1.6;
    }
  }
`;

export default AboutPage;
