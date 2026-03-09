import React from 'react';
import { Helmet } from 'react-helmet-async';
import { DEFAULT_KEYWORDS } from '../constants/seoKeywords';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string | string[];
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Chapada Tour - Agência de Turismo na Chapada Diamantina',
  description = 'Explore a Chapada Diamantina com a Chapada Tour. Oferecemos os melhores roteiros, guias especializados e experiências inesquecíveis em Lençóis e região.',
  keywords = DEFAULT_KEYWORDS,
  image = 'https://ik.imagekit.io/ozcvccl1z/Capa%20da%20home.avif',
  url = 'https://chapadatour.com.br/',
}) => {
  const fullTitle = title.includes('Chapada Tour') ? title : `${title} | Chapada Tour`;
  const canonicalUrl = url.endsWith('/') ? url : `${url}/`;
  const keywordsString = Array.isArray(keywords) ? keywords.join(', ') : keywords;

  // JSON-LD Structured Data for Local Business
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Chapada Tour",
    "alternateName": "Chapada Tour Turismo",
    "description": description,
    "url": canonicalUrl,
    "logo": image,
    "image": image,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lençóis",
      "addressRegion": "Bahia",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -12.5597,
      "longitude": -41.3881
    },
    "telephone": "+5575998393393",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+5575998393393",
      "contactType": "reservations",
      "areaServed": "BR",
      "availableLanguage": ["Portuguese", "English"]
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Lençóis",
        "sameAs": "https://pt.wikipedia.org/wiki/Len%C3%A7%C3%B3is"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Chapada Diamantina",
        "sameAs": "https://pt.wikipedia.org/wiki/Parque_Nacional_da_Chapada_Diamantina"
      }
    ],
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "08:00",
        "closes": "20:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/chapadatour/",
      "https://wa.me/5575998393393"
    ]
  };

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordsString} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="author" content="Chapada Tour" />
      <meta name="geo.region" content="BR-BA" />
      <meta name="geo.placename" content="Lençóis" />
      <meta name="geo.position" content="-12.5597;-41.3881" />
      <meta name="ICBM" content="-12.5597, -41.3881" />
      <meta name="theme-color" content="#5A5A40" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#5A5A40" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="language" content="Portuguese" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      <meta name="apple-mobile-web-app-title" content="Chapada Tour" />
      <meta name="application-name" content="Chapada Tour" />
      <meta name="msapplication-TileColor" content="#5A5A40" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="Chapada Tour" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:image:alt" content={fullTitle} />
      <meta property="twitter:site" content="@chapadatour" />
      <meta property="twitter:creator" content="@chapadatour" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
