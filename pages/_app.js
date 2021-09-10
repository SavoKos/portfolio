import { useEffect, useState } from 'react';
import '../styles/globals.css';
import Theme from '../Theme';

function MyApp({ Component, pageProps }) {
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
    <Theme>
      <Component {...pageProps} intersecting={intersecting} />
    </Theme>
  );
}

export default MyApp;
