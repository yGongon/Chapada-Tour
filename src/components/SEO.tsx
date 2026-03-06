import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Chapada Tour - Agência de Turismo na Chapada Diamantina',
  description = 'Explore a Chapada Diamantina com a Chapada Tour. Oferecemos os melhores roteiros, guias especializados e experiências inesquecíveis em Lençóis e região.',
  keywords = 'Chapada Diamantina, Turismo, Lençóis, Bahia, Ecoturismo, Trilhas, Cachoeiras, Chapada Tour, Vale do Pati, Morro do Pai Inácio',
  image = 'https://ik.imagekit.io/ozcvccl1z/Capa%20da%20home.avif',
  url = 'https://chapadatour.com.br/',
}) => {
  const fullTitle = title.includes('Chapada Tour') ? title : `${title} | Chapada Tour`;
  const canonicalUrl = url.endsWith('/') ? url : `${url}/`;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="Chapada Tour" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
