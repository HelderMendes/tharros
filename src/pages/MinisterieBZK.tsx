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
            <section className="bg-gradient-to-r from-gold-800 to-gold-900 text-white">
                <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                        <div>
                            <h1 className="mb-6 text-4xl font-bold lg:text-5xl">
                                BZK Programma
                            </h1>
                            <p className="mb-6 text-xl text-gold-100">
                                Programma Doorgroeien in Leiderschap
                            </p>
                            <p className="mb-8 text-lg leading-relaxed">
                                Een uitgebreid ontwikkelingspad voor ervaren
                                professionals die de volgende stap in hun
                                leiderschapscarrière willen zetten binnen de
                                publieke sector. Focus op strategisch
                                leiderschap en organisationele impact.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center rounded-full bg-slate-600 px-4 py-2">
                                    <TrendingUp className="mr-2 h-5 w-5" />
                                    <span>Carrière Acceleratie</span>
                                </div>
                                <div className="flex items-center rounded-full bg-gold-100 px-4 py-2 text-gold-900">
                                    <Award className="mr-2 h-5 w-5" />
                                    <span>Senior Professionals</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="ruins-ancient-city-tharros.webp"
                                alt="Leadership Development Program"
                                className="rounded-lg shadow-2xl"
                            />
                            <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-gold-900/50 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Career Transition Focus */}
            <section className="bg-white py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold text-gold-800">
                            De Volgende Stap in Uw Carrière
                        </h2>
                        <p className="mx-auto max-w-4xl text-xl leading-relaxed text-gray-600">
                            Het BZK programma is speciaal ontworpen voor ervaren
                            professionals die klaar zijn voor meer
                            verantwoordelijkheid, grotere impact en strategisch
                            leiderschap binnen de publieke sector.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        <div className="rounded-lg border border-gold-200 bg-gradient-to-br from-gold-50 to-gold-100 p-6">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gold-600">
                                <Target className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="mb-3 font-bold text-gold-800">
                                Strategisch Denken
                            </h3>
                            <p className="text-gray-600">
                                Ontwikkel een strategische mindset voor complexe
                                organisationele uitdagingen en lange-termijn
                                visie ontwikkeling.
                            </p>
                        </div>

                        <div className="rounded-lg border border-gold-200 bg-gradient-to-br from-gold-50 to-gold-100 p-6">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gold-600">
                                <Users className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="mb-3 font-bold text-gold-800">
                                Organisatie Leiderschap
                            </h3>
                            <p className="text-gray-600">
                                Leer hoe u teams, afdelingen en hele
                                organisaties kunt inspireren en leiden door
                                complexe veranderingsprocessen.
                            </p>
                        </div>

                        <div className="rounded-lg border border-gold-200 bg-gradient-to-br from-gold-50 to-gold-100 p-6">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gold-600">
                                <Briefcase className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="mb-3 font-bold text-gold-800">
                                Executive Presence
                            </h3>
                            <p className="text-gray-600">
                                Ontwikkel de uitstraling,
                                communicatievaardigheden en invloed die horen
                                bij senior leiderschapsposities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Career Pathway */}
            <section className="bg-gray-50 py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                        <div>
                            <h2 className="mb-6 text-3xl font-bold text-gold-800">
                                Uw Carrièrepad Versnellen
                            </h2>
                            <p className="mb-8 text-lg leading-relaxed text-gray-600">
                                Het BZK programma erkent dat ervaren
                                professionals unieke behoeften hebben. We
                                richten ons op de specifieke uitdagingen en
                                kansen die komen kijken bij doorgroei naar
                                senior leiderschapsposities.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="mt-1 h-6 w-6 text-gold-500" />
                                    <div>
                                        <h3 className="font-semibold text-gold-800">
                                            Van Specialist naar Generalist
                                        </h3>
                                        <p className="text-gray-600">
                                            Ontwikkel brede
                                            leiderschapsvaardigheden naast uw
                                            vakinhoudelijke expertise
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="mt-1 h-6 w-6 text-gold-500" />
                                    <div>
                                        <h3 className="font-semibold text-gold-800">
                                            Politiek-Bestuurlijke Sensitiviteit
                                        </h3>
                                        <p className="text-gray-600">
                                            Leer navigeren in de complexe wereld
                                            van politiek en bestuur
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="mt-1 h-6 w-6 text-gold-500" />
                                    <div>
                                        <h3 className="font-semibold text-gold-800">
                                            Organisatie Transformatie
                                        </h3>
                                        <p className="text-gray-600">
                                            Krijg tools om grote
                                            veranderingstrajecten succesvol te
                                            leiden
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="mt-1 h-6 w-6 text-gold-500" />
                                    <div>
                                        <h3 className="font-semibold text-gold-800">
                                            Netwerk & Invloed
                                        </h3>
                                        <p className="text-gray-600">
                                            Bouw strategische relaties en
                                            vergroot uw invloed binnen en buiten
                                            de organisatie
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="mt-1 h-6 w-6 text-gold-500" />
                                    <div>
                                        <h3 className="font-semibold text-gold-800">
                                            Persoonlijke Board of Directors
                                        </h3>
                                        <p className="text-gray-600">
                                            Ontwikkel een netwerk van mentoren
                                            en adviseurs voor uw carrière
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img
                                src="JeanMetzingerPainter.jpg"
                                alt="Executive Leadership Development"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Program Components */}
            <section className="bg-white py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold text-gold-800">
                            Programma Componenten
                        </h2>
                        <p className="mx-auto max-w-3xl text-xl text-gray-600">
                            Een intensief 6-maanden programma met focus op
                            praktische toepassing en directe impact op uw
                            leiderschapseffectiviteit.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <div className="rounded-lg border border-gold-200 bg-gradient-to-r from-gold-50 to-white p-8">
                            <div className="mb-4 flex items-center space-x-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-600 font-bold text-white">
                                    1
                                </div>
                                <h3 className="text-xl font-bold text-gold-800">
                                    Executive Assessment & 360° Feedback
                                </h3>
                            </div>
                            <p className="mb-4 text-gray-600">
                                Uitgebreide analyse van uw huidige
                                leiderschapseffectiviteit, sterke punten en
                                ontwikkelpunten. Inclusief feedback van
                                collega's, medewerkers en stakeholders.
                            </p>
                            <div className="grid grid-cols-1 gap-4 text-sm md:grid-cols-3">
                                <div className="rounded border bg-white p-3">
                                    <strong>Assessment Tools:</strong>{' '}
                                    Psychometrische tests, leiderschapsstijl
                                    analyse
                                </div>
                                <div className="rounded border bg-white p-3">
                                    <strong>360° Feedback:</strong>{' '}
                                    Systematische feedback van stakeholders
                                </div>
                                <div className="rounded border bg-white p-3">
                                    <strong>Ontwikkelplan:</strong> Persoonlijk
                                    roadmap voor groei
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border border-gold-200 bg-gradient-to-r from-gold-50 to-white p-8">
                            <div className="mb-4 flex items-center space-x-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-600 font-bold text-white">
                                    2
                                </div>
                                <h3 className="text-xl font-bold text-gold-800">
                                    Strategic Leadership Modules
                                </h3>
                            </div>
                            <p className="mb-4 text-gray-600">
                                Intensieve leermodules over strategisch denken,
                                organisatieverandering, stakeholder management
                                en executief leiderschap.
                            </p>
                            <div className="grid grid-cols-1 gap-4 text-sm md:grid-cols-3">
                                <div className="rounded border bg-white p-3">
                                    <strong>Strategische Planning:</strong>{' '}
                                    Visie, strategie en implementatie
                                </div>
                                <div className="rounded border bg-white p-3">
                                    <strong>Change Leadership:</strong> Leiding
                                    geven aan transformatie
                                </div>
                                <div className="rounded border bg-white p-3">
                                    <strong>Executive Communication:</strong>{' '}
                                    Overtuigen op C-level
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border border-gold-200 bg-gradient-to-r from-gold-50 to-white p-8">
                            <div className="mb-4 flex items-center space-x-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-600 font-bold text-white">
                                    3
                                </div>
                                <h3 className="text-xl font-bold text-gold-800">
                                    Executive Coaching & Mentoring
                                </h3>
                            </div>
                            <p className="mb-4 text-gray-600">
                                Individuele coaching sessies en toegang tot
                                ervaren mentoren uit de publieke sector voor
                                persoonlijke begeleiding en carrière
                                ontwikkeling.
                            </p>
                            <div className="grid grid-cols-1 gap-4 text-sm md:grid-cols-3">
                                <div className="rounded border bg-white p-3">
                                    <strong>1-op-1 Coaching:</strong> 8 sessies
                                    met executive coach
                                </div>
                                <div className="rounded border bg-white p-3">
                                    <strong>Mentor Matching:</strong> Koppeling
                                    met senior leider
                                </div>
                                <div className="rounded border bg-white p-3">
                                    <strong>Peer Learning:</strong> Uitwisseling
                                    met gelijkgestemden
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border border-slate-200 bg-gradient-to-r from-slate-50 to-white p-8">
                            <div className="mb-4 flex items-center space-x-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-600 font-bold text-white">
                                    4
                                </div>
                                <h3 className="text-xl font-bold text-gold-800">
                                    Capstone Project & Implementation
                                </h3>
                            </div>
                            <p className="mb-4 text-gray-600">
                                Praktische toepassing van geleerde vaardigheden
                                in een strategisch project binnen uw eigen
                                organisatie, met begeleiding en evaluatie.
                            </p>
                            <div className="grid grid-cols-1 gap-4 text-sm md:grid-cols-3">
                                <div className="rounded border bg-white p-3">
                                    <strong>Project Definitie:</strong>{' '}
                                    Strategisch initiatief in uw organisatie
                                </div>
                                <div className="rounded border bg-white p-3">
                                    <strong>Implementatie:</strong> Geleidde
                                    uitvoering met coaching
                                </div>
                                <div className="rounded border bg-white p-3">
                                    <strong>Presentatie:</strong> Resultaten
                                    delen met peers en stakeholders
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Target Audience & CTA */}
            <section className="bg-gold-800 py-16">
                <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                    <h2 className="mb-6 text-3xl font-bold text-white">
                        Klaar voor de Volgende Stap?
                    </h2>
                    <p className="mb-8 text-xl leading-relaxed text-gold-100">
                        Het BZK programma is ontworpen voor ervaren
                        professionals die ambiëren naar senior
                        leiderschapsposities. Ben u klaar om uw impact te
                        vergroten?
                    </p>

                    <div className="mb-8 rounded-lg bg-white bg-opacity-10 p-8 backdrop-blur-sm">
                        <h3 className="mb-4 text-xl font-semibold text-white">
                            Geschikt voor:
                        </h3>
                        <div className="grid grid-cols-1 gap-6 text-gold-100 md:grid-cols-2">
                            <div className="text-left">
                                <ul className="space-y-2">
                                    <li>• Afdelingshoofden & Teamleiders</li>
                                    <li>• Senior Beleidsmedewerkers</li>
                                    <li>• Projectleiders met Ambitie</li>
                                </ul>
                            </div>
                            <div className="text-left">
                                <ul className="space-y-2">
                                    <li>• Potentiële Directeuren</li>
                                    <li>• Organisatie Ontwikkelaars</li>
                                    <li>• Change Agents</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8 rounded-lg bg-white bg-opacity-10 p-8 backdrop-blur-sm">
                        <div className="grid grid-cols-1 gap-6 text-white md:grid-cols-4">
                            <div>
                                <h3 className="mb-2 font-semibold">Duur</h3>
                                <p className="text-gold-100">6 maanden</p>
                            </div>
                            <div>
                                <h3 className="mb-2 font-semibold">
                                    Deelnemers
                                </h3>
                                <p className="text-gold-100">
                                    8-12 professionals
                                </p>
                            </div>
                            <div>
                                <h3 className="mb-2 font-semibold">Format</h3>
                                <p className="text-gold-100">
                                    Blended learning
                                </p>
                            </div>
                            <div>
                                <h3 className="mb-2 font-semibold">Coaching</h3>
                                <p className="text-gold-100">
                                    8 individuele sessies
                                </p>
                            </div>
                        </div>
                    </div>

                    <a
                        href="/contact"
                        className="inline-flex transform items-center rounded-lg bg-gold-500 px-8 py-4 font-semibold text-white shadow-lg transition-colors duration-200 hover:-translate-y-1 hover:bg-gold-600 hover:shadow-xl"
                    >
                        <TrendingUp className="mr-2 h-5 w-5" />
                        <span>Start uw doorgroei traject</span>
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                </div>
            </section>
        </>
    );
};

export default MinisterieBZK;
