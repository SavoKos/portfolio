import Hero from '../components/Projects/Hero';
import Navigation from '../components/Navigation';
import ScrollToTop from '../components/ScrollToTop';
import Head from 'next/head';
import Projects from '../components/Projects/Projects';
import styled from 'styled-components';
import Contact from '../components/Contact';

function projects({ intersecting }) {
  return (
    <div>
      <Head>
        <title>Projects | Savo Kos</title>
      </Head>
      <Navigation currentPage='projects' />
      <Hero />
      <Projects />
      <S.Container>
        <Contact />
      </S.Container>
      {!intersecting && <ScrollToTop />}
    </div>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};

S.Container = styled.div`
  padding: 3rem 5%;
  margin-top: 10rem;
  background-image: url('/wave.png');
  background-position-y: bottom;
  background-repeat: no-repeat;
  background-size: cover;

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

export default projects;
