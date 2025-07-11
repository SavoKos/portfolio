import Head from 'next/head';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'Savo Kos',
  section,
  tags = []
}) => {
  const siteUrl = 'https://savokos.com';
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullImage = image ? `${siteUrl}${image}` : `${siteUrl}/og-image.jpg`;
  
  // Enhanced title with brand
  const fullTitle = title ? `${title} | Savo Kos - Expert Front-End Developer` : 'Savo Kos - Expert Front-End Developer | React, Next.js, Modern Web Development';
  
  // Enhanced description with keywords
  const enhancedDescription = description || 'Expert Front-End Developer specializing in React, Next.js, and modern web technologies. Creating exceptional digital experiences with cutting-edge web development solutions. Hire me for your next project.';
  
  // Enhanced keywords
  const enhancedKeywords = [
    'front-end developer',
    'react developer',
    'next.js developer',
    'web developer',
    'javascript developer',
    'typescript developer',
    'ui/ux developer',
    'responsive web design',
    'modern web development',
    'react.js',
    'next.js',
    'node.js',
    'mongodb',
    'express.js',
    'tailwind css',
    'styled-components',
    'web performance',
    'seo optimization',
    'mobile-first design',
    'progressive web apps',
    'frontend development',
    'web application development',
    'custom web development',
    'freelance web developer',
    'bosnia and herzegovina',
    'prijedor',
    ...keywords
  ].join(', ');

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={enhancedDescription} />
      <meta name="keywords" content={enhancedKeywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={enhancedDescription} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title || 'Savo Kos - Expert Front-End Developer'} />
      <meta property="og:site_name" content="Savo Kos Portfolio" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={enhancedDescription} />
      <meta property="twitter:image" content={fullImage} />
      <meta property="twitter:image:alt" content={title || 'Savo Kos - Expert Front-End Developer'} />
      <meta property="twitter:creator" content="@savokos" />
      <meta property="twitter:site" content="@savokos" />
      
      {/* Article specific meta tags */}
      {type === 'article' && (
        <>
          <meta property="article:published_time" content={publishedTime} />
          <meta property="article:modified_time" content={modifiedTime} />
          <meta property="article:author" content={author} />
          <meta property="article:section" content={section} />
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Additional SEO Meta Tags */}
      <meta name="application-name" content="Savo Kos Portfolio" />
      <meta name="apple-mobile-web-app-title" content="Savo Kos" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      
      {/* Language and Region */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="BA" />
      <meta name="geo.placename" content="Prijedor" />
      <meta name="geo.position" content="44.9794;16.7144" />
      <meta name="ICBM" content="44.9794, 16.7144" />
      
      {/* Business Information */}
      <meta name="business:contact_data:street_address" content="Prijedor, Bosnia and Herzegovina" />
      <meta name="business:contact_data:locality" content="Prijedor" />
      <meta name="business:contact_data:region" content="Bosnia and Herzegovina" />
      <meta name="business:contact_data:postal_code" content="79000" />
      <meta name="business:contact_data:country_name" content="Bosnia and Herzegovina" />
      <meta name="business:contact_data:phone_number" content="+387601234567" />
      <meta name="business:contact_data:email" content="savo@savokos.com" />
      
      {/* Page-specific structured data */}
      {type === 'website' && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": fullTitle,
              "description": enhancedDescription,
              "url": fullUrl,
              "mainEntity": {
                "@type": "Person",
                "name": "Savo Kos",
                "jobTitle": "Front-End Web Developer",
                "description": "Expert Front-End Developer specializing in React, Next.js, and modern web technologies.",
                "url": "https://savokos.com",
                "image": "https://savokos.com/portrait.jpg",
                "sameAs": [
                  "https://github.com/savokos",
                  "https://linkedin.com/in/savokos"
                ],
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
                ]
              },
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
      )}
      
      {/* Service Schema for specific pages */}
      {(url === '/services' || url === '/') && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Front-End Web Development Services",
              "description": "Professional web development services including React development, Next.js applications, responsive design, and modern web technologies.",
              "provider": {
                "@type": "Person",
                "name": "Savo Kos",
                "jobTitle": "Front-End Web Developer"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Worldwide"
              },
              "serviceType": [
                "Web Development",
                "Front-End Development",
                "React Development",
                "Next.js Development",
                "UI/UX Design",
                "Responsive Design"
              ],
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "priceCurrency": "EUR",
                "price": "0",
                "priceValidUntil": "2024-12-31"
              }
            })
          }}
        />
      )}
      
      {/* Portfolio Schema for projects page */}
      {url === '/projects' && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Web Development Portfolio",
              "description": "Collection of web development projects showcasing React, Next.js, and modern web technologies.",
              "numberOfItems": 6,
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "Kobalt - Food Delivery Platform",
                    "description": "Comprehensive food delivery platform with full e-commerce functionality",
                    "url": "https://kobalt.savokos.com",
                    "creator": {
                      "@type": "Person",
                      "name": "Savo Kos"
                    }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "Game Portal - Gaming Discovery Platform",
                    "description": "Comprehensive gaming discovery platform with over 245,000 game titles",
                    "url": "https://gameportal.savokos.com",
                    "creator": {
                      "@type": "Person",
                      "name": "Savo Kos"
                    }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "Movie Geek - Movie Discovery Platform",
                    "description": "Movie and TV show discovery platform with comprehensive information",
                    "url": "https://moviegeek.savokos.com",
                    "creator": {
                      "@type": "Person",
                      "name": "Savo Kos"
                    }
                  }
                }
              ]
            })
          }}
        />
      )}
    </Head>
  );
};

export default SEO; 