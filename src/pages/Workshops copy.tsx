import {
    Users,
    Clock,
    Target,
    CheckCircle,
    ArrowRight,
    Lightbulb,
    MessageSquare,
    Zap,
} from 'lucide-react';

const Workshops = () => {
    const workshops = [
        {
            title: 'Authentiek Leiderschap',
            duration: '1 dag',
            participants: '8-15',
            description:
                'Ontdek uw persoonlijke leiderschapsstijl en leer authentiek te leiden vanuit uw kernwaarden.',
            topics: [
                'Persoonlijke waarden exploratie',
                'Leiderschapsstijl assessment',
                'Authentieke communicatie',
                'Praktijkcases',
            ],
        },
        {
            title: 'Effectieve Teamdynamiek',
            duration: '2 dagen',
            participants: '6-12',
            description:
                'Versterk de samenwerking en prestatie van uw team door beter begrip van teamdynamiek.',
            topics: [
                'Teamrollen & gedrag',
                'Communicatiepatronen',
                'Conflicthantering',
                'Team coaching tools',
            ],
        },
        {
            title: 'Strategische Communicatie',
            duration: '1 dag',
            participants: '10-20',
            description:
                'Ontwikkel vaardigheden om complexe boodschappen helder over te brengen aan verschillende doelgroepen.',
            topics: [
                'Stakeholder analyse',
                'Boodschap structuur',
                'Presentatietechnieken',
                'Non-verbale communicatie',
            ],
        },
        {
            title: 'Verandering Leiden',
            duration: '2 dagen',
            participants: '8-16',
            description:
                'Leer hoe u succesvol veranderingsprocessen kunt leiden in de publieke sector.',
            topics: [
                'Change management modellen',
                'Weerstand omgaan',
                'Participatie strategieën',
                'Implementatie planning',
            ],
        },
        {
            title: 'Politieke Sensitiviteit',
            duration: '1 dag',
            participants: '6-12',
            description:
                'Ontwikkel politieke intelligentie en leer effectief navigeren in politiek-ambtelijke verhoudingen.',
            topics: [
                'Politiek-ambtelijke verhoudingen',
                'Stakeholder mapping',
                'Timing & momentum',
                'Adviseren onder druk',
            ],
        },
        {
            title: 'Besluitvorming onder Druk',
            duration: '1 dag',
            participants: '8-15',
            description:
                'Versterk uw besluitvormingsvaardigheden in complexe en tijdkritieke situaties.',
            topics: [
                'Besluitvormingsmodellen',
                'Informatie evaluatie',
                'Risicoanalyse',
                'Crisis besluitvorming',
            ],
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-gold-800 to-gold-900 text-white">
                <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="mb-6 text-4xl font-bold lg:text-5xl">
                            Workshops
                        </h1>
                        <p className="mx-auto mb-8 max-w-3xl text-xl text-gold-100">
                            Interactieve leermodules voor specifieke
                            leiderschapsvaardigheden. Van halve dag tot
                            meerdaagse intensieven, altijd praktisch en direct
                            toepasbaar.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <div className="flex items-center rounded-full bg-gold-700 px-4 py-2">
                                <Users className="mr-2 h-5 w-5" />
                                <span>Interactief</span>
                            </div>
                            <div className="flex items-center rounded-full bg-gold-600 px-4 py-2">
                                <Lightbulb className="mr-2 h-5 w-5" />
                                <span>Praktisch</span>
                            </div>
                            <div className="flex items-center rounded-full bg-gold-600 px-4 py-2">
                                <Zap className="mr-2 h-5 w-5" />
                                <span>Direct Toepasbaar</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Workshop Benefits */}
            <section className="bg-white py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold text-gold-800">
                            Waarom Onze Workshops?
                        </h2>
                        <p className="mx-auto max-w-4xl text-xl leading-relaxed text-gray-600">
                            Onze workshops combineren bewezen
                            leiderschapstheorieën met praktische oefeningen en
                            casestudies uit de publieke sector. Elke workshop is
                            ontworpen voor maximale participatie en directe
                            toepasbaarheid.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                        <div className="text-center">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold-100">
                                <Target className="h-8 w-8 text-gold-600" />
                            </div>
                            <h3 className="mb-3 font-bold text-gold-800">
                                Gerichte Inhoud
                            </h3>
                            <p className="text-gray-600">
                                Elke workshop is specifiek ontworpen voor de
                                unieke uitdagingen van de publieke sector.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold-100">
                                <Users className="h-8 w-8 text-gold-600" />
                            </div>
                            <h3 className="mb-3 font-bold text-gold-800">
                                Interactieve Aanpak
                            </h3>
                            <p className="text-gray-600">
                                Maximale participatie door rollenspel,
                                groepsoefeningen en praktijkcases.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold-100">
                                <MessageSquare className="h-8 w-8 text-gold-600" />
                            </div>
                            <h3 className="mb-3 font-bold text-gold-800">
                                Peer Learning
                            </h3>
                            <p className="text-gray-600">
                                Leer van elkaar door ervaringen delen en samen
                                oplossingen ontwikkelen.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
                                <Zap className="h-8 w-8 text-slate-600" />
                            </div>
                            <h3 className="mb-3 font-bold text-gold-800">
                                Direct Toepasbaar
                            </h3>
                            <p className="text-gray-600">
                                Concrete tools en technieken die u direct kunt
                                gebruiken in uw dagelijkse werk.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Workshop Overview */}
            <section className="bg-gray-50 py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold text-gold-800">
                            Ons Workshop Aanbod
                        </h2>
                        <p className="mx-auto max-w-3xl text-xl text-gray-600">
                            Kies uit onze selectie van bewezen workshops of laat
                            ons een workshop op maat ontwikkelen voor uw
                            specifieke behoeften.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        {workshops.map((workshop, index) => (
                            <div
                                key={index}
                                className="overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
                            >
                                <div className="p-6">
                                    <div className="mb-4 flex items-center justify-between">
                                        <h3 className="text-xl font-bold text-gold-800">
                                            {workshop.title}
                                        </h3>
                                        <div className="flex space-x-4 text-sm text-gray-500">
                                            <div className="flex items-center">
                                                <Clock className="mr-1 h-4 w-4" />
                                                {workshop.duration}
                                            </div>
                                            <div className="flex items-center">
                                                <Users className="mr-1 h-4 w-4" />
                                                {workshop.participants}
                                            </div>
                                        </div>
                                    </div>

                                    <p className="mb-4 leading-relaxed text-gray-600">
                                        {workshop.description}
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="mb-2 font-semibold text-gold-800">
                                            Hoofdonderwerpen:
                                        </h4>
                                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                                            {workshop.topics.map(
                                                (topic, topicIndex) => (
                                                    <div
                                                        key={topicIndex}
                                                        className="flex items-start space-x-2"
                                                    >
                                                        <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-500" />
                                                        <span className="text-sm text-gray-600">
                                                            {topic}
                                                        </span>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t bg-gray-50 px-6 py-4">
                                    <a
                                        href="/contact"
                                        className="inline-flex items-center font-medium text-gold-600 transition-colors hover:text-gold-600"
                                    >
                                        <span>Meer informatie</span>
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Custom Workshops */}
            <section className="bg-white py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                        <div>
                            <h2 className="mb-6 text-3xl font-bold text-gold-800">
                                Workshops op Maat
                            </h2>
                            <p className="mb-6 text-lg leading-relaxed text-gray-600">
                                Elke organisatie heeft unieke uitdagingen.
                                Daarom ontwikkelen we graag workshops die
                                specifiek aansluiten bij uw behoeften, cultuur
                                en doelstellingen.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="mt-1 h-6 w-6 text-gold-500" />
                                    <div>
                                        <h3 className="font-semibold text-gold-800">
                                            Behoefteanalyse
                                        </h3>
                                        <p className="text-gray-600">
                                            We starten met een grondige analyse
                                            van uw specifieke situatie
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="mt-1 h-6 w-6 text-gold-500" />
                                    <div>
                                        <h3 className="font-semibold text-gold-800">
                                            Maatwerk Ontwerp
                                        </h3>
                                        <p className="text-gray-600">
                                            Workshops volledig afgestemd op uw
                                            organisatie en deelnemers
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="mt-1 h-6 w-6 text-gold-500" />
                                    <div>
                                        <h3 className="font-semibold text-gold-800">
                                            Praktijkcases
                                        </h3>
                                        <p className="text-gray-600">
                                            Gebruik van echte situaties uit uw
                                            organisatie als leermiddel
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="mt-1 h-6 w-6 text-gold-500" />
                                    <div>
                                        <h3 className="font-semibold text-gold-800">
                                            Follow-up Ondersteuning
                                        </h3>
                                        <p className="text-gray-600">
                                            Begeleiding bij implementatie van
                                            geleerde vaardigheden
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <img
                                src="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt="Custom Workshop Development"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Formats & Pricing */}
            <section className="bg-gray-50 py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold text-gold-800">
                            Flexibele Formaten
                        </h2>
                        <p className="mx-auto max-w-3xl text-xl text-gray-600">
                            Onze workshops zijn beschikbaar in verschillende
                            formaten om aan te sluiten bij uw agenda en budget.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        <div className="rounded-lg border border-gold-200 bg-white p-6 shadow-md">
                            <div className="mb-6 text-center">
                                <Clock className="mx-auto mb-3 h-12 w-12 text-gold-600" />
                                <h3 className="text-xl font-bold text-gold-800">
                                    Halve Dag
                                </h3>
                                <p className="text-gray-600">
                                    3-4 uur intensieve training
                                </p>
                            </div>
                            <ul className="mb-6 space-y-2 text-gray-600">
                                <li>• Focus op 1 kernvaardigheid</li>
                                <li>• Ideaal voor introductie</li>
                                <li>• Praktische oefeningen</li>
                                <li>• Directe toepasbaarheid</li>
                            </ul>
                            <div className="text-center">
                                <p className="mb-2 text-2xl font-bold text-gold-800">
                                    Vanaf €1.250
                                </p>
                                <p className="text-sm text-gray-500">
                                    Excl. BTW, max 15 deelnemers
                                </p>
                            </div>
                        </div>

                        <div className="rounded-lg border-2 border-gold-400 bg-white p-6 shadow-md">
                            <div className="mb-6 text-center">
                                <Target className="mx-auto mb-3 h-12 w-12 text-gold-600" />
                                <h3 className="text-xl font-bold text-gold-800">
                                    Hele Dag
                                </h3>
                                <p className="text-gray-600">
                                    6-7 uur diepgaande training
                                </p>
                                <div className="mt-2 inline-block rounded-full bg-gold-100 px-2 py-1 text-xs font-medium text-gold-800">
                                    POPULAIR
                                </div>
                            </div>
                            <ul className="mb-6 space-y-2 text-gray-600">
                                <li>• Uitgebreide vaardighedenset</li>
                                <li>• Veel interactie & praktijk</li>
                                <li>• Persoonlijke actieplannen</li>
                                <li>• Netwerkmogelijkheden</li>
                            </ul>
                            <div className="text-center">
                                <p className="mb-2 text-2xl font-bold text-gold-800">
                                    Vanaf €2.250
                                </p>
                                <p className="text-sm text-gray-500">
                                    Excl. BTW, max 15 deelnemers
                                </p>
                            </div>
                        </div>

                        <div className="rounded-lg border border-gold-200 bg-white p-6 shadow-md">
                            <div className="mb-6 text-center">
                                <Users className="mx-auto mb-3 h-12 w-12 text-gold-600" />
                                <h3 className="text-xl font-bold text-gold-800">
                                    Meerdaags
                                </h3>
                                <p className="text-gray-600">
                                    2-3 dagen intensieve ontwikkeling
                                </p>
                            </div>
                            <ul className="mb-6 space-y-2 text-gray-600">
                                <li>• Gedegen vaardighedenontwikkeling</li>
                                <li>• Individuele coaching momenten</li>
                                <li>• Follow-up sessies</li>
                                <li>• Implementatie ondersteuning</li>
                            </ul>
                            <div className="text-center">
                                <p className="mb-2 text-2xl font-bold text-gold-800">
                                    Op maat
                                </p>
                                <p className="text-sm text-gray-500">
                                    Prijs op basis van inhoud
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gold-800 py-16">
                <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                    <h2 className="mb-6 text-3xl font-bold text-white">
                        Klaar om Uw Team te Ontwikkelen?
                    </h2>
                    <p className="mb-8 text-xl leading-relaxed text-gold-100">
                        Investeer in de leiderschapsvaardigheden van uw team.
                        Onze workshops leveren direct toepasbare resultaten en
                        duurzame gedragsverandering.
                    </p>

                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                        <a
                            href="/contact"
                            className="inline-flex transform items-center rounded-lg bg-gold-500 px-8 py-4 font-semibold text-white shadow-lg transition-colors duration-200 hover:-translate-y-1 hover:bg-gold-600 hover:shadow-xl"
                        >
                            <Lightbulb className="mr-2 h-5 w-5" />
                            <span>Boek een workshop</span>
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>

                        <a
                            href="/contact"
                            className="inline-flex transform items-center rounded-lg bg-white px-8 py-4 font-semibold text-gold-800 shadow-lg transition-colors duration-200 hover:-translate-y-1 hover:bg-gray-100 hover:shadow-xl"
                        >
                            <MessageSquare className="mr-2 h-5 w-5" />
                            <span>Vraag maatwerk aan</span>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Workshops;
