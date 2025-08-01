'use client';
import { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, Mail, Github } from 'lucide-react';
import styled from 'styled-components';

// Throttle function for scroll events
const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const router = useRouter();

  const handleScroll = useCallback(
    throttle(() => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 30);
      if (navRef.current) {
        navRef.current.style.backdropFilter = scrollY > 30 ? 'blur(12px) saturate(1.1)' : 'blur(0px)';
      }
    }, 32), // Reduced from 16ms to 32ms for better performance
    []
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const getActivePage = () => {
    const pathname = router.pathname;
    if (pathname === '/') return 'home';
    if (pathname === '/about') return 'about';
    if (pathname === '/projects') return 'projects';
    if (pathname === '/contact') return 'contact';
    return 'home';
  };
  const activePage = getActivePage();

  const navItems = [
    { href: '/', label: 'Home', icon: <Home size={18} />, id: 'home' },
    { href: '/about', label: 'About', icon: <User size={18} />, id: 'about' },
    { href: '/projects', label: 'Projects', icon: <Briefcase size={18} />, id: 'projects' },
    { href: '/contact', label: 'Contact', icon: <Mail size={18} />, id: 'contact' },
  ];
  const socialLinks = [
    { href: 'https://github.com/savokos', icon: <Github size={20} />, label: 'GitHub' },
  ];

  return (
    <NavContainer ref={navRef} $scrolled={scrolled}>
      <NavContent>
        <Logo>
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="micro-pop"
              transition={{ duration: 0.2 }}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <svg 
                width="32" 
                height="32" 
                viewBox="0 0 32 32" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
              >
                <defs>
                  <linearGradient id="navGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7877c6" stopOpacity="1" />
                    <stop offset="50%" stopColor="#ff77c6" stopOpacity="1" />
                    <stop offset="100%" stopColor="#78dbff" stopOpacity="1" />
                  </linearGradient>
                  <filter id="navGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                <rect width="32" height="32" rx="8" fill="url(#navGradient)" opacity="0.9"/>
                <rect width="30" height="30" x="1" y="1" rx="7" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"/>
                
                <text 
                  x="16" 
                  y="22" 
                  fontFamily="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
                  fontSize="12" 
                  fontWeight="800" 
                  textAnchor="middle" 
                  fill="white"
                  filter="url(#navGlow)"
                  letterSpacing="-0.5px"
                >
                  SK
                </text>
                
                <text 
                  x="16" 
                  y="21.5" 
                  fontFamily="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
                  fontSize="12" 
                  fontWeight="800" 
                  textAnchor="middle" 
                  fill="rgba(255,255,255,0.3)"
                  letterSpacing="-0.5px"
                >
                  SK
                </text>
              </svg>
            </motion.div>
          </Link>
        </Logo>
        <DesktopNav>
          {navItems.map((item) => (
            <NavItem key={item.href}>
              <Link href={item.href}>
                <motion.div
                  whileHover={{ y: -1, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`nav-link micro-fadein ${activePage === item.id ? 'active' : ''}`}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {activePage === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="active-indicator"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                </motion.div>
              </Link>
            </NavItem>
          ))}
          <SocialLinks>
            {socialLinks.map((social) => (
              <SocialLink key={social.href}>
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  <motion.div
                    whileHover={{ scale: 1.08, y: -1 }}
                    whileTap={{ scale: 0.92 }}
                    className="social-icon hover-glow micro-pop"
                    transition={{ duration: 0.2 }}
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
            transition={{ duration: 0.15 }}
            className="menu-icon"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.div>
        </MobileMenuButton>
      </NavContent>
      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            {navItems.map((item, index) => (
              <MobileNavItem key={item.href}>
                <Link href={item.href} onClick={() => setIsOpen(false)}>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ x: 5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`mobile-nav-link micro-fadein ${activePage === item.id ? 'active' : ''}`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </motion.div>
                </Link>
              </MobileNavItem>
            ))}
            <MobileSocialLinks>
              {socialLinks.map((social, index) => (
                <MobileSocialLink key={social.href}>
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: (navItems.length + index) * 0.05 }}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.92 }}
                      className="mobile-social-icon hover-glow micro-pop"
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
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(18, 18, 28, 0.82);
  box-shadow: 0 2px 24px 0 rgba(120,119,198,0.08);
  backdrop-filter: blur(12px) saturate(1.1);
  border-bottom: 1px solid rgba(255,255,255,0.06);
  transition: background 0.3s, box-shadow 0.3s, border 0.3s;
  will-change: backdrop-filter;
  transform: translateZ(0);
`;

const NavContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 1.2rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1rem;
  }
`;

const Logo = styled.div`
  font-weight: 800;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const DesktopNav = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const NavItem = styled.div`
  position: relative;
  .nav-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.85rem 1.5rem;
    border-radius: 14px;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    color: ${({ theme }) => theme.colors.textSecondary};
    font-weight: 600;
    font-size: 1.08rem;
    position: relative;
    overflow: hidden;
    background: transparent;
    will-change: transform, background, color;
    &:hover {
      color: ${({ theme }) => theme.colors.text};
      background: rgba(255,255,255,0.06);
      transform: translateY(-1px) scale(1.04);
    }
    &.active {
      color: ${({ theme }) => theme.colors.text};
      background: rgba(120,119,198,0.13);
    }
    .active-indicator {
      position: absolute;
      bottom: 8px;
      left: 50%;
      transform: translateX(-50%);
      width: 28px;
      height: 3px;
      background: linear-gradient(90deg, #7877c6 0%, #a855f7 100%);
      border-radius: 2px;
      box-shadow: 0 2px 8px #a855f7aa;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-left: 1.2rem;
  padding-left: 1.2rem;
  border-left: 1px solid rgba(255,255,255,0.08);
`;

const SocialLink = styled.div`
  .social-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background: rgba(255,255,255,0.07);
    color: ${({ theme }) => theme.colors.textSecondary};
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    backdrop-filter: blur(8px);
    will-change: transform, background, color;
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
  border-radius: 12px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(8px);
  .menu-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background: rgba(255,255,255,0.07);
    transition: all 0.2s ease;
    will-change: transform, background;
  }
  &:hover .menu-icon {
    background: rgba(255,255,255,0.13);
    transform: scale(1.03);
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
  background: rgba(18,18,28,0.98);
  backdrop-filter: blur(12px) saturate(1.1);
  border-bottom: 1px solid rgba(255,255,255,0.08);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  box-shadow: 0 10px 30px rgba(120,119,198,0.10);
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const MobileNavItem = styled.div`
  .mobile-nav-link {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.25rem;
    border-radius: 12px;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    color: ${({ theme }) => theme.colors.textSecondary};
    font-weight: 600;
    position: relative;
    overflow: hidden;
    will-change: transform, background, color;
    &:hover {
      color: ${({ theme }) => theme.colors.text};
      background: rgba(255,255,255,0.07);
      transform: translateX(5px) scale(1.04);
    }
    &.active {
      color: ${({ theme }) => theme.colors.text};
      background: rgba(120,119,198,0.13);
    }
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 3px;
      background: ${({ theme }) => theme.gradients.primary};
      transform: scaleY(0);
      transition: transform 0.2s ease;
    }
    &.active::before {
      transform: scaleY(1);
    }
  }
`;

const MobileSocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding-top: 1.5rem;
  margin-top: 1.5rem;
  border-top: 1px solid rgba(255,255,255,0.08);
`;

const MobileSocialLink = styled.div`
  .mobile-social-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: rgba(255,255,255,0.07);
    color: ${({ theme }) => theme.colors.textSecondary};
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    backdrop-filter: blur(8px);
    will-change: transform, background, color;
    &:hover {
      background: ${({ theme }) => theme.gradients.primary};
      color: white;
      box-shadow: ${({ theme }) => theme.shadows.glow};
    }
  }
`;

export default Navigation;
