import { Helmet } from 'react-helmet-async';

interface StructuredData {
    '@context': string;
    '@type': string;
    [key: string]: unknown;
}

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    canonical?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    ogUrl?: string;
    structuredData?: StructuredData;
}

export const SEO = ({
    title,
    description,
    keywords = 'leiderschapstraining, coaching, publieke sector, overheid, training, leiderschap, ambtelijk vakmanschap, persoonlijke ontwikkeling, management training',
    canonical,
    ogTitle,
    ogDescription,
    ogImage = '/LogoTharros.png',
    ogUrl,
    structuredData,
}: SEOProps) => {
    const siteUrl = 'https://www.tharros-trainingcoaching.nl';
    const fullTitle = `${title} | Tharros Training & Coaching`;
    const finalOgTitle = ogTitle || title;
    const finalOgDescription = ogDescription || description;
    const finalCanonical = canonical || window.location.href;
    const finalOgUrl = ogUrl || window.location.href;
    const finalOgImage = ogImage.startsWith('http')
        ? ogImage
        : `${siteUrl}${ogImage}`;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta
                name="author"
                content="Ferdi Licher, Tharros Training & Coaching"
            />
            <meta name="robots" content="index, follow" />
            <meta name="language" content="nl" />
            <meta name="revisit-after" content="7 days" />

            {/* Canonical URL */}
            <link rel="canonical" href={finalCanonical} />

            {/* Open Graph Meta Tags */}
            <meta property="og:title" content={finalOgTitle} />
            <meta property="og:description" content={finalOgDescription} />
            <meta property="og:image" content={finalOgImage} />
            <meta property="og:url" content={finalOgUrl} />
            <meta property="og:type" content="website" />
            <meta
                property="og:site_name"
                content="Tharros Training & Coaching"
            />
            <meta property="og:locale" content="nl_NL" />

            {/* Twitter Card Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={finalOgTitle} />
            <meta name="twitter:description" content={finalOgDescription} />
            <meta name="twitter:image" content={finalOgImage} />

            {/* Additional SEO Meta Tags */}
            <meta name="geo.region" content="NL" />
            <meta name="geo.placename" content="Nederland" />
            <meta name="coverage" content="Worldwide" />
            <meta name="distribution" content="Global" />
            <meta name="rating" content="General" />

            {/* Structured Data */}
            {structuredData && (
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            )}
        </Helmet>
    );
};
