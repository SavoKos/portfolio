'use client';
import { motion } from 'framer-motion';
import { Download, Calendar, MapPin, GraduationCap, Code, Zap, Sparkles, Award } from 'lucide-react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import SEO from '../components/SEO';
import SEOOptimizer from '../components/SEOOptimizer';
import Image from 'next/image';

const AboutPage = () => {
  const experiences = [
    {
      year: '2024 - Present',
      title: 'Graphic Designer & Photographer',
      company: 'Fotometro',
      description: 'Creating stunning visual content and photography for digital and print media. Specializing in brand identity, marketing materials, and professional photography.',
      icon: <Code size={20} />
    },
    {
      year: '2021 - Present',
      title: 'Full-Stack Developer',
      company: 'Freelance',
      description: 'Building modern web applications with React, Next.js, Node.js and modern JavaScript frameworks.',
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
    <>
      <SEO 
        title="About Savo Kos - Expert Front-End Developer | React, Next.js Specialist"
        description="Learn about Savo Kos - Expert Front-End Developer from Bosnia and Herzegovina. Specializing in React, Next.js, and modern web technologies with 3+ years of experience creating exceptional digital experiences."
        keywords={[
          'about savo kos',
          'front-end developer biography',
          'react developer experience',
          'next.js developer portfolio',
          'web developer bosnia',
          'prijedor web developer',
          'self-taught developer',
          'freelance web developer',
          'react.js specialist',
          'next.js specialist',
          'javascript expert',
          'typescript developer',
          'node.js developer',
          'mongodb developer',
          'web development experience',
          'front-end development skills',
          'ui/ux design experience',
          'responsive design expert',
          'performance optimization',
          'modern web technologies',
          'web development journey',
          'developer background',
          'coding experience',
          'programming skills'
        ]}
        url="/about"
        type="website"
      />
      <SEOOptimizer 
        pageType="about"
        primaryKeyword="about savo kos"
        secondaryKeywords={[
          'front-end developer biography',
          'react developer experience',
          'next.js developer portfolio',
          'web developer bosnia',
          'prijedor web developer',
          'self-taught developer',
          'freelance web developer',
          'react.js specialist',
          'next.js specialist',
          'javascript expert'
        ]}
        contentLength="long"
        targetAudience="clients"
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
  min-height: 60vh;
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
      font-size: 3.7rem;
      margin: 2rem 0;
      line-height: 1.2;
      font-weight: 800;
      letter-spacing: -1.5px;
      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 2.5rem;
      }
    }
    .hero-description {
      font-size: 1.35rem;
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

const AboutSection = styled.section`
  padding: 5rem 2rem 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  z-index: 2;
  position: relative;
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
      font-size: 2.7rem;
      margin-bottom: 2.2rem;
      font-weight: 800;
      letter-spacing: -1px;
    }
    p {
      font-size: 1.18rem;
      line-height: 1.7;
      color: ${({ theme }) => theme.colors.textSecondary};
      margin-bottom: 1.5rem;
      font-weight: 500;
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
      background: rgba(255,255,255,0.09);
      backdrop-filter: blur(18px) saturate(1.2);
      border: 1px solid rgba(255,255,255,0.10);
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
  padding: 1.1rem 2.3rem;
  background: ${({ theme }) => theme.gradients.primary};
  border: none;
  border-radius: 16px;
  color: white;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
  margin-top: 2rem;
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
`;

const ExperienceSection = styled.section`
  padding: 5rem 2rem 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  z-index: 2;
  position: relative;
  .experience-container {
    h2 {
      font-size: 2.7rem;
      text-align: center;
      margin-bottom: 3.5rem;
      font-weight: 800;
      letter-spacing: -1px;
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
    padding: 2.2rem;
    border-radius: 18px;
    transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
    background: rgba(255,255,255,0.09);
    box-shadow: 0 2px 16px 0 rgba(120,119,198,0.08);
    backdrop-filter: blur(12px);
    &:hover {
      transform: translateY(-5px) scale(1.02);
      filter: brightness(1.08);
      box-shadow: 0 10px 30px rgba(120, 119, 198, 0.13);
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
    border-radius: 14px;
    background: ${({ theme }) => theme.gradients.primary};
    color: white;
    flex-shrink: 0;
  }
  .timeline-content {
    flex: 1;
    .timeline-year {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 700;
      font-size: 1rem;
      margin-bottom: 0.5rem;
    }
    h3 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      font-weight: 700;
    }
    .timeline-company {
      color: ${({ theme }) => theme.colors.textSecondary};
      font-weight: 600;
      margin-bottom: 1rem;
    }
    p {
      color: ${({ theme }) => theme.colors.textSecondary};
      line-height: 1.6;
      font-weight: 500;
    }
  }
`;

const SkillsSection = styled.section`
  padding: 5rem 2rem 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  z-index: 2;
  position: relative;
  .skills-container {
    h2 {
      font-size: 2.7rem;
      text-align: center;
      margin-bottom: 3.5rem;
      font-weight: 800;
      letter-spacing: -1px;
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
    padding: 1.8rem;
    border-radius: 16px;
    transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
    background: rgba(255,255,255,0.09);
    box-shadow: 0 2px 16px 0 rgba(120,119,198,0.08);
    backdrop-filter: blur(12px);
    &:hover {
      transform: translateY(-3px) scale(1.02);
      filter: brightness(1.08);
      box-shadow: 0 10px 30px rgba(120, 119, 198, 0.13);
    }
  }
  .skill-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    .skill-name {
      font-weight: 700;
      font-size: 1.1rem;
    }
    .skill-level {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 700;
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
  padding: 5rem 2rem 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  z-index: 2;
  position: relative;
  .values-container {
    h2 {
      font-size: 2.7rem;
      text-align: center;
      margin-bottom: 3.5rem;
      font-weight: 800;
      letter-spacing: -1px;
    }
  }
  .values-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2.5rem;
  }
  .value-card {
    padding: 2.5rem;
    border-radius: 18px;
    text-align: center;
    transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
    background: rgba(255,255,255,0.09);
    box-shadow: 0 2px 16px 0 rgba(120,119,198,0.08);
    backdrop-filter: blur(12px);
    &:hover {
      transform: translateY(-5px) scale(1.03);
      filter: brightness(1.08);
      box-shadow: 0 10px 30px rgba(120, 119, 198, 0.13);
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
      font-weight: 700;
    }
    p {
      color: ${({ theme }) => theme.colors.textSecondary};
      line-height: 1.6;
      font-weight: 500;
    }
  }
`;

export default AboutPage;
