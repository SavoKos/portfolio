import Head from 'next/head';
import styled from 'styled-components';
import Contact from '../components/Contact';
import Hero from '../components/Home/Hero';
import Showcase from '../components/Home/Showcase';
import Specializing from '../components/Home/Specializing';
import Navigation from '../components/Navigation';
import Image from 'next/image';

export default function Home() {
  return (
    <S.PageContainer>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Navigation currentPage='home' />
      <Hero />
      <Specializing />
      {/* <Showcase /> */}
      <Contact />
    </S.PageContainer>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.PageContainer = styled.div``;
