import React from 'react';
import {
    User,
    Target,
    Calendar,
    CheckCircle,
    ArrowRight,
    Users,
    Heart,
    Star,
} from 'lucide-react';

const Coaching = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-gold-800 to-gold-900 text-white">
                <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                        <div>
                            <h1 className="mb-6 text-4xl font-bold lg:text-5xl">
                                Individuele Coaching
                            </h1>
                            <p className="mb-6 text-xl text-gold-100">
                                Persoonlijke Begeleiding & Mentorschap
                            </p>
                            <p className="mb-8 text-lg leading-relaxed">
                                Op maat gemaakte coaching trajecten voor
                                individuele professionals. Persoonlijke
                                ontwikkeling, carrièreplanning en het overwinnen
                                van leiderschapsuitdagingen in de publieke
                                sector.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center rounded-full bg-gold-700 px-4 py-2">
                                    <User className="mr-2 h-5 w-5" />
                                    <span>1-op-1 Begeleiding</span>
                                </div>
                                <div className="flex items-center rounded-full bg-gold-600 px-4 py-2">
                                    <Heart className="mr-2 h-5 w-5" />
                                    <span>Persoonlijk</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt="Individual Coaching Session"
                                className="rounded-lg shadow-2xl"
                            />
                            <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-gold-900/50 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Coaching Philosophy */}
            <section className="bg-white py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold text-gold-800">
                            Persoonlijke Ontwikkeling Centraal
                        </h2>
                        <p className="mx-auto max-w-4xl text-xl leading-relaxed text-gray-600">
                            Elke professional is uniek, met eigen uitdagingen,
                            ambities en ontwikkelbehoeften. Onze coaching
                            benadering is volledig gecentreerd rond uw
                            persoonlijke groei en professionele doelen.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        <div className="text-center">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold-100">
                                <User className="h-8 w-8 text-gold-600" />
                            </div>
                            <h3 className="mb-3 font-bold text-gold-800">
                                Individueel Maatwerk
                            </h3>
                            <p className="leading-relaxed text-gray-600">
                                Elke coaching trajectory wordt volledig op maat
                                ontwikkeld, gebaseerd op uw specifieke situatie
                                en ambities.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold-100">
                                <Target className="h-8 w-8 text-gold-600" />
                            </div>
                            <h3 className="mb-3 font-bold text-gold-800">
                                Doelgerichte Aanpak
                            </h3>
                            <p className="leading-relaxed text-gray-600">
                                We werken met concrete, meetbare doelen die
                                direct bijdragen aan uw persoonlijke en
                                professionele groei.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold-100">
                                <Heart className="h-8 w-8 text-gold-600" />
                            </div>
                            <h3 className="mb-3 font-bold text-gold-800">
                                Vertrouwelijke Ruimte
                            </h3>
                            <p className="leading-relaxed text-gray-600">
                                Een veilige, vertrouwelijke omgeving waar u open
                                kunt zijn over uitdagingen en kwetsbaarheden.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Coaching Areas */}
            <section className="bg-gray-50 py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                        <div>
                            <h2 className="mb-6 text-3xl font-bold text-gold-800">
                                Coaching Gebieden
                            </h2>
                            <p className="mb-8 text-lg leading-relaxed text-gray-600">
                                Onze coaching richt zich op de kerngebieden die
                                cruciaal zijn voor succesvol leiderschap in de
                                publieke sector. Van persoonlijke effectiviteit
                                tot strategische positionering.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="mt-1 h-6 w-6 text-gold-500" />
                                    <div>
                                        <h3 className="font-semibold text-gold-800">
                                            Leiderschapsontwikkeling
                                        </h3>
                                        <p className="text-gray-600">
                                            Ontwikkel uw unieke
                                            leiderschapsstijl en vergroot uw
                                            impact
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="mt-1 h-6 w-6 text-gold-500" />
                                    <div>
                                        <h3 className="font-semibold text-gold-800">
                                            Carrièreplanning
                                        </h3>
                                        <p className="text-gray-600">
                                            Strategische stappen zetten richting
                                            uw professionele ambities
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="mt-1 h-6 w-6 text-gold-500" />
                                    <div>
                                        <h3 className="font-semibold text-gold-800">
                                            Omgaan met Complexiteit
                                        </h3>
                                        <p className="text-gray-600">
                                            Navigeren in politiek-ambtelijke
                                            verhoudingen en stakeholder
                                            management
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="mt-1 h-6 w-6 text-gold-500" />
                                    <div>
                                        <h3 className="font-semibold text-gold-800">
                                            Persoonlijke Effectiviteit
                                        </h3>
                                        <p className="text-gray-600">
                                            Time management, prioritering en
                                            work-life balance optimaliseren
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="mt-1 h-6 w-6 text-gold-500" />
                                    <div>
                                        <h3 className="font-semibold text-gold-800">
                                            Communicatie & Invloed
                                        </h3>
                                        <p className="text-gray-600">
                                            Versterken van
                                            communicatievaardigheden en
                                            overtuigingskracht
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="mt-1 h-6 w-6 text-gold-500" />
                                    <div>
                                        <h3 className="font-semibold text-gold-800">
                                            Veranderingsleiderschap
                                        </h3>
                                        <p className="text-gray-600">
                                            Leren leiden van complexe
                                            veranderingsprocessen
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img
                                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt="Professional Coaching Areas"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Coaching Process */}
            <section className="bg-white py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold text-gold-800">
                            Het Coaching Proces
                        </h2>
                        <p className="mx-auto max-w-3xl text-xl text-gray-600">
                            Een gestructureerde benadering die ruimte laat voor
                            flexibiliteit en aanpassing aan uw specifieke
                            behoeften en leervoorkeur.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <div className="flex flex-col items-center space-y-6 md:flex-row md:space-x-8 md:space-y-0">
                            <div className="flex-shrink-0">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-600 text-lg font-bold text-white">
                                    1
                                </div>
                            </div>
                            <div className="flex-1 rounded-lg bg-gold-50 p-6">
                                <h3 className="mb-3 font-bold text-gold-800">
                                    Kennismaking & Intake (Sessie 1)
                                </h3>
                                <p className="mb-3 text-gray-600">
                                    Een uitgebreid gesprek om elkaar te leren
                                    kennen, uw huidige situatie te verkennen en
                                    doelen voor het coaching traject vast te
                                    stellen.
                                </p>
                                <div className="text-sm text-gray-500">
                                    <strong>Duur:</strong> 90 minuten •{' '}
                                    <strong>Focus:</strong> Verkenning &
                                    doelstelling
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center space-y-6 md:flex-row md:space-x-8 md:space-y-0">
                            <div className="flex-shrink-0">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-600 text-lg font-bold text-white">
                                    2
                                </div>
                            </div>
                            <div className="flex-1 rounded-lg bg-gold-50 p-6">
                                <h3 className="mb-3 font-bold text-gold-800">
                                    Assessment & Analyse (Sessie 2-3)
                                </h3>
                                <p className="mb-3 text-gray-600">
                                    Uitgebreide analyse van uw
                                    leiderschapsstijl, competenties en
                                    ontwikkelpunten door middel van assessments
                                    en 360-graden feedback.
                                </p>
                                <div className="text-sm text-gray-500">
                                    <strong>Duur:</strong> 2x 60 minuten •{' '}
                                    <strong>Focus:</strong> Zelfkennis & inzicht
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center space-y-6 md:flex-row md:space-x-8 md:space-y-0">
                            <div className="flex-shrink-0">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-600 text-lg font-bold text-white">
                                    3
                                </div>
                            </div>
                            <div className="flex-1 rounded-lg bg-gold-50 p-6">
                                <h3 className="mb-3 font-bold text-gold-800">
                                    Ontwikkeling & Praktijk (Sessie 4-8)
                                </h3>
                                <p className="mb-3 text-gray-600">
                                    Het hart van het traject: praktische
                                    coaching sessies gericht op skill building,
                                    gedragsverandering en concrete toepassing in
                                    uw werkomgeving.
                                </p>
                                <div className="text-sm text-gray-500">
                                    <strong>Duur:</strong> 5x 60 minuten •{' '}
                                    <strong>Focus:</strong> Ontwikkeling &
                                    toepassing
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center space-y-6 md:flex-row md:space-x-8 md:space-y-0">
                            <div className="flex-shrink-0">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-600 text-lg font-bold text-white">
                                    4
                                </div>
                            </div>
                            <div className="flex-1 rounded-lg bg-slate-50 p-6">
                                <h3 className="mb-3 font-bold text-gold-800">
                                    Evaluatie & Borging (Sessie 9-10)
                                </h3>
                                <p className="mb-3 text-gray-600">
                                    Evaluatie van de geboekte vooruitgang,
                                    borging van geleerde vaardigheden en
                                    opstellen van een persoonlijk ontwikkelplan
                                    voor de toekomst.
                                </p>
                                <div className="text-sm text-gray-500">
                                    <strong>Duur:</strong> 2x 60 minuten •{' '}
                                    <strong>Focus:</strong> Evaluatie &
                                    toekomstplanning
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mentorship Program */}
            <section className="bg-gray-50 py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                        <div>
                            <img
                                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt="Mentorship Program"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                        <div>
                            <h2 className="mb-6 text-3xl font-bold text-gold-800">
                                Mentorschap Programma
                            </h2>
                            <p className="mb-6 text-lg leading-relaxed text-gray-600">
                                Naast individuele coaching bieden we ook
                                mentorschap aan door ervaren leiders uit de
                                publieke sector. Een unieke kans om te leren van
                                professionals die de weg hebben bewandeld die u
                                wilt gaan.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <Star className="mt-1 h-6 w-6 text-gold-500" />
                                    <div>
                                        <h3 className="font-semibold text-gold-800">
                                            Ervaren Mentoren
                                        </h3>
                                        <p className="text-gray-600">
                                            Toegang tot senior leiders met
                                            bewezen track record
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <Star className="mt-1 h-6 w-6 text-gold-500" />
                                    <div>
                                        <h3 className="font-semibold text-gold-800">
                                            Netwerk Uitbreiding
                                        </h3>
                                        <p className="text-gray-600">
                                            Bouw waardevolle contacten in de
                                            publieke sector
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <Star className="mt-1 h-6 w-6 text-gold-500" />
                                    <div>
                                        <h3 className="font-semibold text-gold-800">
                                            Praktijkgerichte Adviezen
                                        </h3>
                                        <p className="text-gray-600">
                                            Concrete tips gebaseerd op echte
                                            ervaringen
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <Star className="mt-1 h-6 w-6 text-gold-500" />
                                    <div>
                                        <h3 className="font-semibold text-gold-800">
                                            Lange Termijn Relatie
                                        </h3>
                                        <p className="text-gray-600">
                                            Doorlopende ondersteuning bij
                                            carrière ontwikkeling
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Coaching Options & CTA */}
            <section className="bg-gold-800 py-16">
                <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                    <h2 className="mb-6 text-3xl font-bold text-white">
                        Investeer in Uw Persoonlijke Ontwikkeling
                    </h2>
                    <p className="mb-8 text-xl leading-relaxed text-gold-100">
                        Individuele coaching is een investering in uzelf en uw
                        toekomst. Ontdek wat mogelijk is wanneer u de juiste
                        begeleiding en ondersteuning krijgt.
                    </p>

                    <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
                        <div className="rounded-lg bg-white bg-opacity-10 p-6 backdrop-blur-sm">
                            <h3 className="mb-4 text-xl font-semibold text-white">
                                Coaching Traject
                            </h3>
                            <div className="space-y-2 text-gold-100">
                                <p>
                                    <strong>Duur:</strong> 3-6 maanden
                                </p>
                                <p>
                                    <strong>Sessies:</strong> 8-10 sessies van
                                    60 min
                                </p>
                                <p>
                                    <strong>Format:</strong> Face-to-face of
                                    online
                                </p>
                                <p>
                                    <strong>Follow-up:</strong> 3 maanden
                                    ondersteuning
                                </p>
                            </div>
                        </div>

                        <div className="rounded-lg bg-white bg-opacity-10 p-6 backdrop-blur-sm">
                            <h3 className="mb-4 text-xl font-semibold text-white">
                                Mentorschap
                            </h3>
                            <div className="space-y-2 text-gold-100">
                                <p>
                                    <strong>Duur:</strong> 6-12 maanden
                                </p>
                                <p>
                                    <strong>Frequentie:</strong> Maandelijkse
                                    gesprekken
                                </p>
                                <p>
                                    <strong>Format:</strong> Flexibel naar
                                    behoefte
                                </p>
                                <p>
                                    <strong>Netwerk:</strong> Toegang tot
                                    professional network
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                        <a
                            href="/contact"
                            className="inline-flex transform items-center rounded-lg bg-gold-500 px-8 py-4 font-semibold text-white shadow-lg transition-colors duration-200 hover:-translate-y-1 hover:bg-gold-600 hover:shadow-xl"
                        >
                            <Calendar className="mr-2 h-5 w-5" />
                            <span>Plan een kennismaking</span>
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>

                        <a
                            href="/contact"
                            className="inline-flex transform items-center rounded-lg bg-white px-8 py-4 font-semibold text-gold-800 shadow-lg transition-colors duration-200 hover:-translate-y-1 hover:bg-gray-100 hover:shadow-xl"
                        >
                            <Users className="mr-2 h-5 w-5" />
                            <span>Informatie mentorschap</span>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Coaching;
