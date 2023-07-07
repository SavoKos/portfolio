import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Contact from '../components/Contact';
import Hero from '../components/Home/Hero';
import Showcase from '../components/Home/Showcase';
import Specializing from '../components/Home/Specializing';
import Navigation from '../components/Navigation';
import ScrollToTop from '../components/ScrollToTop';
import Head from 'next/head';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  const [intersecting, setIntersecting] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000 });
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
        <title>Savo Kos | Front-end Web Developer</title>
        <meta
          name='description'
          content='Savo Kos, a Front-End Web Developer from Bosnia and Herzegovina, Prijedor, who enjoys building Responsive Websites using JavaScript, HTML, CSS, React.'
        />
        <link href='https://savo-kos.com' rel='canonical' />
      </Head>
      <Navigation currentPage='home' />
      <Hero />
      <Specializing />
      <Showcase />
      <S.Container>
        <Contact />
      </S.Container>
      {!intersecting && <ScrollToTop />}
    </S.PageContainer>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.PageContainer = styled.div``;

S.Container = styled.div`
  padding: 3rem 5%;
  margin-top: 10rem;
  background-image: url('/wave.png');
  background-position-y: bottom;
  background-repeat: no-repeat;

  @media screen and (min-width: 1300px) {
    background-size: cover;
  }

  .copyright {
    color: ${({ theme }) => theme.colors.orange};
    font-size: 16px;
    margin-top: 5rem;

    a {
      text-decoration: underline;
      color: #333333;
    }

    @media screen and (min-width: 400px) {
      font-size: 18px;
    }
  }

  @media screen and (min-width: 400px) {
    padding: 3rem 10%;
  }
`;
