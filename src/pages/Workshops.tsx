import React from 'react';
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
        <div className='pt-16'>
            {/* Hero Section */}
            <section className='bg-gradient-to-r from-gold-800 to-gold-900 text-white'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
                    <div className='text-center'>
                        <h1 className='text-4xl lg:text-5xl font-bold mb-6'>
                            Workshops
                        </h1>
                        <p className='text-xl text-gold-100 mb-8 max-w-3xl mx-auto'>
                            Interactieve leermodules voor specifieke
                            leiderschapsvaardigheden. Van halve dag tot
                            meerdaagse intensieven, altijd praktisch en direct
                            toepasbaar.
                        </p>
                        <div className='flex flex-wrap justify-center gap-4'>
                            <div className='flex items-center bg-gold-700 px-4 py-2 rounded-full'>
                                <Users className='h-5 w-5 mr-2' />
                                <span>Interactief</span>
                            </div>
                            <div className='flex items-center bg-gold-600 px-4 py-2 rounded-full'>
                                <Lightbulb className='h-5 w-5 mr-2' />
                                <span>Praktisch</span>
                            </div>
                            <div className='flex items-center bg-gold-600 px-4 py-2 rounded-full'>
                                <Zap className='h-5 w-5 mr-2' />
                                <span>Direct Toepasbaar</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Workshop Benefits */}
            <section className='py-16 bg-white'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center mb-12'>
                        <h2 className='text-3xl font-bold text-gold-800 mb-4'>
                            Waarom Onze Workshops?
                        </h2>
                        <p className='text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed'>
                            Onze workshops combineren bewezen
                            leiderschapstheorieën met praktische oefeningen en
                            casestudies uit de publieke sector. Elke workshop is
                            ontworpen voor maximale participatie en directe
                            toepasbaarheid.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                        <div className='text-center'>
                            <div className='bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                                <Target className='h-8 w-8 text-gold-600' />
                            </div>
                            <h3 className='font-bold text-gold-800 mb-3'>
                                Gerichte Inhoud
                            </h3>
                            <p className='text-gray-600'>
                                Elke workshop is specifiek ontworpen voor de
                                unieke uitdagingen van de publieke sector.
                            </p>
                        </div>

                        <div className='text-center'>
                            <div className='bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                                <Users className='h-8 w-8 text-gold-600' />
                            </div>
                            <h3 className='font-bold text-gold-800 mb-3'>
                                Interactieve Aanpak
                            </h3>
                            <p className='text-gray-600'>
                                Maximale participatie door rollenspel,
                                groepsoefeningen en praktijkcases.
                            </p>
                        </div>

                        <div className='text-center'>
                            <div className='bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                                <MessageSquare className='h-8 w-8 text-gold-600' />
                            </div>
                            <h3 className='font-bold text-gold-800 mb-3'>
                                Peer Learning
                            </h3>
                            <p className='text-gray-600'>
                                Leer van elkaar door ervaringen delen en samen
                                oplossingen ontwikkelen.
                            </p>
                        </div>

                        <div className='text-center'>
                            <div className='bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                                <Zap className='h-8 w-8 text-slate-600' />
                            </div>
                            <h3 className='font-bold text-gold-800 mb-3'>
                                Direct Toepasbaar
                            </h3>
                            <p className='text-gray-600'>
                                Concrete tools en technieken die u direct kunt
                                gebruiken in uw dagelijkse werk.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Workshop Overview */}
            <section className='py-16 bg-gray-50'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center mb-12'>
                        <h2 className='text-3xl font-bold text-gold-800 mb-4'>
                            Ons Workshop Aanbod
                        </h2>
                        <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                            Kies uit onze selectie van bewezen workshops of laat
                            ons een workshop op maat ontwikkelen voor uw
                            specifieke behoeften.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        {workshops.map((workshop, index) => (
                            <div
                                key={index}
                                className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'
                            >
                                <div className='p-6'>
                                    <div className='flex items-center justify-between mb-4'>
                                        <h3 className='text-xl font-bold text-gold-800'>
                                            {workshop.title}
                                        </h3>
                                        <div className='flex space-x-4 text-sm text-gray-500'>
                                            <div className='flex items-center'>
                                                <Clock className='h-4 w-4 mr-1' />
                                                {workshop.duration}
                                            </div>
                                            <div className='flex items-center'>
                                                <Users className='h-4 w-4 mr-1' />
                                                {workshop.participants}
                                            </div>
                                        </div>
                                    </div>

                                    <p className='text-gray-600 mb-4 leading-relaxed'>
                                        {workshop.description}
                                    </p>

                                    <div className='mb-4'>
                                        <h4 className='font-semibold text-gold-800 mb-2'>
                                            Hoofdonderwerpen:
                                        </h4>
                                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                                            {workshop.topics.map(
                                                (topic, topicIndex) => (
                                                    <div
                                                        key={topicIndex}
                                                        className='flex items-start space-x-2'
                                                    >
                                                        <CheckCircle className='h-4 w-4 text-gold-500 mt-0.5 flex-shrink-0' />
                                                        <span className='text-sm text-gray-600'>
                                                            {topic}
                                                        </span>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-gray-50 px-6 py-4 border-t'>
                                    <a
                                        href='/contact'
                                        className='inline-flex items-center text-gold-600 hover:text-gold-600 font-medium transition-colors'
                                    >
                                        <span>Meer informatie</span>
                                        <ArrowRight className='ml-2 h-4 w-4' />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Custom Workshops */}
            <section className='py-16 bg-white'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                        <div>
                            <h2 className='text-3xl font-bold text-gold-800 mb-6'>
                                Workshops op Maat
                            </h2>
                            <p className='text-lg text-gray-600 mb-6 leading-relaxed'>
                                Elke organisatie heeft unieke uitdagingen.
                                Daarom ontwikkelen we graag workshops die
                                specifiek aansluiten bij uw behoeften, cultuur
                                en doelstellingen.
                            </p>

                            <div className='space-y-4'>
                                <div className='flex items-start space-x-3'>
                                    <CheckCircle className='h-6 w-6 text-gold-500 mt-1' />
                                    <div>
                                        <h3 className='font-semibold text-gold-800'>
                                            Behoefteanalyse
                                        </h3>
                                        <p className='text-gray-600'>
                                            We starten met een grondige analyse
                                            van uw specifieke situatie
                                        </p>
                                    </div>
                                </div>
                                <div className='flex items-start space-x-3'>
                                    <CheckCircle className='h-6 w-6 text-gold-500 mt-1' />
                                    <div>
                                        <h3 className='font-semibold text-gold-800'>
                                            Maatwerk Ontwerp
                                        </h3>
                                        <p className='text-gray-600'>
                                            Workshops volledig afgestemd op uw
                                            organisatie en deelnemers
                                        </p>
                                    </div>
                                </div>
                                <div className='flex items-start space-x-3'>
                                    <CheckCircle className='h-6 w-6 text-gold-500 mt-1' />
                                    <div>
                                        <h3 className='font-semibold text-gold-800'>
                                            Praktijkcases
                                        </h3>
                                        <p className='text-gray-600'>
                                            Gebruik van echte situaties uit uw
                                            organisatie als leermiddel
                                        </p>
                                    </div>
                                </div>
                                <div className='flex items-start space-x-3'>
                                    <CheckCircle className='h-6 w-6 text-gold-500 mt-1' />
                                    <div>
                                        <h3 className='font-semibold text-gold-800'>
                                            Follow-up Ondersteuning
                                        </h3>
                                        <p className='text-gray-600'>
                                            Begeleiding bij implementatie van
                                            geleerde vaardigheden
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <img
                                src='https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800'
                                alt='Custom Workshop Development'
                                className='rounded-lg shadow-lg'
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Formats & Pricing */}
            <section className='py-16 bg-gray-50'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center mb-12'>
                        <h2 className='text-3xl font-bold text-gold-800 mb-4'>
                            Flexibele Formaten
                        </h2>
                        <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                            Onze workshops zijn beschikbaar in verschillende
                            formaten om aan te sluiten bij uw agenda en budget.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        <div className='bg-white p-6 rounded-lg shadow-md border border-gold-200'>
                            <div className='text-center mb-6'>
                                <Clock className='h-12 w-12 text-gold-600 mx-auto mb-3' />
                                <h3 className='text-xl font-bold text-gold-800'>
                                    Halve Dag
                                </h3>
                                <p className='text-gray-600'>
                                    3-4 uur intensieve training
                                </p>
                            </div>
                            <ul className='space-y-2 text-gray-600 mb-6'>
                                <li>• Focus op 1 kernvaardigheid</li>
                                <li>• Ideaal voor introductie</li>
                                <li>• Praktische oefeningen</li>
                                <li>• Directe toepasbaarheid</li>
                            </ul>
                            <div className='text-center'>
                                <p className='text-2xl font-bold text-gold-800 mb-2'>
                                    Vanaf €1.250
                                </p>
                                <p className='text-sm text-gray-500'>
                                    Excl. BTW, max 15 deelnemers
                                </p>
                            </div>
                        </div>

                        <div className='bg-white p-6 rounded-lg shadow-md border-2 border-gold-400'>
                            <div className='text-center mb-6'>
                                <Target className='h-12 w-12 text-gold-600 mx-auto mb-3' />
                                <h3 className='text-xl font-bold text-gold-800'>
                                    Hele Dag
                                </h3>
                                <p className='text-gray-600'>
                                    6-7 uur diepgaande training
                                </p>
                                <div className='bg-gold-100 text-gold-800 text-xs font-medium px-2 py-1 rounded-full mt-2 inline-block'>
                                    POPULAIR
                                </div>
                            </div>
                            <ul className='space-y-2 text-gray-600 mb-6'>
                                <li>• Uitgebreide vaardighedenset</li>
                                <li>• Veel interactie & praktijk</li>
                                <li>• Persoonlijke actieplannen</li>
                                <li>• Netwerkmogelijkheden</li>
                            </ul>
                            <div className='text-center'>
                                <p className='text-2xl font-bold text-gold-800 mb-2'>
                                    Vanaf €2.250
                                </p>
                                <p className='text-sm text-gray-500'>
                                    Excl. BTW, max 15 deelnemers
                                </p>
                            </div>
                        </div>

                        <div className='bg-white p-6 rounded-lg shadow-md border border-gold-200'>
                            <div className='text-center mb-6'>
                                <Users className='h-12 w-12 text-gold-600 mx-auto mb-3' />
                                <h3 className='text-xl font-bold text-gold-800'>
                                    Meerdaags
                                </h3>
                                <p className='text-gray-600'>
                                    2-3 dagen intensieve ontwikkeling
                                </p>
                            </div>
                            <ul className='space-y-2 text-gray-600 mb-6'>
                                <li>• Gedegen vaardighedenontwikkeling</li>
                                <li>• Individuele coaching momenten</li>
                                <li>• Follow-up sessies</li>
                                <li>• Implementatie ondersteuning</li>
                            </ul>
                            <div className='text-center'>
                                <p className='text-2xl font-bold text-gold-800 mb-2'>
                                    Op maat
                                </p>
                                <p className='text-sm text-gray-500'>
                                    Prijs op basis van inhoud
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className='py-16 bg-gold-800'>
                <div className='max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8'>
                    <h2 className='text-3xl font-bold text-white mb-6'>
                        Klaar om Uw Team te Ontwikkelen?
                    </h2>
                    <p className='text-xl text-gold-100 mb-8 leading-relaxed'>
                        Investeer in de leiderschapsvaardigheden van uw team.
                        Onze workshops leveren direct toepasbare resultaten en
                        duurzame gedragsverandering.
                    </p>

                    <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                        <a
                            href='/contact'
                            className='inline-flex items-center bg-gold-500 hover:bg-gold-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                        >
                            <Lightbulb className='mr-2 h-5 w-5' />
                            <span>Boek een workshop</span>
                            <ArrowRight className='ml-2 h-5 w-5' />
                        </a>

                        <a
                            href='/contact'
                            className='inline-flex items-center bg-white hover:bg-gray-100 text-gold-800 font-semibold px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                        >
                            <MessageSquare className='mr-2 h-5 w-5' />
                            <span>Vraag maatwerk aan</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Workshops;
