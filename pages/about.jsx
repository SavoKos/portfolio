import Head from 'next/head';
import Hero from '../components/About/Hero';
import Tools from '../components/About/Tools';
import Navigation from '../components/Navigation';
import ScrollToTop from '../components/ScrollToTop';

function about({ intersecting }) {
  return (
    <div>
      <Head>
        <title>Front-end Web Developer | Savo Kos</title>
      </Head>
      <Navigation currentPage='about' />
      <Hero />
      <Tools />

      {!intersecting && <ScrollToTop />}
    </div>
  );
}

export default about;
