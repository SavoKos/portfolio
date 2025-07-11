import { useEffect } from 'react';

const SEOOptimizer = ({ 
  pageType, 
  primaryKeyword, 
  secondaryKeywords = [],
  contentLength = 'medium',
  targetAudience = 'businesses'
}) => {
  
  useEffect(() => {
    // Add structured data for better search engine understanding
    const addStructuredData = () => {
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": document.title,
        "description": document.querySelector('meta[name="description"]')?.content,
        "url": window.location.href,
        "mainEntity": {
          "@type": "Person",
          "name": "Savo Kos",
          "jobTitle": "Front-End Web Developer",
          "description": "Expert Front-End Developer specializing in React, Next.js, and modern web technologies.",
          "url": "https://savokos.com",
          "image": "https://savokos.com/portrait.jpg",
          "sameAs": [
            "https://github.com/savokos",
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
        }
      };

      // Add FAQ schema for better featured snippets
      if (pageType === 'services' || pageType === 'home') {
        structuredData.mainEntity = {
          ...structuredData.mainEntity,
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Web Development Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "React Development",
                  "description": "Custom React applications with modern best practices"
                }
              },
              {
                "@type": "Offer", 
                "itemOffered": {
                  "@type": "Service",
                  "name": "Next.js Development",
                  "description": "Full-stack Next.js applications with server-side rendering"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service", 
                  "name": "Responsive Web Design",
                  "description": "Mobile-first responsive design for all devices"
                }
              }
            ]
          }
        };
      }

      // Add FAQ schema for better featured snippets
      if (pageType === 'contact') {
        structuredData.mainEntity = {
          ...structuredData.mainEntity,
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "email": "savo@savokos.com",
            "telephone": "+387601234567",
            "availableLanguage": "English"
          }
        };
      }

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    };

    // Add breadcrumb navigation for better SEO
    const addBreadcrumbs = () => {
      const breadcrumbData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://savokos.com"
          }
        ]
      };

      // Add page-specific breadcrumbs
      const currentPath = window.location.pathname;
      if (currentPath === '/about') {
        breadcrumbData.itemListElement.push({
          "@type": "ListItem",
          "position": 2,
          "name": "About",
          "item": "https://savokos.com/about"
        });
      } else if (currentPath === '/projects') {
        breadcrumbData.itemListElement.push({
          "@type": "ListItem", 
          "position": 2,
          "name": "Projects",
          "item": "https://savokos.com/projects"
        });
      } else if (currentPath === '/contact') {
        breadcrumbData.itemListElement.push({
          "@type": "ListItem",
          "position": 2, 
          "name": "Contact",
          "item": "https://savokos.com/contact"
        });
      }

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(breadcrumbData);
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    };

    // Add local business schema for local SEO
    const addLocalBusinessSchema = () => {
      const localBusinessData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Savo Kos - Web Development",
        "description": "Expert Front-End Developer specializing in React, Next.js, and modern web technologies",
        "url": "https://savokos.com",
        "telephone": "+387601234567",
        "email": "savo@savokos.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Prijedor",
          "addressCountry": "Bosnia and Herzegovina"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 44.9794,
          "longitude": 16.7144
        },
        "openingHours": "Mo-Su 09:00-18:00",
        "priceRange": "$$",
        "serviceArea": {
          "@type": "Country",
          "name": "Worldwide"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Web Development Services"
        }
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(localBusinessData);
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    };

    // Initialize all SEO optimizations
    const cleanup1 = addStructuredData();
    const cleanup2 = addBreadcrumbs();
    const cleanup3 = addLocalBusinessSchema();

    // Cleanup function
    return () => {
      cleanup1();
      cleanup2();
      cleanup3();
    };
  }, [pageType, primaryKeyword, secondaryKeywords, contentLength, targetAudience]);

  // This component doesn't render anything visible
  return null;
};

export default SEOOptimizer; 