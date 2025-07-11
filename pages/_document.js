import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Primary Meta Tags */}
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          
          {/* Favicon and App Icons */}
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="theme-color" content="#7877c6" />
          
          {/* Preconnect to external domains for performance */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link rel="preconnect" href="https://www.google-analytics.com" />
          <link rel="preconnect" href="https://www.googletagmanager.com" />
          
          {/* DNS Prefetch for performance */}
          <link rel="dns-prefetch" href="https://github.com" />
          <link rel="dns-prefetch" href="https://linkedin.com" />
          <link rel="dns-prefetch" href="https://vercel.com" />
          
          {/* Critical CSS and Fonts */}
          <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          
          {/* Security Headers */}
          <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com;" />
          
          {/* Global SEO Meta Tags */}
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
          <meta name="googlebot" content="index, follow" />
          <meta name="bingbot" content="index, follow" />
          
          {/* Schema.org Structured Data - Person */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Savo Kos",
                "jobTitle": "Front-End Web Developer",
                "description": "Expert Front-End Developer specializing in React, Next.js, and modern web technologies. Creating exceptional digital experiences with cutting-edge web development solutions.",
                "url": "https://savokos.com",
                "image": "https://savokos.com/portrait.jpg",
                "sameAs": [
                  "https://github.com/savokos",
                  "https://linkedin.com/in/savokos"
                ],
                "worksFor": {
                  "@type": "Organization",
                  "name": "Freelance"
                },
                "knowsAbout": [
                  "React.js",
                  "Next.js",
                  "JavaScript",
                  "TypeScript",
                  "Node.js",
                  "Web Development",
                  "Front-End Development",
                  "UI/UX Design",
                  "Responsive Design",
                  "Performance Optimization"
                ],
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Prijedor",
                  "addressCountry": "Bosnia and Herzegovina"
                },
                "email": "savo@savokos.com",
                "telephone": "+387601234567"
              })
            }}
          />
          
          {/* Organization Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Savo Kos - Web Development",
                "url": "https://savokos.com",
                "logo": "https://savokos.com/logo.png",
                "description": "Professional web development services specializing in React, Next.js, and modern web technologies. Creating exceptional digital experiences for businesses and individuals.",
                "foundingDate": "2021",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Prijedor",
                  "addressCountry": "Bosnia and Herzegovina"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "customer service",
                  "email": "savo@savokos.com",
                  "telephone": "+387601234567"
                },
                "sameAs": [
                  "https://github.com/savokos",
                  "https://linkedin.com/in/savokos"
                ]
              })
            }}
          />
          
          {/* WebSite Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Savo Kos Portfolio",
                "url": "https://savokos.com",
                "description": "Professional portfolio of Savo Kos - Expert Front-End Developer specializing in React, Next.js, and modern web technologies.",
                "publisher": {
                  "@type": "Person",
                  "name": "Savo Kos"
                },
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://savokos.com/search?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              })
            }}
          />
          
          {/* BreadcrumbList Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://savokos.com"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "About",
                    "item": "https://savokos.com/about"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Projects",
                    "item": "https://savokos.com/projects"
                  },
                  {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "Contact",
                    "item": "https://savokos.com/contact"
                  }
                ]
              })
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          
          {/* Google Analytics */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'GA_MEASUREMENT_ID', {
                  page_title: document.title,
                  page_location: window.location.href,
                });
              `,
            }}
          />
        </body>
      </Html>
    );
  }
}
