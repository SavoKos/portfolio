import Head from 'next/head';
import Hero from '../components/About/Hero';
import Tools from '../components/About/Tools';
import Navigation from '../components/Navigation';
import ScrollToTop from '../components/ScrollToTop';
import { useEffect, useState } from 'react';

function about() {
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
    <div>
      <Head>
        <title>About | Savo Kos</title>
        <meta
          name='description'
          content='In about page you can find details about Savo Kos. He is Front-end Web Developer. Based in Bosnia and Herzegovina, Prijedor'
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
