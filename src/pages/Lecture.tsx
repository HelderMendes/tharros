'use client';

import PDFViewer from '@/components/PDFViewer';
import { SEO } from '@/components/SEO';
import { BookOpen, Users, Target } from 'lucide-react';

const Lecture = () => {
    const lectureSchema = {
        '@context': 'https://schema.org',
        '@type': 'EducationalEvent',
        name: 'Lecture - Over Ambtelijk Vakmanschap',
        description:
            'Een inspirerende lecture over ambtelijk vakmanschap, waarin we stilstaan bij wat er echt toe doet in de publieke sector en hoe we als ambtenaren het verschil kunnen maken.',
        organizer: {
            '@type': 'Organization',
            name: 'Tharros Training & Coaching',
        },
        performer: {
            '@type': 'Person',
            name: 'Ferdi Licher',
        },
        eventMode: 'In-person',
        audience: {
            '@type': 'Audience',
            audienceType:
                'Professionals in de publieke sector, ambtenaren, leidinggevenden',
        },
        eventStatus: 'EventScheduled',
        keywords:
            'ambtelijk vakmanschap, publieke sector, overheid, waarden, waarheid, leefwereld',
    };

    return (
        <>
            <SEO
                title="Lecture - Over Ambtelijk Vakmanschap | Reflectie op Publieke Waarden, "
                description="Een inspirerende lecture over ambtelijk vakmanschap door Ferdi Licher. Ontdek wat er echt toe doet in de publieke sector, reflecteer op waarden en waarheid, en leer hoe je als ambtenaar het verschil kunt maken. Download de volledige PDF."
                keywords="lecture ambtelijk vakmanschap, publieke sector lecture, overheid waarden, ambtelijke integriteit, politiek ongeduld, thorbecke huis, publieke onvrede, processturing, ferdi licher lecture, haagse bluf, leefwereld mensen, weberiaanse bureaucratie, moreel ethische dilemma's"
                structuredData={lectureSchema}
            />

            {/* Hero Section */}
            <section className="bg-gradient-to-tl from-gold-800 via-black to-gold-950 text-white">
                <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
                        <div className="text-white">
                            <div className="mb-6 flex items-center">
                                <BookOpen className="mr-3 h-8 w-8 text-slate-600" />
                                <span className="text-2xl font-medium text-slate-600">
                                    Lecture
                                </span>
                            </div>
                            <h1 className="mb-8 text-5xl font-bold tracking-tight lg:text-6xl">
                                Over ambtelijk vakmanschap
                            </h1>
                            <p className="mb-8 text-xl font-light leading-relaxed">
                                Een reflectie op wat er echt toe doet in de
                                publieke sector.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="overflow-hidden rounded-lg shadow-2xl">
                                <img
                                    src="images/lecture_beeld.jpeg"
                                    alt="Siracusa –metafoor voor groei en stabiliteit"
                                    className="h-96 w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="bg-white py-24">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-slate-600">
                            Waarom deze lecture?
                        </h2>
                        <div className="mx-auto max-w-3xl">
                            <div className="rounded-lg bg-gradient-to-r from-gold-50 to-slate-50 pt-8 text-xl leading-loose text-gray-700">
                                <p className="">
                                    De waan van de dag bepaalt te vaak de
                                    agenda. Goede bedoelingen lopen te vaak vast
                                    in de uitvoering. Het gesprek over waarden
                                    en waarheid, over wat er echt toe doet en
                                    wat er echt aan de hand is in de leefwereld
                                    van mensen krijgt te weinig ruimte.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Themes Section */}
            <section className="bg-white py-20">
                <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
                    <h2 className="text-center text-4xl font-bold text-slate-600">
                        Kernthema's van de lecture
                    </h2>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold-100">
                                <Target className="h-6 w-6 text-gold-600" />
                            </div>
                            <h4 className="mb-3 text-xl font-semibold text-slate-600">
                                Het huis piept...
                            </h4>
                            <p className="text-gray-600">
                                Wat doet er echt toe in de publieke sector? Hoe
                                vinden we ruimte voor betekenisvolle gesprekken
                                over waarden?
                            </p>
                        </div>

                        <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold-100">
                                <Users className="h-6 w-6 text-gold-600" />
                            </div>
                            <h4 className="mb-3 text-xl font-semibold text-slate-600">
                                De waan van de dag...
                            </h4>
                            <p className="text-gray-600">
                                Hoe blijven we verbonden met wat er echt speelt
                                in de samenleving? Hoe overbruggen we de kloof?
                            </p>
                        </div>

                        <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold-100">
                                <BookOpen className="h-6 w-6 text-gold-600" />
                            </div>
                            <h4 className="mb-3 text-xl font-semibold text-slate-600">
                                Ambtenaren voelen zich onmachtig...
                            </h4>
                            <p className="text-gray-600">
                                Hoe ontwikkelen we ons vakmanschap verder? Wat
                                maakt het verschil in hoe we ons werk doen?
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Full Lecture Text Section */}
            <section className="bg-gradient-to-br from-slate-100 to-gold-50 py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-4xl font-bold text-slate-600">
                            Volledige Lecture
                        </h2>
                        <p className="text-gary-600 text-xl">
                            Lees de complete tekst van de lecture over ambtelijk
                            vakmanschap
                        </p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
                        <PDFViewer />

                        <div className="mx-4 my-12 text-center">
                            <a
                                href="/files/ambtelijk-leiderschap_lecture.pdf"
                                download
                                className="inline-flex items-center rounded-xl bg-slate-600 px-12 py-2 font-semibold text-white shadow-lg transition-all duration-200 hover:bg-gold-600 hover:shadow-xl"
                            >
                                <BookOpen className="mr-3 h-5 w-5" />
                                Download PDF
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Lecture;
