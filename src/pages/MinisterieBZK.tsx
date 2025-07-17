import { SEO } from '@/components/SEO';
import {
    Users,
    Calendar,
    Star,
    Target,
    MessageSquare,
    Heart,
    Award,
    TrendingUp,
} from 'lucide-react';

const MinisterieBZK = () => {
    const courseSchema = {
        '@context': 'https://schema.org',
        '@type': 'Course',
        name: 'Ministerie BZK - Leergang Groeien in persoonlijk leiderschap',
        description:
            'De leergang groeien in persoonlijk leiderschap is een in-company leergang die voor en door medewerkers zelf wordt gemaakt onder begeleiding van een moderator. Aan de orde komen onder meer persoonlijke leerdoelen, uitdagingen in communicatie en interactie en het effectief handelen in de complexe omgeving van beleid en uitvoering.',
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
            audienceType: 'Medewerkers Ministerie BZK',
        },
    };

    const kernAspecten = [
        {
            icon: Target,
            title: 'Persoonlijke leerdoelen',
            description:
                'Ontdek en ontwikkel je persoonlijke leerdoelen binnen de context van jouw werk en organisatie.',
        },
        {
            icon: MessageSquare,
            title: 'Communicatie en interactie',
            description:
                "Verbeter je vaardigheden in communicatie en interactie met collega's en stakeholders.",
        },
        {
            icon: TrendingUp,
            title: 'Effectief handelen',
            description:
                'Leer effectief te handelen in de complexe omgeving van beleid en uitvoering.',
        },
    ];

    const programmaVoordelen = [
        {
            icon: Users,
            title: 'Meer deelnemers',
            description:
                'Veel meer medewerkers kunnen meedoen aan het programma',
        },
        {
            icon: Star,
            title: 'Behoeftegericht',
            description:
                'Het programma sluit goed aan bij de werkelijke behoeften',
        },
        {
            icon: Award,
            title: 'Lage kosten',
            description: 'Relatief lage kosten door in-company aanpak',
        },
        {
            icon: Heart,
            title: 'Teamgevoel',
            description: 'Enorme versterking van het onderlinge teamgevoel',
        },
    ];

    const programmaDetails = [
        '8 modules van een dagdeel elk',
        'Verdeeld over een periode van 8 maanden',
        "Groep kiest zelf welke 8 thema's centraal staan",
        'Moderator zorgt voor samenhang en rode draad',
        'Open voor alle medewerkers (ondersteuners tot senior-coördinerend)',
        'Bij voorkeur 16 deelnemers uit hetzelfde organisatieonderdeel',
        'Deelnemers werken in tweetallen aan moduleontwikkeling',
    ];

    return (
        <>
            <SEO
                title="Ministerie BZK - Leergang Groeien in Persoonlijk Leiderschap | Tharros"
                description="Specialistische in-company leergang voor Ministerie van Binnenlandse Zaken en Koninkrijksrelaties. Ontwikkel persoonlijk leiderschap voor effectief handelen in beleid en uitvoering. Voor en door medewerkers zelf ontwikkeld."
                keywords="ministerie bzk leergang, persoonlijk leiderschap bzk, binnenlandse zaken training, in-company leergang overheid, beleid uitvoering training, leiderschapsontwikkeling ministerie, overheid communicatie training, teamontwikkeling bzk"
                structuredData={courseSchema}
            />

            {/* Featured Image Section */}
            <section className="mb-12 bg-gradient-to-br from-black/95 to-gold-900 text-white">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                        <div>
                            <h1 className="mb-2 text-3xl font-bold lg:text-4xl">
                                Ministerie BZK
                            </h1>
                            <p className="mb-6 text-2xl text-gold-300">
                                Leergang Groeien in persoonlijk leiderschap
                            </p>
                            <p className="mb-8 text-xl font-light leading-loose">
                                De leergang groeien in persoonlijk leiderschap
                                is een in-company leergang die voor en door
                                medewerkers zelf wordt gemaakt onder begeleiding
                                van een moderator. Aan de orde komen onder meer
                                persoonlijke leerdoelen, uitdagingen in
                                communicatie en interactie en het effectief
                                handelen in de complexe omgeving van beleid en
                                uitvoering.
                            </p>
                            <div className="flex items-center space-x-10 text-gold-300">
                                <div className="flex items-center">
                                    <Users className="mr-2 inline h-5 w-5" />
                                    In-company leergang
                                </div>
                                <div className="flex items-center">
                                    <Calendar className="mr-2 h-5 w-5" />8
                                    maanden programma
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="overflow-hidden rounded-lg shadow-2xl">
                                <img
                                    src="images/MinisterieBKZ.jpeg"
                                    alt="Voetstappen in de woestijn - Persoonlijke groei"
                                    className="h-96 w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Kernthema's Section */}
            <section className="bg-white py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold text-gold-600">
                            Kernthema's van de Leergang
                        </h2>
                        <p className="text-gary-600 mx-auto max-w-3xl text-lg">
                            De leergang richt zich op drie hoofdthema's die
                            essentieel zijn voor persoonlijk leiderschap
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {kernAspecten.map((aspect, index) => (
                            <div key={index} className="group relative">
                                <div className="h-full rounded-2xl bg-gradient-to-br from-slate-50 to-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold-500/10">
                                        <aspect.icon className="h-6 w-6 text-gold-600" />
                                    </div>
                                    <h3 className="mb-4 text-xl font-semibold text-gold-600">
                                        {aspect.title}
                                    </h3>
                                    <p className="leading-relaxed text-black">
                                        {aspect.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Programma Opzet Section */}
            <section className="mx-auto max-w-5xl bg-white px-4 py-16 sm:px-6 lg:px-8">
                <h2 className="mb-6 text-3xl font-bold text-gold-600">
                    Unieke Groepsdynamiek
                </h2>
                <p className="mb-6 text-lg leading-relaxed text-gray-600">
                    De leergang staat open voor alle medewerkers van
                    ondersteuners tot senior-coördinerend medewerkers. De groep
                    bestaat bij voorkeur uit 16 deelnemers uit hetzelfde
                    organisatieonderdeel, waarbij zij in tweetallen
                    verantwoordelijk zijn voor het ontwikkelen en verzorgen van
                    een van de modules.
                </p>
                <p className="mb-8 text-lg leading-relaxed text-gray-600">
                    Zowel dat men elkaar onderling al enigszins kent, als dat de
                    leergang open staat voor iedereen wordt zeer positief
                    gewaardeerd en blijkt een positieve invloed op het
                    groepsproces te hebben omdat er hierdoor ook onderdeel
                    coaching plaatsvindt.
                </p>
                <div className="rounded-lg bg-gold-500/10 p-6">
                    <h3 className="mb-3 text-lg font-semibold text-gold-600">
                        Langetermijn Impact
                    </h3>
                    <p className="text-gray-700">
                        Wanneer dit meerdere jaren achtereen herhaald wordt
                        binnen hetzelfde organisatieonderdeel met steeds een
                        nieuwe groep deelnemers zorgt dit voor enorme
                        versterking van het onderlinge teamgevoel.
                    </p>
                </div>

                <div className="relative mt-24">
                    <div className="mb-6 inline-flex items-center rounded-full bg-gold-500/10 px-4 py-2 text-gold-700">
                        <Calendar className="mr-2 h-4 w-4" />
                        Programma Opzet
                    </div>
                    <h2 className="mb-6 text-3xl font-bold text-gold-600">
                        Flexibel en Maatwerk
                    </h2>
                    <p className="mb-8 text-lg leading-relaxed text-gray-600">
                        De leergang bestaat standaard uit 8 modules van een
                        dagdeel die worden verdeeld over een periode van 8
                        maanden. De groep kiest in een startbijeenkomst zelf
                        welke 8 thema's centraal zullen staan. Daarbij zorgt de
                        moderator voor samenhang in het programma en een rode
                        draad.
                    </p>

                    <div className="space-y-4">
                        {programmaDetails.map((detail, index) => (
                            <div key={index} className="flex items-start">
                                <div className="mr-3 mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-gold-500"></div>
                                <p className="text-gray-700">{detail}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Voordelen Section */}
            <section className="-mb-24 mt-12 bg-slate-300/10 py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold text-gold-600">
                            Voordelen van In-Company Leergang
                        </h2>
                        <p className="text-gary-600 mx-auto max-w-3xl text-lg">
                            Het voordeel van een in-company door en voor
                            medewerkers zelf te ontwikkelen
                            leiderschapsprogramma
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {programmaVoordelen.map((voordeel, index) => (
                            <div
                                key={index}
                                className="rounded-lg border border-gray-400/20 px-3 pb-4 pt-5 text-center shadow-md"
                            >
                                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gold-500/10">
                                    <voordeel.icon className="h-8 w-8 text-gold-600" />
                                </div>
                                <h3 className="mb-2 text-lg font-semibold text-gold-600">
                                    {voordeel.title}
                                </h3>
                                <p className="text-gray-700">
                                    {voordeel.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default MinisterieBZK;
