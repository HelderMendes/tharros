// workshops.jsx
import React from 'react';
import { Users, Award, CheckCircle, ArrowRight, Briefcase } from 'lucide-react';

const kernAspecten = [
    {
        icon: Briefcase,
        title: 'Workshop Moderatie',
        description:
            'Oplossingsgerichte begeleiding voor teams. Elke stem telt, scherpe vraagstelling, sfeer van vertrouwen.',
    },
    {
        icon: CheckCircle,
        title: 'Podiumgesprekken',
        description:
            "Workshops en moderatie op maat voor uiteenlopende sectoren, van overheidsinstellingen tot NGO's.",
    },
    {
        icon: Users,
        title: 'Maatwerk voor Organisaties',
        description:
            "Ervaring met Comenius, College Tour-style, morele dilemma's, publiek actief betrokken.",
    },
];

const kompasRichtingen = [
    'Vertrekpositie voor leiderschap',
    '5 kerndimensies van publiek leiderschap',
    '10 hoofdrichtingen voor ontwikkeling',
    'Praktische toepassing in dagelijkse werkzaamheden',
];

const Workshops = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="mb-12 bg-gradient-to-br from-black/95 to-gold-900 text-white">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                        <div>
                            <h1 className="mb-2 text-3xl font-bold lg:text-4xl">
                                Workshops
                            </h1>
                            <p className="mb-6 text-2xl text-gold-300">
                                Maatwerk en moderatie voor teams en organisaties
                            </p>
                            <p className="mb-8 text-xl font-light leading-loose">
                                Als u met uw team een goed gesprek wilt voeren
                                over wat er goed gaat en beter kan, in beleid of
                                uitvoering, dan kan ik u daarbij helpen door te
                                zorgen dat de vraagstelling scherp en duidelijk
                                wordt, er geluisterd en doorgevraagd wordt en er
                                vrijmoedig met elkaar wordt gesproken en alle
                                stemmen gehoord worden.
                            </p>
                            <div className="flex items-center space-x-10 text-gold-300">
                                <div className="flex items-center">
                                    <Users className="mr-2 h-5 w-5" />
                                    <span>Teamwork</span>
                                </div>
                                <div className="flex items-center">
                                    <Award className="mr-2 h-5 w-5" />
                                    <span>Ervaren Moderatie</span>{' '}
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="overflow-hidden rounded-lg shadow-2xl">
                                <img
                                    src="images/tree_root_growth.jpg"
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
                        <h2 className="mb-4 text-3xl font-bold text-gold-600">
                            Waar kan ik mee helpen?
                        </h2>
                        <p className="text-gary-600 mx-auto max-w-3xl text-lg">
                            Naast het modereren van workshops voor teams heb ik
                            ook ervaring met de moderatie van podiumgesprekken.
                            Met Comenius heb ik bijvoorbeeld een vrijplaats
                            georganiseerd voor Comenius alumni over het thema{' '}
                            <i>Rijk in roerige tijden</i>. Gastspreker was
                            oud-directeur generaal en speciaal adviseur van de
                            rijksoverheid Mark Frequin. Dit hebben we gedaan in
                            de formule van College Tour waarbij de gastspreker
                            stevig wordt doorgevraagd over morele dilemma’s en
                            het publiek daarbij actief wordt betrokken.
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

            {/* Visual Gallery Section */}
            <section className="-mb-24 bg-slate-50 py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold text-gold-600">
                            Indrukken uit eerdere workshops
                        </h2>
                        <p className="mx-auto max-w-2xl text-lg text-gray-700">
                            Place holder fo text lLorem ipsum dolor sit amet
                            consectetur adipisicing elit. Quo aut qui sapiente
                            reprehenderit ducimus architecto iusto.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        <div className="group relative overflow-hidden rounded-2xl">
                            <img
                                src="/images/Lecture_bkg.jpeg"
                                alt="Foto met Diederik Samsom"
                                className="h-52 w-full rounded-lg object-cover shadow-md"
                            />
                            {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div> */}
                            <div className="absolute bottom-4 left-4 text-white">
                                <p className="text-lg font-medium">
                                    Speciaal adviseur
                                </p>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-2xl">
                            <img
                                src="/images/groeps01.jpeg"
                                alt="Groepje mensen met naast een harp"
                                className="h-52 w-full rounded-lg object-cover shadow-md"
                            />
                            {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div> */}
                            <div className="absolute bottom-4 left-4 text-white">
                                <p className="text-lg font-medium">
                                    Voor teams en organisaties
                                </p>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-2xl">
                            <img
                                src="/images/workshops.jpeg"
                                alt="Zaal met geel licht en mensen op de rug gezien"
                                className="h-52 w-full rounded-lg object-cover shadow-md"
                            />
                            {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div> */}
                            <div className="absolute bottom-4 left-4 text-white">
                                <p className="text-lg font-medium">
                                    Gastspreker
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Workshops;
