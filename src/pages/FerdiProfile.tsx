import { SEO } from '@/components/SEO';

const FerdiProfile = () => {
    const personSchema = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Ferdi Licher',
        jobTitle: 'Senior Leadership Coach & Trainer',
        worksFor: {
            '@type': 'Organization',
            name: 'Tharros Training & Coaching',
        },
        description:
            'Ervaren trainer, coach en moderator met meer dan 15 jaar ervaring in de publieke sector, gespecialiseerd in leiderschapsontwikkeling.',
        image: 'https://www.tharros-trainingcoaching.nl/images/Ferdi01.jpeg',
        url: 'https://www.tharros-trainingcoaching.nl/ferdi-licher',
        knowsAbout: [
            'Leiderschapsontwikkeling',
            'Coaching',
            'Publieke sector',
            'Organisatieverandering',
            'Ambtelijk vakmanschap',
        ],
    };

    return (
        <>
            <SEO
                title='Ferdi Licher - Moderator, Trainer en Coach'
                description='Ferdi Licher is een ervaren trainer, coach en moderator met meer dan 15 jaar ervaring in de publieke sector. Gespecialiseerd in leiderschapsontwikkeling en organisatieverandering.'
                keywords='ferdi licher, leadership coach, trainer publieke sector, moderator, leiderschapsontwikkeling, coaching nederland'
                structuredData={personSchema}
            />
            <div className='mt-24 p-8'>
                <div className='max-w-4xl mx-auto'>
                    <h1 className='text-4xl font-bold text-slate-800 mb-8'>
                        Ferdi Licher - Moderator, Trainer en Coach
                    </h1>
                    <div className='prose prose-lg max-w-none'>
                        <p className='text-xl text-gray-600 mb-6'>
                            Ferdi Licher is een ervaren trainer, coach en
                            moderator met meer dan 15 jaar ervaring in de
                            publieke sector.
                        </p>
                        <p className='text-gray-600 mb-6'>
                            Hij combineert praktijkervaring met gedegen kennis
                            van leiderschapsontwikkeling en
                            organisatieverandering, waarbij hij professionals
                            helpt hun persoonlijke leiderschapsstijl te
                            ontdekken en te ontwikkelen.
                        </p>
                        <p className='text-gray-600'>
                            Als oprichter van Tharros Training & Coaching heeft
                            hij zich gespecialiseerd in het ontwikkelen van
                            leiderschapsprogramma's die specifiek zijn afgestemd
                            op de unieke uitdagingen van de publieke sector.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FerdiProfile;
