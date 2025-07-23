import { SEO } from '@/components/SEO';
import { Target, CheckCircle, MessageSquare, Shield, Compass } from 'lucide-react';

const ABR = () => {
    const courseSchema = {
        '@context': 'https://schema.org',
        '@type': 'Course',
        name: 'Algemene Bestuursdienst Rijk - Oefenen met de rol van politiek-ambtelijk adviseur',
        description:
            'In het kader van het Ontwikkelprogramma Leiderschap van de Algemene Bestuursdienst Rijk oefen ik samen met de deelnemers hoe zij ruimte kunnen maken voor het goede gesprek en hun rol als politiek-ambtelijk adviseur krachtiger en effectiever kunnen invullen.',
        provider: {
            '@type': 'Organization',
            name: 'Tharros Training & Coaching',
        },
        instructor: {
            '@type': 'Person',
            name: 'Ferdi Licher',
        },
        courseMode: 'In-person',
        educationalLevel: 'Professional',
        audience: {
            '@type': 'Audience',
            audienceType: 'Medewerkers Algemene Bestuursdienst Rijk',
        },
    };

    const kernAspecten = [
        {
            icon: MessageSquare,
            title: 'Ruimte maken voor dialoog',
            description:
                'Hoe maak je ruimte in het gesprek met ambtelijk leidinggevende en bewindspersonen voor dialoog, tegenspraak en alternatieven.',
        },
        {
            icon: Target,
            title: 'Diepgaande reflectie',
            description:
                'Hoe maak je tijd voor diepgaande en brede reflectie op vraagstukken zonder vast te komen zitten in stroperige afstemming processen.',
        },
        {
            icon: CheckCircle,
            title: 'Effectieve oplossingen',
            description: 'Hoe kom je tot de kern van wat er aan de hand is en tot meer effectieve, rechtvaardige en duurzame oplossingen.',
        },
    ];

    const kompasRichtingen = [
        'Vertrekpositie voor leiderschap',
        '5 kerndimensies van publiek leiderschap',
        '10 hoofdrichtingen voor ontwikkeling',
        'Praktische toepassing in dagelijkse werkzaamheden',
    ];

    return (
        <>
            <SEO
                title="ABR - Algemene Bestuursdienst Rijk | Politiek-Ambtelijk Adviseur Training"
                description="Specialistische training voor ABR'ers: Oefenen met de rol van politiek-ambtelijk adviseur. Leer ruimte maken voor het goede gesprek en vul je rol krachtiger en effectiever in binnen het Ontwikkelprogramma Leiderschap van de Algemene Bestuursdienst Rijk."
                keywords="algemene bestuursdienst rijk, ABR training, politiek ambtelijk adviseur, ontwikkelprogramma leiderschap abr, rijksoverheid training, leiderschapstraining abr, publiek leiderschap kompas, abr coaching, ministerie training, topambtenaren training"
                structuredData={courseSchema}
            />

            {/* Featured Image Section */}

            <section className="mb-12 bg-gradient-to-br from-black/95 to-gold-900 text-white">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                        <div>
                            <h1 className="mb-2 text-3xl font-bold lg:text-4xl">Algemene Bestuursdienst</h1>
                            <p className="mb-6 text-2xl text-gold-300">Oefenen met de rol van politiek-ambtelijk adviseur</p>
                            <p className="mb-8 text-xl font-light leading-loose">
                                In het kader van het Ontwikkelprogramma Leiderschap van de Algemene Bestuursdienst Rijk oefen ik samen met de
                                deelnemers hoe zij ruimte kunnen maken voor het goede gesprek en hun rol als politiek-ambtelijk adviseur krachtiger en
                                effectiever kunnen invullen.
                            </p>
                            <div className="flex flex-col items-start space-x-0 space-y-3 text-gold-300 sm:flex-row sm:items-start sm:space-x-10 sm:space-y-0">
                                <div className="flex items-start">
                                    <MessageSquare className="mr-2 inline h-5 w-5" />
                                    Ontwikkelprogramma Leiderschap
                                </div>
                                <div className="flex items-center">
                                    <Shield className="mr-2 h-5 w-5" />
                                    Praktijkcasussen
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="overflow-hidden rounded-lg shadow-2xl">
                                <img
                                    src="images/AlgemeneBestuursdienstRijk.jpeg"
                                    alt="Ferdi Licher - Senior Leadership Coach & Trainer"
                                    className="h-96 w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Aanpak Section */}
            <section className="bg-white py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold text-gold-600">Praktijkgerichte Aanpak</h2>
                        <p className="text-gary-600 mx-auto max-w-3xl text-lg">
                            Het oefenen vindt plaats aan de hand van casussen uit de praktijk. Deze aspecten komen aan de orde:
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {kernAspecten.map((aspect, index) => (
                            <div key={index} className="group relative">
                                <div className="h-full rounded-2xl bg-gradient-to-br from-slate-50 to-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold-500/10">
                                        <aspect.icon className="h-6 w-6 text-gold-600" />
                                    </div>
                                    <h3 className="mb-4 text-xl font-semibold text-gold-600">{aspect.title}</h3>
                                    <p className="leading-relaxed text-black">{aspect.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Publiek Leiderschap Kompas Section */}
            <section className="bg-gradient-to-br from-slate-50 to-gold-50 py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                        <div>
                            <div className="mb-6 inline-flex items-center rounded-full bg-gold-500/10 px-4 py-2 text-gold-700">
                                <Compass className="mr-2 h-4 w-4" />
                                Leiderschapsinstrument
                            </div>
                            <h2 className="mb-6 text-3xl font-bold text-gold-600">Het Kompas voor Publiek Leiderschap</h2>
                            <p className="mb-8 text-lg leading-relaxed text-gray-600">
                                Het kompas voor publiek leiderschap is opgesteld aan de hand van groot aantal interviews met leidinggevenden en
                                bestaat uit een vertrekpositie, 5 kerndimensies en 10 hoofdrichtingen die de zoektocht naar meer en beter leiderschap
                                kunnen helpen vormgeven.
                            </p>

                            <div className="space-y-4">
                                {kompasRichtingen.map((richting, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className="mr-3 mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-gold-500"></div>
                                        <p className="text-gray-700">{richting}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="overflow-hidden rounded-full border-4 border-gold-700/30 shadow-2xl">
                                <img
                                    src="images/politiek-ambtelijk-samenspel.jpg"
                                    alt="Leiderschapskompas Algemene bestuursdienst Rijk, Politiek ambtelijk samenspel"
                                    className="w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ABR;
