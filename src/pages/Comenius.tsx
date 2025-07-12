import { SEO } from '@/components/SEO';
import {
    Lightbulb,
    Users,
    Heart,
    Handshake,
    CheckCircle,
    ArrowRight,
    Star,
} from 'lucide-react';

const Comenius = () => {
    const courseSchema = {
        '@context': 'https://schema.org',
        '@type': 'Course',
        name: 'Comenius - Leergang Emerging Leaders in de Publieke Sector',
        description:
            'Een transformatieve leergang voor de nieuwe generatie leidinggevenden in de publieke sector. Focus op visie, waarden, cocreatie en het herstel van vertrouwen.',
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
            audienceType: 'Emerging leaders in de publieke sector',
        },
    };

    return (
        <>
            <SEO
                title="Comenius - Leergang Emerging Leaders in de Publieke Sector"
                description="Een transformatieve leergang voor de nieuwe generatie leidinggevenden in de publieke sector. Focus op visie, waarden, cocreatie en het herstel van vertrouwen."
                keywords="emerging leaders, publieke sector leiderschap, leergang leiderschap, jong leiderschap, overheid training, cocreatie"
                structuredData={courseSchema}
            />
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-slate-800 to-slate-900 text-white">
                <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                        <div>
                            <h1 className="mb-6 text-4xl font-bold lg:text-5xl">
                                Comenius
                            </h1>
                            <p className="mb-6 text-xl text-slate-100">
                                Leergang 'Emerging Leaders in de Publieke
                                Sector'
                            </p>
                            <p className="mb-8 text-lg leading-relaxed">
                                Een transformatieve leergang voor de nieuwe
                                generatie leidinggevenden in de publieke sector.
                                Focus op visie, waarden, cocreatie en het
                                herstel van vertrouwen tussen burger en
                                overheid.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center rounded-full bg-slate-700 px-4 py-2">
                                    <Star className="mr-2 h-5 w-5" />
                                    <span>Flagship Programma</span>
                                </div>
                                <div className="flex items-center rounded-full bg-gold-800 px-4 py-2">
                                    <Users className="mr-2 h-5 w-5" />
                                    <span>Emerging Leaders</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="lecture.jpeg"
                                alt="Emerging Leaders Program"
                                className="rounded-lg shadow-2xl"
                            />
                            <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="bg-white py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold text-gold-800">
                            De Nieuwe Generatie Leiders
                        </h2>
                        <p className="mx-auto max-w-4xl text-xl leading-relaxed text-gray-600">
                            De publieke sector heeft behoefte aan leiders die
                            anders durven te denken, verbinding maken en
                            vertrouwen herstellen. Het Comenius programma
                            ontwikkelt precies deze vaardigheden.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        <div className="text-center">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
                                <Lightbulb className="h-8 w-8 text-slate-600" />
                            </div>
                            <h3 className="mb-3 font-bold text-slate-800">
                                Visie
                            </h3>
                            <p className="text-gold-800">
                                Ontwikkel een heldere visie op de toekomst van
                                de publieke sector en uw rol daarin.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
                                <Heart className="h-8 w-8 text-gold-900" />
                            </div>
                            <h3 className="mb-3 font-bold text-gold-800">
                                Waarden
                            </h3>
                            <p className="text-gray-600">
                                Verdiep uw begrip van kernwaarden en integreer
                                deze in uw dagelijkse leiderschapsgedrag.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
                                <Users className="h-8 w-8 text-slate-600" />
                            </div>
                            <h3 className="mb-3 font-bold text-slate-800">
                                Cocreatie
                            </h3>
                            <p className="text-gold-800">
                                Leer samen te werken met burgers, collega's en
                                stakeholders voor duurzame oplossingen.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
                                <Handshake className="text-gold-6800 h-8 w-8" />
                            </div>
                            <h3 className="mb-3 font-bold text-gold-800">
                                Vertrouwen
                            </h3>
                            <p className="text-gray-600">
                                Herstel en versterk het vertrouwen tussen
                                overheid en samenleving door authentiek
                                leiderschap.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Program Content */}
            <section className="bg-gray-50 py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                        <div>
                            <h2 className="mb-6 text-3xl font-bold text-slate-800">
                                Waarom Comenius?
                            </h2>
                            <p className="mb-6 text-lg leading-relaxed text-gray-600">
                                Genoemd naar de grote pedagoog en filosoof Jan
                                Amos Comenius, staat dit programma voor
                                vernieuwend denken en leren. Net zoals Comenius
                                de basis legde voor modern onderwijs, leggen wij
                                de basis voor modern leiderschap in de publieke
                                sector.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="mt-1 h-6 w-6 text-slate-500" />
                                    <div>
                                        <h3 className="font-semibold text-slate-800">
                                            Toekomstgericht Denken
                                        </h3>
                                        <p className="text-gray-600">
                                            Ontwikkel een strategische mindset
                                            voor de uitdagingen van morgen
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="mt-1 h-6 w-6 text-slate-500" />
                                    <div>
                                        <h3 className="font-semibold text-slate-800">
                                            Burgerbetrokkenheid
                                        </h3>
                                        <p className="text-gray-600">
                                            Leer hoe u burgers effectief kunt
                                            betrekken bij beleid en uitvoering
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="mt-1 h-6 w-6 text-slate-500" />
                                    <div>
                                        <h3 className="font-semibold text-slate-800">
                                            Innovatief Leiderschap
                                        </h3>
                                        <p className="text-gray-600">
                                            Ontwikkel vaardigheden om innovatie
                                            en verandering te leiden
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="mt-1 h-6 w-6 text-slate-500" />
                                    <div>
                                        <h3 className="font-semibold text-slate-800">
                                            Netwerk & Peer Learning
                                        </h3>
                                        <p className="text-gray-600">
                                            Bouw een sterk netwerk van
                                            gelijkgestemde professionals
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img
                                src="At-the-Cycle-RaceTrack.jpeg"
                                alt="Comenius Learning Philosophy"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Learning Journey */}
            <section className="bg-white py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold text-slate-800">
                            De Leerreis
                        </h2>
                        <p className="mx-auto max-w-3xl text-xl text-gray-600">
                            Een intensieve 8-maanden durende reis waarin u zich
                            ontwikkelt tot een inspirerende leider voor de
                            publieke sector van de toekomst.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <div className="flex flex-col items-center space-y-6 md:flex-row md:space-x-8 md:space-y-0">
                            <div className="flex-shrink-0">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-600 text-lg font-bold text-white">
                                    1
                                </div>
                            </div>
                            <div className="flex-1 rounded-lg bg-slate-50 p-6">
                                <h3 className="mb-3 font-bold text-slate-800">
                                    Fundament & Visie (Maand 1-2)
                                </h3>
                                <p className="text-gray-600">
                                    Verkenning van persoonlijke waarden,
                                    ontwikkeling van toekomstvisie en
                                    introductie in moderne leiderschapstheorieën
                                    voor de publieke sector.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center space-y-6 md:flex-row md:space-x-8 md:space-y-0">
                            <div className="flex-shrink-0">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-600 text-lg font-bold text-white">
                                    2
                                </div>
                            </div>
                            <div className="flex-1 rounded-lg bg-slate-50 p-6">
                                <h3 className="mb-3 font-bold text-slate-800">
                                    Verbinding & Cocreatie (Maand 3-4)
                                </h3>
                                <p className="text-gray-600">
                                    Praktische vaardigheden voor stakeholder
                                    management, participatie en co-creatie met
                                    burgers en andere partners.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center space-y-6 md:flex-row md:space-x-8 md:space-y-0">
                            <div className="flex-shrink-0">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-600 text-lg font-bold text-white">
                                    3
                                </div>
                            </div>
                            <div className="flex-1 rounded-lg bg-slate-50 p-6">
                                <h3 className="mb-3 font-bold text-slate-800">
                                    Innovatie & Verandering (Maand 5-6)
                                </h3>
                                <p className="text-gray-600">
                                    Leren leiden van innovatie en transformatie
                                    binnen complexe publieke organisaties en
                                    systemen.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center space-y-6 md:flex-row md:space-x-8 md:space-y-0">
                            <div className="flex-shrink-0">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-600 text-lg font-bold text-white">
                                    4
                                </div>
                            </div>
                            <div className="flex-1 rounded-lg bg-slate-50 p-6">
                                <h3 className="mb-3 font-bold text-slate-800">
                                    Impact & Implementatie (Maand 7-8)
                                </h3>
                                <p className="text-gray-600">
                                    Persoonlijk ontwikkelplan, implementatie in
                                    de praktijk en voorbereiding op uw rol als
                                    emerging leader.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Program Details & CTA */}
            <section className="bg-slate-800 py-16">
                <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                    <h2 className="mb-6 text-3xl font-bold text-gold-800">
                        Klaar om de leider van morgen te worden?
                    </h2>
                    <p className="mb-8 text-xl leading-relaxed text-slate-100">
                        Het Comenius programma is uw springplank naar impactvol
                        leiderschap in de publieke sector. Sluit u aan bij de
                        nieuwe generatie.
                    </p>

                    <div className="mb-8 rounded-lg bg-white bg-opacity-10 p-8 backdrop-blur-sm">
                        <div className="grid grid-cols-1 gap-6 text-white md:grid-cols-3">
                            <div>
                                <h3 className="mb-2 font-semibold">Duur</h3>
                                <p className="text-slate-100">8 maanden</p>
                            </div>
                            <div>
                                <h3 className="mb-2 font-semibold">
                                    Deelnemers
                                </h3>
                                <p className="text-slate-100">
                                    12-16 emerging leaders
                                </p>
                            </div>
                            <div>
                                <h3 className="mb-2 font-semibold">Format</h3>
                                <p className="text-slate-100">
                                    Blended learning
                                </p>
                            </div>
                        </div>
                    </div>

                    <a
                        href="/contact"
                        className="inline-flex transform items-center rounded-lg bg-gold-950 px-8 py-4 font-semibold text-white shadow-lg transition-colors duration-200 hover:-translate-y-1 hover:bg-gold-700 hover:shadow-xl"
                    >
                        <span>Schrijf u in voor Comenius</span>
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                </div>
            </section>
        </>
    );
};

export default Comenius;
