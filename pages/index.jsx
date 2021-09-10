import Head from 'next/head';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Contact from '../components/Contact';
import Hero from '../components/Home/Hero';
import Showcase from '../components/Home/Showcase';
import Specializing from '../components/Home/Specializing';
import Navigation from '../components/Navigation';
import ScrollToTop from '../components/ScrollToTop';

export default function Home() {
  const [intersecting, setIntersecting] = useState(false);

  useEffect(() => {
    return intersectingHandler();
  }, []);

  const intersectingHandler = () => {
    const callback = (entries, _) => {
      entries.forEach((ent) => {
        if (ent.isIntersecting) return setIntersecting(true);
        setIntersecting(false);
      });
    };

    const options = {
      root: null,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(callback, options);
    const target = document.querySelector('.hero');
    if (!target) return;

    observer.observe(target);
  };

  return (
    <S.PageContainer>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap'
          rel='stylesheet'
        />
        <title>Front-end Web Developer | Savo Kos</title>
        <link rel='shortcut icon' type='image/jpg' href='/logo.png' />
      </Head>
      <Navigation currentPage='home' />
      <Hero />
      <Specializing />
      <Showcase />
      <Contact />
      {!intersecting && <ScrollToTop />}
    </S.PageContainer>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.PageContainer = styled.div``;
