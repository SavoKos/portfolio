'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Mail, Code, Zap, Sparkles, Database, Globe, Smartphone, Palette } from 'lucide-react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Navigation from '../components/Navigation';
import SEO from '../components/SEO';
import SEOOptimizer from '../components/SEOOptimizer';
import Image from 'next/image';

const HomePage = () => {
  const router = useRouter();
  
  const handleViewWork = () => {
    router.push('/projects');
  };
  
  const handleDownloadCV = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = '/CV.pdf';
    link.download = 'Savo_Kos_CV.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  const handleGetInTouch = () => {
    router.push('/contact');
  };
  
  const skills = [
    { name: 'React', icon: <Code size={20} /> },
    { name: 'Next.js', icon: <Zap size={20} /> },
    { name: 'JavaScript', icon: <Code size={20} /> },
    { name: 'TypeScript', icon: <Code size={20} /> },
    { name: 'Node.js', icon: <Zap size={20} /> },
    { name: 'MongoDB', icon: <Database size={20} /> },
    { name: 'PHP', icon: <Code size={20} /> },
    { name: 'MySQL', icon: <Database size={20} /> },
    { name: 'Tailwind', icon: <Palette size={20} /> },
    { name: 'Vercel', icon: <Globe size={20} /> },
    { name: 'Git', icon: <Code size={20} /> },
    { name: 'Bootstrap', icon: <Palette size={20} /> },
  ];

  const services = [
    {
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies like React, Next.js, and Node.js.',
      icon: <Globe size={32} />,
      features: ['Responsive Design', 'Performance Optimized', 'SEO Friendly']
    },
    {
      title: 'Mobile-First Design',
      description: 'Beautiful, responsive designs that work perfectly on all devices and screen sizes.',
      icon: <Smartphone size={32} />,
      features: ['Mobile Optimized', 'Touch Friendly', 'Cross-Platform']
    },
    {
      title: 'UI/UX Design',
      description: 'Intuitive user interfaces and exceptional user experiences that delight users.',
      icon: <Palette size={32} />,
      features: ['User-Centered', 'Accessible', 'Modern Aesthetics']
    }
  ];

  const socialLinks = [
    { href: 'https://github.com/savokos', icon: <Github size={24} />, label: 'GitHub' },
    { href: 'mailto:savo.kos.sk@gmail.com', icon: <Mail size={24} />, label: 'Email' },
  ];

  // Optimized animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardHover = {
    hover: { 
      y: -5, 
      scale: 1.02,
      transition: { duration: 0.2, ease: "easeOut" }
    }
  };

  return (
    <>
      <SEO 
        title="Expert Front-End Developer | React, Next.js, Modern Web Development"
        description="Hire Savo Kos - Expert Front-End Developer specializing in React, Next.js, and modern web technologies. Creating exceptional digital experiences with cutting-edge web development solutions. 100% client satisfaction guaranteed."
        keywords={[
          'front-end developer',
          'react developer',
          'next.js developer', 
          'web developer',
          'javascript developer',
          'typescript developer',
          'ui/ux developer',
          'responsive web design',
          'modern web development',
          'hire web developer',
          'freelance web developer',
          'react.js development',
          'next.js development',
          'node.js development',
          'mongodb development',
          'express.js development',
          'tailwind css development',
          'styled-components development',
          'web performance optimization',
          'seo optimization',
          'mobile-first design',
          'progressive web apps',
          'frontend development services',
          'web application development',
          'custom web development',
          'e-commerce development',
          'food delivery platform',
          'gaming platform development',
          'movie discovery platform',
          'banking application development',
          'restaurant website development',
          'plant e-commerce platform',
          'bosnia and herzegovina web developer',
          'prijedor web developer'
        ]}
        url="/"
        type="website"
      />
      <SEOOptimizer 
        pageType="home"
        primaryKeyword="front-end developer"
        secondaryKeywords={[
          'react developer',
          'next.js developer',
          'web developer',
          'javascript developer',
          'typescript developer',
          'ui/ux developer',
          'responsive web design',
          'modern web development',
          'hire web developer',
          'freelance web developer'
        ]}
        contentLength="long"
        targetAudience="businesses"
      />
      <Container>
        <Navigation />
      
      <HeroSection>
        <HeroContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge>
              <Sparkles size={16} />
              <span>Front-End Developer</span>
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="gradient-text gradient-animate"
            style={{ fontSize: '4rem', fontWeight: 800, letterSpacing: '-2px', lineHeight: 1.1 }}
          >
            Expert <span className="gradient-text-blue">Front-End Developer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-description"
            style={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.85)', maxWidth: 700, margin: '0 auto', marginBottom: 32 }}
          >
            Specializing in <strong>React, Next.js, and modern web technologies</strong>.<br />
            Creating exceptional digital experiences with cutting-edge web development solutions that drive results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hero-actions"
            style={{ justifyContent: 'center' }}
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
              <PrimaryButton onClick={handleViewWork}>
                <span>View My Work</span>
                <ArrowRight size={20} />
              </PrimaryButton>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
              <SecondaryButton onClick={handleDownloadCV}>
                <Download size={20} />
                <span>Download CV</span>
              </SecondaryButton>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="social-links"
            style={{ justifyContent: 'center' }}
          >
            {socialLinks.map((social, index) => (
              <SocialLink key={social.href} href={social.href} target="_blank" rel="noopener noreferrer">
                <motion.div
                  whileHover={{ scale: 1.08, y: -1 }}
                  whileTap={{ scale: 0.92 }}
                  className="social-icon"
                  transition={{ duration: 0.2 }}
                >
                  {social.icon}
                </motion.div>
              </SocialLink>
            ))}
          </motion.div>
        </HeroContent>
      </HeroSection>

      <ServicesSection>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="services-container"
        >
          <h2 className="gradient-text">Professional Web Development Services</h2>
          <p className="services-subtitle">Comprehensive front-end development solutions with React, Next.js, and modern web technologies</p>
          <motion.div 
            className="services-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
          >
            {services.map((service, index) => (
                              <motion.div
                  key={service.title}
                  variants={fadeInUp}
                  whileHover="hover"
                  className="service-card glass"
                >
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </ServicesSection>

      <SkillsSection>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="skills-container"
        >
          <h2 className="gradient-text">Expert Front-End Technologies</h2>
          <motion.div 
            className="skills-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
          >
            {skills.map((skill, index) => (
                              <motion.div
                  key={skill.name}
                  variants={fadeInUp}
                  whileHover="hover"
                  className="skill-card glass"
                >
                {skill.icon}
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SkillsSection>

      <StatsSection>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="stats-container"
        >
          <div className="stats-grid">
            <div className="stat-card glass">
              <h3 className="gradient-text">6</h3>
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

      <CTASection>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="cta-container"
        >
          <h2 className="gradient-text">Ready to Hire an Expert Front-End Developer?</h2>
          <p>Let's work together to bring your vision to life with cutting-edge React, Next.js, and modern web technologies. Get a professional web development solution that drives results.</p>
          <div className="cta-buttons">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
              <PrimaryButton onClick={handleGetInTouch}>
                <span>Get In Touch</span>
                <Mail size={20} />
              </PrimaryButton>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
              <SecondaryButton onClick={handleViewWork}>
                <span>View Portfolio</span>
                <ArrowRight size={20} />
              </SecondaryButton>
            </motion.div>
          </div>
        </motion.div>
      </CTASection>
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
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 8rem 2rem 4rem;
  max-width: 100vw;
  overflow: hidden;
  z-index: 1;
  background: transparent;
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
    opacity: 0.18;
    filter: blur(60px) saturate(1.1);
    z-index: 0;
    pointer-events: none;
    animation: bgGradientMove 20s ease-in-out infinite alternate;
    will-change: transform;
  }
`;

const HeroContent = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  gap: 2.5rem;
  position: relative;
  .hero-actions {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    margin: 2.5rem 0 0 0;
    justify-content: center;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
  }
  .social-links {
    display: flex;
    gap: 1.2rem;
    margin-top: 2.5rem;
    justify-content: center;
  }
  .hero-description {
    margin-top: 1.5rem;
    margin-bottom: 0;
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

const PrimaryButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1.1rem 2.3rem;
  background: ${({ theme }) => theme.gradients.primary};
  border: none;
  border-radius: 16px;
  color: white;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4,0,0.2,1);
  box-shadow: ${({ theme }) => theme.shadows.glow};
  font-family: inherit;
  font-size: 1.15rem;
  letter-spacing: 0.5px;
  position: relative;
  overflow: hidden;
  will-change: transform, box-shadow, filter;
  &:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 10px 30px rgba(120, 119, 198, 0.4);
    filter: brightness(1.05);
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

const SecondaryButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1.1rem 2.3rem;
  background: rgba(255,255,255,0.04);
  border: 1.5px solid rgba(255, 255, 255, 0.18);
  border-radius: 16px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4,0,0.2,1);
  font-family: inherit;
  font-size: 1.15rem;
  letter-spacing: 0.5px;
  position: relative;
  overflow: hidden;
  will-change: transform, background, border-color, filter;
  &:hover {
    background: rgba(255,255,255,0.09);
    border-color: rgba(255,255,255,0.3);
    transform: translateY(-2px) scale(1.02);
    filter: brightness(1.05);
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

const SocialLink = styled.a`
  .social-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.07);
    color: ${({ theme }) => theme.colors.textSecondary};
    transition: all 0.2s cubic-bezier(0.4,0,0.2,1);
    box-shadow: 0 2px 12px 0 rgba(120,119,198,0.08);
    backdrop-filter: blur(8px);
    will-change: transform, background, color, box-shadow, filter;
    &:hover {
      background: ${({ theme }) => theme.gradients.primary};
      color: white;
      box-shadow: ${({ theme }) => theme.shadows.glow};
      filter: brightness(1.05);
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
    animation: float 8s ease-in-out infinite;

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

const ServicesSection = styled.section`
  padding: 7rem 2rem 6rem 2rem;
  width: 100vw;
  margin: 0;
  left: 50%;
  right: 50%;
  position: relative;
  transform: translateX(-50%);
  z-index: 2;
  background: transparent;
  .services-container {
    text-align: center;
    max-width: 1200px;
    margin: 0 auto;
    h2 {
      font-size: 2.7rem;
      margin-bottom: 1rem;
      font-weight: 800;
      letter-spacing: -1px;
      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 2.1rem;
      }
    }
    .services-subtitle {
      font-size: 1.2rem;
      color: ${({ theme }) => theme.colors.textSecondary};
      margin-bottom: 4rem;
      font-weight: 500;
    }
  }
  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2.5rem;
  }
  .service-card {
    padding: 2.5rem 2rem;
    border-radius: 20px;
    text-align: center;
    transition: all 0.2s cubic-bezier(0.4,0,0.2,1);
    background: rgba(255,255,255,0.09);
    box-shadow: 0 2px 16px 0 rgba(120,119,198,0.08);
    backdrop-filter: blur(12px);
    will-change: transform, filter, box-shadow;
    .service-icon {
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
      margin-bottom: 1.5rem;
      font-weight: 500;
    }
    .service-features {
      list-style: none;
      padding: 0;
      li {
        color: ${({ theme }) => theme.colors.textSecondary};
        margin-bottom: 0.5rem;
        font-weight: 500;
        &:before {
          content: '✓';
          color: ${({ theme }) => theme.colors.primary};
          font-weight: bold;
          margin-right: 0.5rem;
        }
      }
    }
    &:hover {
      transform: translateY(-5px) scale(1.02);
      filter: brightness(1.05);
      box-shadow: 0 10px 30px rgba(120, 119, 198, 0.13);
    }
  }
`;

const CTASection = styled.section`
  padding: 7rem 2rem 6rem 2rem;
  width: 100vw;
  margin: 0;
  left: 50%;
  right: 50%;
  position: relative;
  transform: translateX(-50%);
  z-index: 2;
  background: transparent;
  .cta-container {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
    h2 {
      font-size: 3rem;
      margin-bottom: 1.5rem;
      font-weight: 800;
      letter-spacing: -1px;
      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 2.2rem;
      }
    }
    p {
      font-size: 1.3rem;
      color: ${({ theme }) => theme.colors.textSecondary};
      margin-bottom: 3rem;
      font-weight: 500;
      line-height: 1.6;
    }
    .cta-buttons {
      display: flex;
      gap: 1.5rem;
      justify-content: center;
      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        flex-direction: column;
        align-items: center;
      }
    }
  }
`;

const SkillsSection = styled.section`
  padding: 7rem 2rem 6rem 2rem;
  width: 100vw;
  margin: 0;
  left: 50%;
  right: 50%;
  position: relative;
  transform: translateX(-50%);
  z-index: 2;
  background: transparent;
  .skills-container {
    text-align: center;
    h2 {
      font-size: 2.7rem;
      margin-bottom: 3.5rem;
      font-weight: 800;
      letter-spacing: -1px;
      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 2.1rem;
      }
    }
  }
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 2rem;
    max-width: 1400px;
    margin: 0 auto;
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  .skill-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    padding: 2.2rem 1.2rem;
    border-radius: 18px;
    transition: all 0.2s cubic-bezier(0.4,0,0.2,1);
    cursor: pointer;
    background: rgba(255,255,255,0.09);
    box-shadow: 0 2px 16px 0 rgba(120,119,198,0.08);
    backdrop-filter: blur(12px);
    will-change: transform, filter, box-shadow;
    span {
      font-weight: 700;
      font-size: 1.08rem;
      letter-spacing: 0.2px;
    }
    &:hover {
      transform: translateY(-3px) scale(1.03);
      filter: brightness(1.05);
      box-shadow: 0 10px 30px rgba(120, 119, 198, 0.13);
    }
  }
`;

const StatsSection = styled.section`
  padding: 5rem 2rem 4rem 2rem;
  width: 100vw;
  margin: 0;
  left: 50%;
  right: 50%;
  position: relative;
  transform: translateX(-50%);
  z-index: 2;
  background: transparent;
  .stats-container {
    .stats-grid {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
      max-width: 1400px;
      margin: 0 auto;
      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        flex-wrap: wrap;
        justify-content: center;
      }
    }
    .stat-card {
      text-align: center;
      padding: 2.5rem 1.5rem;
      border-radius: 18px;
      transition: all 0.2s cubic-bezier(0.4,0,0.2,1);
      background: rgba(255,255,255,0.09);
      box-shadow: 0 2px 16px 0 rgba(120,119,198,0.08);
      backdrop-filter: blur(12px);
      flex: 1;
      min-width: 200px;
      will-change: transform, filter, box-shadow;
      h3 {
        font-size: 3.2rem;
        font-weight: 800;
        margin-bottom: 0.7rem;
        letter-spacing: -1px;
      }
      p {
        color: ${({ theme }) => theme.colors.textSecondary};
        font-size: 1.18rem;
        font-weight: 600;
      }
      &:hover {
        transform: translateY(-3px) scale(1.03);
        filter: brightness(1.05);
        box-shadow: 0 10px 30px rgba(120, 119, 198, 0.13);
      }
    }
  }
`;

export default HomePage;
