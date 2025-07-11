import React from 'react';
import {
    TrendingUp,
    Users,
    Award,
    CheckCircle,
    ArrowRight,
    Target,
    Briefcase,
} from 'lucide-react';

const MinisterieBZK = () => {
    return (
        <>
            {/* Hero Section */}
            <section className='bg-gradient-to-r from-gold-800 to-gold-900 text-white'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                        <div>
                            <h1 className='text-4xl lg:text-5xl font-bold mb-6'>
                                BZK Programma
                            </h1>
                            <p className='text-xl text-gold-100 mb-6'>
                                Programma Doorgroeien in Leiderschap
                            </p>
                            <p className='text-lg leading-relaxed mb-8'>
                                Een uitgebreid ontwikkelingspad voor ervaren
                                professionals die de volgende stap in hun
                                leiderschapscarrière willen zetten binnen de
                                publieke sector. Focus op strategisch
                                leiderschap en organisationele impact.
                            </p>
                            <div className='flex flex-wrap gap-4'>
                                <div className='flex items-center bg-slate-600 px-4 py-2 rounded-full'>
                                    <TrendingUp className='h-5 w-5 mr-2' />
                                    <span>Carrière Acceleratie</span>
                                </div>
                                <div className='flex items-center bg-gold-100 px-4 py-2 rounded-full text-gold-900'>
                                    <Award className='h-5 w-5 mr-2' />
                                    <span>Senior Professionals</span>
                                </div>
                            </div>
                        </div>
                        <div className='relative'>
                            <img
                                src='ruins-ancient-city-tharros.webp'
                                alt='Leadership Development Program'
                                className='rounded-lg shadow-2xl'
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-gold-900/50 to-transparent rounded-lg'></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Career Transition Focus */}
            <section className='py-16 bg-white'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center mb-12'>
                        <h2 className='text-3xl font-bold text-gold-800 mb-4'>
                            De Volgende Stap in Uw Carrière
                        </h2>
                        <p className='text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed'>
                            Het BZK programma is speciaal ontworpen voor ervaren
                            professionals die klaar zijn voor meer
                            verantwoordelijkheid, grotere impact en strategisch
                            leiderschap binnen de publieke sector.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        <div className='bg-gradient-to-br from-gold-50 to-gold-100 p-6 rounded-lg border border-gold-200'>
                            <div className='bg-gold-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
                                <Target className='h-6 w-6 text-white' />
                            </div>
                            <h3 className='font-bold text-gold-800 mb-3'>
                                Strategisch Denken
                            </h3>
                            <p className='text-gray-600'>
                                Ontwikkel een strategische mindset voor complexe
                                organisationele uitdagingen en lange-termijn
                                visie ontwikkeling.
                            </p>
                        </div>

                        <div className='bg-gradient-to-br from-gold-50 to-gold-100 p-6 rounded-lg border border-gold-200'>
                            <div className='bg-gold-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
                                <Users className='h-6 w-6 text-white' />
                            </div>
                            <h3 className='font-bold text-gold-800 mb-3'>
                                Organisatie Leiderschap
                            </h3>
                            <p className='text-gray-600'>
                                Leer hoe u teams, afdelingen en hele
                                organisaties kunt inspireren en leiden door
                                complexe veranderingsprocessen.
                            </p>
                        </div>

                        <div className='bg-gradient-to-br from-gold-50 to-gold-100 p-6 rounded-lg border border-gold-200'>
                            <div className='bg-gold-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
                                <Briefcase className='h-6 w-6 text-white' />
                            </div>
                            <h3 className='font-bold text-gold-800 mb-3'>
                                Executive Presence
                            </h3>
                            <p className='text-gray-600'>
                                Ontwikkel de uitstraling,
                                communicatievaardigheden en invloed die horen
                                bij senior leiderschapsposities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Career Pathway */}
            <section className='py-16 bg-gray-50'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                        <div>
                            <h2 className='text-3xl font-bold text-gold-800 mb-6'>
                                Uw Carrièrepad Versnellen
                            </h2>
                            <p className='text-lg text-gray-600 mb-8 leading-relaxed'>
                                Het BZK programma erkent dat ervaren
                                professionals unieke behoeften hebben. We
                                richten ons op de specifieke uitdagingen en
                                kansen die komen kijken bij doorgroei naar
                                senior leiderschapsposities.
                            </p>

                            <div className='space-y-4'>
                                <div className='flex items-start space-x-3'>
                                    <CheckCircle className='h-6 w-6 text-gold-500 mt-1' />
                                    <div>
                                        <h3 className='font-semibold text-gold-800'>
                                            Van Specialist naar Generalist
                                        </h3>
                                        <p className='text-gray-600'>
                                            Ontwikkel brede
                                            leiderschapsvaardigheden naast uw
                                            vakinhoudelijke expertise
                                        </p>
                                    </div>
                                </div>
                                <div className='flex items-start space-x-3'>
                                    <CheckCircle className='h-6 w-6 text-gold-500 mt-1' />
                                    <div>
                                        <h3 className='font-semibold text-gold-800'>
                                            Politiek-Bestuurlijke Sensitiviteit
                                        </h3>
                                        <p className='text-gray-600'>
                                            Leer navigeren in de complexe wereld
                                            van politiek en bestuur
                                        </p>
                                    </div>
                                </div>
                                <div className='flex items-start space-x-3'>
                                    <CheckCircle className='h-6 w-6 text-gold-500 mt-1' />
                                    <div>
                                        <h3 className='font-semibold text-gold-800'>
                                            Organisatie Transformatie
                                        </h3>
                                        <p className='text-gray-600'>
                                            Krijg tools om grote
                                            veranderingstrajecten succesvol te
                                            leiden
                                        </p>
                                    </div>
                                </div>
                                <div className='flex items-start space-x-3'>
                                    <CheckCircle className='h-6 w-6 text-gold-500 mt-1' />
                                    <div>
                                        <h3 className='font-semibold text-gold-800'>
                                            Netwerk & Invloed
                                        </h3>
                                        <p className='text-gray-600'>
                                            Bouw strategische relaties en
                                            vergroot uw invloed binnen en buiten
                                            de organisatie
                                        </p>
                                    </div>
                                </div>
                                <div className='flex items-start space-x-3'>
                                    <CheckCircle className='h-6 w-6 text-gold-500 mt-1' />
                                    <div>
                                        <h3 className='font-semibold text-gold-800'>
                                            Persoonlijke Board of Directors
                                        </h3>
                                        <p className='text-gray-600'>
                                            Ontwikkel een netwerk van mentoren
                                            en adviseurs voor uw carrière
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img
                                src='JeanMetzingerPainter.jpg'
                                alt='Executive Leadership Development'
                                className='rounded-lg shadow-lg'
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Program Components */}
            <section className='py-16 bg-white'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center mb-12'>
                        <h2 className='text-3xl font-bold text-gold-800 mb-4'>
                            Programma Componenten
                        </h2>
                        <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                            Een intensief 6-maanden programma met focus op
                            praktische toepassing en directe impact op uw
                            leiderschapseffectiviteit.
                        </p>
                    </div>

                    <div className='space-y-8'>
                        <div className='bg-gradient-to-r from-gold-50 to-white p-8 rounded-lg border border-gold-200'>
                            <div className='flex items-center space-x-4 mb-4'>
                                <div className='bg-gold-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold'>
                                    1
                                </div>
                                <h3 className='text-xl font-bold text-gold-800'>
                                    Executive Assessment & 360° Feedback
                                </h3>
                            </div>
                            <p className='text-gray-600 mb-4'>
                                Uitgebreide analyse van uw huidige
                                leiderschapseffectiviteit, sterke punten en
                                ontwikkelpunten. Inclusief feedback van
                                collega's, medewerkers en stakeholders.
                            </p>
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-sm'>
                                <div className='bg-white p-3 rounded border'>
                                    <strong>Assessment Tools:</strong>{' '}
                                    Psychometrische tests, leiderschapsstijl
                                    analyse
                                </div>
                                <div className='bg-white p-3 rounded border'>
                                    <strong>360° Feedback:</strong>{' '}
                                    Systematische feedback van stakeholders
                                </div>
                                <div className='bg-white p-3 rounded border'>
                                    <strong>Ontwikkelplan:</strong> Persoonlijk
                                    roadmap voor groei
                                </div>
                            </div>
                        </div>

                        <div className='bg-gradient-to-r from-gold-50 to-white p-8 rounded-lg border border-gold-200'>
                            <div className='flex items-center space-x-4 mb-4'>
                                <div className='bg-gold-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold'>
                                    2
                                </div>
                                <h3 className='text-xl font-bold text-gold-800'>
                                    Strategic Leadership Modules
                                </h3>
                            </div>
                            <p className='text-gray-600 mb-4'>
                                Intensieve leermodules over strategisch denken,
                                organisatieverandering, stakeholder management
                                en executief leiderschap.
                            </p>
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-sm'>
                                <div className='bg-white p-3 rounded border'>
                                    <strong>Strategische Planning:</strong>{' '}
                                    Visie, strategie en implementatie
                                </div>
                                <div className='bg-white p-3 rounded border'>
                                    <strong>Change Leadership:</strong> Leiding
                                    geven aan transformatie
                                </div>
                                <div className='bg-white p-3 rounded border'>
                                    <strong>Executive Communication:</strong>{' '}
                                    Overtuigen op C-level
                                </div>
                            </div>
                        </div>

                        <div className='bg-gradient-to-r from-gold-50 to-white p-8 rounded-lg border border-gold-200'>
                            <div className='flex items-center space-x-4 mb-4'>
                                <div className='bg-gold-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold'>
                                    3
                                </div>
                                <h3 className='text-xl font-bold text-gold-800'>
                                    Executive Coaching & Mentoring
                                </h3>
                            </div>
                            <p className='text-gray-600 mb-4'>
                                Individuele coaching sessies en toegang tot
                                ervaren mentoren uit de publieke sector voor
                                persoonlijke begeleiding en carrière
                                ontwikkeling.
                            </p>
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-sm'>
                                <div className='bg-white p-3 rounded border'>
                                    <strong>1-op-1 Coaching:</strong> 8 sessies
                                    met executive coach
                                </div>
                                <div className='bg-white p-3 rounded border'>
                                    <strong>Mentor Matching:</strong> Koppeling
                                    met senior leider
                                </div>
                                <div className='bg-white p-3 rounded border'>
                                    <strong>Peer Learning:</strong> Uitwisseling
                                    met gelijkgestemden
                                </div>
                            </div>
                        </div>

                        <div className='bg-gradient-to-r from-slate-50 to-white p-8 rounded-lg border border-slate-200'>
                            <div className='flex items-center space-x-4 mb-4'>
                                <div className='bg-slate-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold'>
                                    4
                                </div>
                                <h3 className='text-xl font-bold text-gold-800'>
                                    Capstone Project & Implementation
                                </h3>
                            </div>
                            <p className='text-gray-600 mb-4'>
                                Praktische toepassing van geleerde vaardigheden
                                in een strategisch project binnen uw eigen
                                organisatie, met begeleiding en evaluatie.
                            </p>
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-sm'>
                                <div className='bg-white p-3 rounded border'>
                                    <strong>Project Definitie:</strong>{' '}
                                    Strategisch initiatief in uw organisatie
                                </div>
                                <div className='bg-white p-3 rounded border'>
                                    <strong>Implementatie:</strong> Geleidde
                                    uitvoering met coaching
                                </div>
                                <div className='bg-white p-3 rounded border'>
                                    <strong>Presentatie:</strong> Resultaten
                                    delen met peers en stakeholders
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Target Audience & CTA */}
            <section className='py-16 bg-gold-800'>
                <div className='max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8'>
                    <h2 className='text-3xl font-bold text-white mb-6'>
                        Klaar voor de Volgende Stap?
                    </h2>
                    <p className='text-xl text-gold-100 mb-8 leading-relaxed'>
                        Het BZK programma is ontworpen voor ervaren
                        professionals die ambiëren naar senior
                        leiderschapsposities. Ben u klaar om uw impact te
                        vergroten?
                    </p>

                    <div className='bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 mb-8'>
                        <h3 className='text-xl font-semibold text-white mb-4'>
                            Geschikt voor:
                        </h3>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 text-gold-100'>
                            <div className='text-left'>
                                <ul className='space-y-2'>
                                    <li>• Afdelingshoofden & Teamleiders</li>
                                    <li>• Senior Beleidsmedewerkers</li>
                                    <li>• Projectleiders met Ambitie</li>
                                </ul>
                            </div>
                            <div className='text-left'>
                                <ul className='space-y-2'>
                                    <li>• Potentiële Directeuren</li>
                                    <li>• Organisatie Ontwikkelaars</li>
                                    <li>• Change Agents</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 mb-8'>
                        <div className='grid grid-cols-1 md:grid-cols-4 gap-6 text-white'>
                            <div>
                                <h3 className='font-semibold mb-2'>Duur</h3>
                                <p className='text-gold-100'>6 maanden</p>
                            </div>
                            <div>
                                <h3 className='font-semibold mb-2'>
                                    Deelnemers
                                </h3>
                                <p className='text-gold-100'>
                                    8-12 professionals
                                </p>
                            </div>
                            <div>
                                <h3 className='font-semibold mb-2'>Format</h3>
                                <p className='text-gold-100'>
                                    Blended learning
                                </p>
                            </div>
                            <div>
                                <h3 className='font-semibold mb-2'>Coaching</h3>
                                <p className='text-gold-100'>
                                    8 individuele sessies
                                </p>
                            </div>
                        </div>
                    </div>

                    <a
                        href='/contact'
                        className='inline-flex items-center bg-gold-500 hover:bg-gold-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                    >
                        <TrendingUp className='mr-2 h-5 w-5' />
                        <span>Start uw doorgroei traject</span>
                        <ArrowRight className='ml-2 h-5 w-5' />
                    </a>
                </div>
            </section>
        </>
    );
};

export default MinisterieBZK;
