import { SEO } from '@/components/SEO';
import { Heart, Users, Target, UserCircle, Smile } from 'lucide-react';

const coachingImages = [
    {
        src: 'images/portret.jpg',
        alt: 'Abstract art with faces',
        caption: '',
    },
    {
        src: 'images/mozaiek-vrouwengezicht.jpg',
        alt: 'Vrouwengezicht in mozaïek',
        caption: '',
    },
    {
        src: 'images/frida-kahlo.jpg',
        alt: 'Portret van Frida Kahlo',
        caption: '',
    },
];

const IndividueleTrajecten = () => {
    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Individuele Trajecten - Persoonlijke coaching en mentorschap',
        description:
            'Persoonlijke coaching en mentorschap voor medewerkers en leidinggevenden in de publieke sector. Samen zoeken naar wat er goed gaat en nog beter kan door jarenlange praktijkervaring in te zetten.',
        provider: {
            '@type': 'Organization',
            name: 'Tharros, Training en Coaching',
            url: 'https://tharros.nl',
        },
        serviceType: 'Individual Traject Coaching',
        areaServed: 'Nederland',
        audience: {
            '@type': 'Audience',
            audienceType: 'Medewerkers en leidinggevenden publieke sector',
        },
    };

    const focusAreas = [
        {
            icon: Target,
            title: 'Balans vinden',
            description:
                'De juiste balans in toon en stijl, tussen dirigeren en delegeren, waar je tijd aan besteedt en hoe je omgaat met weerstand.',
        },
        {
            icon: Users,
            title: 'Steun en draagvlak',
            description: 'Hoe krijg je steun en draagvlak voor veranderingen en de koers die je wilt inslaan. Wat is nodig en haalbaar.',
        },
        {
            icon: Heart,
            title: 'Positieve energie',
            description: 'Hoe zorg je dat er positieve energie gaat stromen in het team en dat medewerkers niet uitgeput raken van tegenslagen.',
        },
    ];

    return (
        <>
            <SEO
                title="Individuele Trajecten - Persoonlijke Coaching en Mentorschap"
                description="Persoonlijke coaching en mentorschap voor medewerkers en leidinggevenden in de publieke sector. Samen zoeken naar wat er goed gaat en nog beter kan door jarenlange praktijkervaring."
                keywords="individuele coaching, mentorschap, publieke sector coaching, leidinggevende coaching, persoonlijke ontwikkeling, teamleiderschap, overheid coaching, ambtelijk coaching, coaching voor ambtenaren"
                structuredData={serviceSchema}
            />

            {/* Hero Section */}
            <section className="mb-12 bg-gradient-to-br from-black/95 to-gold-900 text-white">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                        <div>
                            <h1 className="mb-3 text-3xl font-bold lg:text-4xl">Individuele Trajecten</h1>
                            <p className="mb-6 text-2xl text-gold-300">Persoonlijke coaching en mentorschap</p>
                            <p className="mb-8 text-xl font-light leading-loose">
                                Als u behoefte heeft aan persoonlijke coaching of mentorschap als medewerker of leidinggevende in de publieke sector
                                dan kan ik u daarbij helpen door samen te zoeken naar wat er goed gaat en wat nog beter kan.
                            </p>
                            <div className="flex flex-col items-start space-x-0 space-y-3 text-gold-300 sm:flex-row sm:items-start sm:space-x-10 sm:space-y-0">
                                <div className="flex items-start">
                                    <UserCircle className="mr-2 inline h-5 w-5" />
                                    Coaching & Mentorschap
                                </div>
                                <div className="flex items-center">
                                    <Smile className="mr-2 h-5 w-5" />
                                    Positieve energie in het werk
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            {/* Abstract faces image */}
                            <div className="overflow-hidden rounded-lg shadow-2xl">
                                <img src={coachingImages[0].src} alt={coachingImages[0].alt} className="h-96 w-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="bg-white py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto mb-16 max-w-4xl text-center">
                        <h2 className="mb-8 text-3xl font-bold leading-snug text-slate-600 lg:text-4xl lg:leading-snug">
                            Persoonlijke begeleiding op maat voor medewerkers en leidinggevenden
                        </h2>
                        <p className="mx-auto pb-3 text-xl leading-relaxed text-gray-700">
                            In mijn individuele coaching en mentorschap zoeken we samen hoe je de kern van het werk centraal kunt stellen en daar
                            positieve energie en plezier in kunt organiseren.
                        </p>
                        <p className="mx-auto text-xl leading-relaxed text-gray-700">
                            Daarbij kan ik mijn eigen jarenlange kennis en ervaring uit de praktijk inzetten om te verhelderen hoe dingen wellicht ook
                            anders kunnen een hoe een meer effectief handelingsrepertoire ontwikkeld kan worden.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 pt-4 lg:grid-cols-3">
                        {focusAreas.map((area, index) => (
                            <div key={index} className="rounded-2xl bg-slate-200/10 p-8 shadow-lg">
                                <div className="mb-6 flex justify-center">
                                    <div className="rounded-2xl bg-slate-100 p-4">
                                        <area.icon className="h-8 w-8 text-slate-600" />
                                    </div>
                                </div>
                                <h3 className="mb-4 text-center text-xl font-semibold text-slate-600">{area.title}</h3>
                                <p className="text-center leading-relaxed text-gray-700">{area.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default IndividueleTrajecten;
