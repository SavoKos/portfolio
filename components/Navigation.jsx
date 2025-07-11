'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Home, User, Briefcase, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import styled from 'styled-components';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home', icon: <Home size={18} /> },
    { href: '/about', label: 'About', icon: <User size={18} /> },
    { href: '/projects', label: 'Projects', icon: <Briefcase size={18} /> },
    { href: '/contact', label: 'Contact', icon: <Mail size={18} /> },
  ];

  const socialLinks = [
    { href: 'https://github.com/savokos', icon: <Github size={20} />, label: 'GitHub' },
    { href: 'https://linkedin.com/in/savokos', icon: <Linkedin size={20} />, label: 'LinkedIn' },
  ];

  return (
    <NavContainer scrolled={scrolled}>
      <NavContent>
        <Logo>
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="gradient-text"
              style={{ fontSize: '1.5rem', fontWeight: '700' }}
            >
              Savo Kos
            </motion.div>
          </Link>
        </Logo>

        <DesktopNav>
          {navItems.map((item) => (
            <NavItem key={item.href}>
              <Link href={item.href}>
                <motion.div
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="nav-link"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </motion.div>
              </Link>
            </NavItem>
          ))}
          
          <SocialLinks>
            {socialLinks.map((social) => (
              <SocialLink key={social.href}>
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  <motion.div
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="social-icon"
                  >
                    {social.icon}
                  </motion.div>
                </a>
              </SocialLink>
            ))}
          </SocialLinks>
        </DesktopNav>

        <MobileMenuButton onClick={() => setIsOpen(!isOpen)}>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.div>
        </MobileMenuButton>
      </NavContent>

      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {navItems.map((item) => (
              <MobileNavItem key={item.href}>
                <Link href={item.href} onClick={() => setIsOpen(false)}>
                  <motion.div
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                    className="mobile-nav-link"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </motion.div>
                </Link>
              </MobileNavItem>
            ))}
            
            <MobileSocialLinks>
              {socialLinks.map((social) => (
                <MobileSocialLink key={social.href}>
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="mobile-social-icon"
                    >
                      {social.icon}
                    </motion.div>
                  </a>
                </MobileSocialLink>
              ))}
            </MobileSocialLinks>
          </MobileMenu>
        )}
      </AnimatePresence>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  background: ${({ scrolled }) => 
    scrolled 
      ? 'rgba(0, 0, 0, 0.8)' 
      : 'transparent'
  };
  backdrop-filter: ${({ scrolled }) => 
    scrolled 
      ? 'blur(20px)' 
      : 'none'
  };
  border-bottom: ${({ scrolled }) => 
    scrolled 
      ? '1px solid rgba(255, 255, 255, 0.1)' 
      : 'none'
  };
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1rem;
  }
`;

const Logo = styled.div`
  font-weight: 700;
  cursor: pointer;
`;

const DesktopNav = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const NavItem = styled.div`
  .nav-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    transition: all 0.3s ease;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-weight: 500;

    &:hover {
      color: ${({ theme }) => theme.colors.text};
      background: rgba(255, 255, 255, 0.05);
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: 1rem;
  padding-left: 1rem;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
`;

const SocialLink = styled.div`
  .social-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 8px;
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

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const MobileNavItem = styled.div`
  .mobile-nav-link {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    border-radius: 8px;
    transition: all 0.3s ease;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-weight: 500;

    &:hover {
      color: ${({ theme }) => theme.colors.text};
      background: rgba(255, 255, 255, 0.05);
    }
  }
`;

const MobileSocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-top: 1rem;
  margin-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const MobileSocialLink = styled.div`
  .mobile-social-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 8px;
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

export default Navigation;
