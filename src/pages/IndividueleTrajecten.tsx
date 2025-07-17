import { SEO } from '@/components/SEO';
import {
    Heart,
    Users,
    Target,
    CheckCircle,
    ArrowRight,
    MessageSquare,
    Compass,
    User,
} from 'lucide-react';

const IndividueleTrajecten = () => {
    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Individuele Trajecten - Persoonlijke coaching en mentorschap',
        description:
            'Persoonlijke coaching en mentorschap voor medewerkers en leidinggevenden in de publieke sector. Samen zoeken naar wat er goed gaat en nog beter kan door jarenlange praktijkervaring in te zetten.',
        provider: {
            '@type': 'Organization',
            name: 'Tharros Training & Coaching',
            url: 'https://tharros.nl',
        },
        serviceType: 'Individual Coaching',
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
            description:
                'Hoe krijg je steun en draagvlak voor veranderingen en de koers die je wilt inslaan. Wat is nodig en haalbaar.',
        },
        {
            icon: Heart,
            title: 'Positieve energie',
            description:
                'Hoe zorg je dat er positieve energie gaat stromen in het team en dat medewerkers niet uitgeput raken van tegenslagen.',
        },
    ];

    const coachingBenefits = [
        {
            title: 'Kernwerk centraal',
            description:
                'Samen zoeken hoe je de kern van het werk centraal kunt stellen en daar positieve energie en plezier in kunt organiseren.',
        },
        {
            title: 'Praktijkervaring',
            description:
                'Jarenlange kennis en ervaring uit de praktijk om te verhelderen hoe dingen wellicht anders kunnen.',
        },
        {
            title: 'Effectief handelingsrepertoire',
            description:
                'Ontwikkeling van een meer effectief handelingsrepertoire dat past bij jouw situatie en uitdagingen.',
        },
        {
            title: 'Maatwerk benadering',
            description:
                'Persoonlijke coaching en mentorschap afgestemd op jouw specifieke rol in de publieke sector.',
        },
    ];

    return (
        <>
            <SEO
                title="Individuele Trajecten | Persoonlijke Coaching en Mentorschap"
                description="Persoonlijke coaching en mentorschap voor medewerkers en leidinggevenden in de publieke sector. Samen zoeken naar wat er goed gaat en nog beter kan door jarenlange praktijkervaring in te zetten."
                keywords="individuele coaching, mentorschap, publieke sector, leidinggevende coaching, persoonlijke ontwikkeling, teamleiderschap, overheid coaching"
                structuredData={serviceSchema}
            />

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
                        <div className="text-center lg:text-left">
                            <div className="mb-6 flex justify-center lg:justify-start">
                                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                                    <User className="h-12 w-12 text-gold-400" />
                                </div>
                            </div>
                            <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                                Individuele Trajecten
                            </h1>
                            <p className="mb-8 text-xl font-medium text-slate-200 sm:text-2xl">
                                Persoonlijke coaching en mentorschap
                            </p>
                            <p className="mb-10 text-lg leading-relaxed text-slate-300">
                                Als u behoefte heeft aan persoonlijke coaching
                                of mentorschap als medewerker of leidinggevende
                                in de publieke sector dan ik u daarbij helpen
                                door samen te zoeken naar wat er goed gaat en
                                nog beter kan.
                            </p>
                            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                                <a
                                    href="/contact"
                                    className="inline-flex transform items-center justify-center rounded-none bg-gold-400 px-8 py-4 font-semibold text-slate-900 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:bg-gold-300 hover:shadow-xl"
                                >
                                    <MessageSquare className="mr-3 h-5 w-5" />
                                    Kennismakingsgesprek
                                </a>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="relative mx-auto max-w-md">
                                <img
                                    src="/images/ArtOfThePeople_ThomasGriesel.jpg"
                                    alt="Abstracte kunst met gezichten - individuele coaching en mentorschap"
                                    className="h-full w-full rounded-2xl object-cover shadow-2xl"
                                />
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="bg-white py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <h2 className="mb-8 text-4xl font-bold text-slate-900 sm:text-5xl">
                            Persoonlijke begeleiding op maat
                        </h2>
                        <p className="mx-auto max-w-4xl text-xl leading-relaxed text-slate-600">
                            Daarbij kan ik mijn eigen jarenlange kennis en
                            ervaring uit de praktijk inzetten om te verhelderen
                            hoe dingen wellicht ook anders kunnen een hoe een
                            meer effectief handelingsrepertoire ontwikkeld kan
                            worden.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        {focusAreas.map((area, index) => (
                            <div
                                key={index}
                                className="rounded-2xl bg-slate-50 p-8 shadow-lg"
                            >
                                <div className="mb-6 flex justify-center">
                                    <div className="rounded-2xl bg-gold-100 p-4">
                                        <area.icon className="h-8 w-8 text-gold-600" />
                                    </div>
                                </div>
                                <h3 className="mb-4 text-center text-xl font-semibold text-slate-900">
                                    {area.title}
                                </h3>
                                <p className="text-center leading-relaxed text-slate-600">
                                    {area.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Content Section */}
            <section className="bg-slate-50 py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
                        <div>
                            <h2 className="mb-8 text-4xl font-bold text-slate-900">
                                Voor beginnend leidinggevenden
                            </h2>
                            <div className="prose prose-lg text-slate-600">
                                <p className="leading-relaxed">
                                    Als beginnend leidinggevende is het vaak
                                    zoeken naar de juiste balans in toon en
                                    stijl, in dirigeren en delegeren, in waar je
                                    je tijd aan besteedt en hoe je omgaat met
                                    weerstand en moeilijke situaties.
                                </p>
                                <p className="leading-relaxed">
                                    Hoeveel steun en draagvlak heb je voor
                                    veranderingen en de koers die je wilt
                                    inslaan. Wat is nodig en haalbaar. En hoe
                                    zorg je dat er positieve energie gaat
                                    stromen in het team en dat medewerkers niet
                                    uitgeput raken van tegenslagen of kritiek.
                                </p>
                                <p className="leading-relaxed">
                                    In mijn individuele coaching en mentorschap
                                    zoeken we samen hoe je de kern van het werk
                                    centraal kunt stellen en daar positieve
                                    energie en plezier in kunt organiseren.
                                </p>
                            </div>
                        </div>

                        <div className="lg:pl-8">
                            <img
                                src="/images/stabiliteit-en-diepgang.jpeg"
                                alt="Stabiliteit en diepgang in coaching"
                                className="h-full w-full rounded-2xl object-cover shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="bg-white py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <h2 className="mb-8 text-4xl font-bold text-slate-900 sm:text-5xl">
                            Wat maakt individuele coaching uniek?
                        </h2>
                        <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-600">
                            Persoonlijke begeleiding die aansluit bij jouw
                            specifieke uitdagingen en ambities in de publieke
                            sector.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        {coachingBenefits.map((benefit, index) => (
                            <div key={index} className="flex items-start">
                                <div className="mr-4 mt-1 flex-shrink-0">
                                    <div className="rounded-full bg-gold-100 p-2">
                                        <CheckCircle className="h-6 w-6 text-gold-600" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="mb-3 text-xl font-semibold text-slate-900">
                                        {benefit.title}
                                    </h3>
                                    <p className="leading-relaxed text-slate-600">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 py-20 text-white">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <h2 className="mb-8 text-4xl font-bold sm:text-5xl">
                            Samen werken aan groei
                        </h2>
                        <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-200">
                            Een persoonlijke aanpak waarin uw ervaring en mijn
                            expertise samenkomen voor duurzame ontwikkeling.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        <div className="rounded-none bg-white bg-opacity-10 p-8 backdrop-blur-sm">
                            <div className="mb-6 flex justify-center">
                                <div className="rounded-2xl bg-gold-400/20 p-4">
                                    <Compass className="h-8 w-8 text-gold-400" />
                                </div>
                            </div>
                            <h3 className="mb-4 text-center text-xl font-semibold">
                                Inventarisatie
                            </h3>
                            <p className="text-center leading-relaxed text-slate-200">
                                Samen verkennen we uw huidige situatie,
                                uitdagingen en ambities om een duidelijk beeld
                                te krijgen van waar u staat.
                            </p>
                        </div>

                        <div className="rounded-none bg-white bg-opacity-10 p-8 backdrop-blur-sm">
                            <div className="mb-6 flex justify-center">
                                <div className="rounded-2xl bg-gold-400/20 p-4">
                                    <Target className="h-8 w-8 text-gold-400" />
                                </div>
                            </div>
                            <h3 className="mb-4 text-center text-xl font-semibold">
                                Ontwikkeling
                            </h3>
                            <p className="text-center leading-relaxed text-slate-200">
                                Door gerichte gesprekken en praktische
                                oefeningen werken we aan concrete verbeteringen
                                in uw leiderschapsaanpak.
                            </p>
                        </div>

                        <div className="rounded-none bg-white bg-opacity-10 p-8 backdrop-blur-sm">
                            <div className="mb-6 flex justify-center">
                                <div className="rounded-2xl bg-gold-400/20 p-4">
                                    <CheckCircle className="h-8 w-8 text-gold-400" />
                                </div>
                            </div>
                            <h3 className="mb-4 text-center text-xl font-semibold">
                                Implementatie
                            </h3>
                            <p className="text-center leading-relaxed text-slate-200">
                                U past de nieuwe inzichten direct toe in uw
                                werk, met continue begeleiding en evaluatie van
                                de voortgang.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="bg-gold-50 py-20">
                <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                    <h2 className="mb-6 text-4xl font-bold text-slate-900 sm:text-5xl">
                        Klaar voor persoonlijke ontwikkeling?
                    </h2>
                    <p className="mb-10 text-xl leading-relaxed text-slate-600">
                        Neem contact op voor een vrijblijvend
                        kennismakingsgesprek waarin we bespreken hoe individuele
                        coaching u kan helpen bij uw uitdagingen.
                    </p>

                    <a
                        href="/contact"
                        className="inline-flex transform items-center rounded-none bg-white px-10 py-5 font-semibold text-slate-800 shadow-lg transition-colors duration-200 hover:-translate-y-1 hover:bg-gray-100 hover:shadow-xl"
                    >
                        <MessageSquare className="mr-3 h-5 w-5" />
                        <span>Kennismakingsgesprek plannen</span>
                        <ArrowRight className="ml-3 h-5 w-5" />
                    </a>
                </div>
            </section>
        </>
    );
};

export default IndividueleTrajecten;
