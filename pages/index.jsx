import Head from 'next/head';
import styled from 'styled-components';
import Hero from '../components/Home/Hero';
import Navigation from '../components/Navigation';

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
    </S.PageContainer>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.PageContainer = styled.div`
  padding: 3rem 10%;
`;
