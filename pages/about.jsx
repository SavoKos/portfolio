import Head from 'next/head';
import Hero from '../components/About/Hero';
import Tools from '../components/About/Tools';
import Navigation from '../components/Navigation';
import ScrollToTop from '../components/ScrollToTop';
import { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function about() {
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
    <div>
      <Head>
        <title>Savo Kos | About</title>
        <meta
          name='description'
          content='Savo Kos, a Front-End Web Developer from Bosnia and Herzegovina, Prijedor, who enjoys building Responsive Websites using JavaScript, HTML, CSS, React.'
        />
        <link href='https://savokos.com/about' rel='canonical' />
      </Head>
      <Navigation currentPage='about' />
      <Hero />
      <Tools />

      {!intersecting && <ScrollToTop />}
    </div>
  );
}

export default about;
