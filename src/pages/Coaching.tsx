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
            <section className='bg-gradient-to-r from-gold-800 to-gold-900 text-white'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                        <div>
                            <h1 className='text-4xl lg:text-5xl font-bold mb-6'>
                                Individuele Coaching
                            </h1>
                            <p className='text-xl text-gold-100 mb-6'>
                                Persoonlijke Begeleiding & Mentorschap
                            </p>
                            <p className='text-lg leading-relaxed mb-8'>
                                Op maat gemaakte coaching trajecten voor
                                individuele professionals. Persoonlijke
                                ontwikkeling, carrièreplanning en het overwinnen
                                van leiderschapsuitdagingen in de publieke
                                sector.
                            </p>
                            <div className='flex flex-wrap gap-4'>
                                <div className='flex items-center bg-gold-700 px-4 py-2 rounded-full'>
                                    <User className='h-5 w-5 mr-2' />
                                    <span>1-op-1 Begeleiding</span>
                                </div>
                                <div className='flex items-center bg-gold-600 px-4 py-2 rounded-full'>
                                    <Heart className='h-5 w-5 mr-2' />
                                    <span>Persoonlijk</span>
                                </div>
                            </div>
                        </div>
                        <div className='relative'>
                            <img
                                src='https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800'
                                alt='Individual Coaching Session'
                                className='rounded-lg shadow-2xl'
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-gold-900/50 to-transparent rounded-lg'></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Coaching Philosophy */}
            <section className='py-16 bg-white'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center mb-12'>
                        <h2 className='text-3xl font-bold text-gold-800 mb-4'>
                            Persoonlijke Ontwikkeling Centraal
                        </h2>
                        <p className='text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed'>
                            Elke professional is uniek, met eigen uitdagingen,
                            ambities en ontwikkelbehoeften. Onze coaching
                            benadering is volledig gecentreerd rond uw
                            persoonlijke groei en professionele doelen.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        <div className='text-center'>
                            <div className='bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                                <User className='h-8 w-8 text-gold-600' />
                            </div>
                            <h3 className='font-bold text-gold-800 mb-3'>
                                Individueel Maatwerk
                            </h3>
                            <p className='text-gray-600 leading-relaxed'>
                                Elke coaching trajectory wordt volledig op maat
                                ontwikkeld, gebaseerd op uw specifieke situatie
                                en ambities.
                            </p>
                        </div>

                        <div className='text-center'>
                            <div className='bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                                <Target className='h-8 w-8 text-gold-600' />
                            </div>
                            <h3 className='font-bold text-gold-800 mb-3'>
                                Doelgerichte Aanpak
                            </h3>
                            <p className='text-gray-600 leading-relaxed'>
                                We werken met concrete, meetbare doelen die
                                direct bijdragen aan uw persoonlijke en
                                professionele groei.
                            </p>
                        </div>

                        <div className='text-center'>
                            <div className='bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                                <Heart className='h-8 w-8 text-gold-600' />
                            </div>
                            <h3 className='font-bold text-gold-800 mb-3'>
                                Vertrouwelijke Ruimte
                            </h3>
                            <p className='text-gray-600 leading-relaxed'>
                                Een veilige, vertrouwelijke omgeving waar u open
                                kunt zijn over uitdagingen en kwetsbaarheden.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Coaching Areas */}
            <section className='py-16 bg-gray-50'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                        <div>
                            <h2 className='text-3xl font-bold text-gold-800 mb-6'>
                                Coaching Gebieden
                            </h2>
                            <p className='text-lg text-gray-600 mb-8 leading-relaxed'>
                                Onze coaching richt zich op de kerngebieden die
                                cruciaal zijn voor succesvol leiderschap in de
                                publieke sector. Van persoonlijke effectiviteit
                                tot strategische positionering.
                            </p>

                            <div className='space-y-4'>
                                <div className='flex items-start space-x-3'>
                                    <CheckCircle className='h-6 w-6 text-gold-500 mt-1' />
                                    <div>
                                        <h3 className='font-semibold text-gold-800'>
                                            Leiderschapsontwikkeling
                                        </h3>
                                        <p className='text-gray-600'>
                                            Ontwikkel uw unieke
                                            leiderschapsstijl en vergroot uw
                                            impact
                                        </p>
                                    </div>
                                </div>
                                <div className='flex items-start space-x-3'>
                                    <CheckCircle className='h-6 w-6 text-gold-500 mt-1' />
                                    <div>
                                        <h3 className='font-semibold text-gold-800'>
                                            Carrièreplanning
                                        </h3>
                                        <p className='text-gray-600'>
                                            Strategische stappen zetten richting
                                            uw professionele ambities
                                        </p>
                                    </div>
                                </div>
                                <div className='flex items-start space-x-3'>
                                    <CheckCircle className='h-6 w-6 text-gold-500 mt-1' />
                                    <div>
                                        <h3 className='font-semibold text-gold-800'>
                                            Omgaan met Complexiteit
                                        </h3>
                                        <p className='text-gray-600'>
                                            Navigeren in politiek-ambtelijke
                                            verhoudingen en stakeholder
                                            management
                                        </p>
                                    </div>
                                </div>
                                <div className='flex items-start space-x-3'>
                                    <CheckCircle className='h-6 w-6 text-gold-500 mt-1' />
                                    <div>
                                        <h3 className='font-semibold text-gold-800'>
                                            Persoonlijke Effectiviteit
                                        </h3>
                                        <p className='text-gray-600'>
                                            Time management, prioritering en
                                            work-life balance optimaliseren
                                        </p>
                                    </div>
                                </div>
                                <div className='flex items-start space-x-3'>
                                    <CheckCircle className='h-6 w-6 text-gold-500 mt-1' />
                                    <div>
                                        <h3 className='font-semibold text-gold-800'>
                                            Communicatie & Invloed
                                        </h3>
                                        <p className='text-gray-600'>
                                            Versterken van
                                            communicatievaardigheden en
                                            overtuigingskracht
                                        </p>
                                    </div>
                                </div>
                                <div className='flex items-start space-x-3'>
                                    <CheckCircle className='h-6 w-6 text-gold-500 mt-1' />
                                    <div>
                                        <h3 className='font-semibold text-gold-800'>
                                            Veranderingsleiderschap
                                        </h3>
                                        <p className='text-gray-600'>
                                            Leren leiden van complexe
                                            veranderingsprocessen
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img
                                src='https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
                                alt='Professional Coaching Areas'
                                className='rounded-lg shadow-lg'
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Coaching Process */}
            <section className='py-16 bg-white'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center mb-12'>
                        <h2 className='text-3xl font-bold text-gold-800 mb-4'>
                            Het Coaching Proces
                        </h2>
                        <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                            Een gestructureerde benadering die ruimte laat voor
                            flexibiliteit en aanpassing aan uw specifieke
                            behoeften en leervoorkeur.
                        </p>
                    </div>

                    <div className='space-y-8'>
                        <div className='flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8'>
                            <div className='flex-shrink-0'>
                                <div className='bg-gold-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg'>
                                    1
                                </div>
                            </div>
                            <div className='flex-1 bg-gold-50 p-6 rounded-lg'>
                                <h3 className='font-bold text-gold-800 mb-3'>
                                    Kennismaking & Intake (Sessie 1)
                                </h3>
                                <p className='text-gray-600 mb-3'>
                                    Een uitgebreid gesprek om elkaar te leren
                                    kennen, uw huidige situatie te verkennen en
                                    doelen voor het coaching traject vast te
                                    stellen.
                                </p>
                                <div className='text-sm text-gray-500'>
                                    <strong>Duur:</strong> 90 minuten •{' '}
                                    <strong>Focus:</strong> Verkenning &
                                    doelstelling
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8'>
                            <div className='flex-shrink-0'>
                                <div className='bg-gold-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg'>
                                    2
                                </div>
                            </div>
                            <div className='flex-1 bg-gold-50 p-6 rounded-lg'>
                                <h3 className='font-bold text-gold-800 mb-3'>
                                    Assessment & Analyse (Sessie 2-3)
                                </h3>
                                <p className='text-gray-600 mb-3'>
                                    Uitgebreide analyse van uw
                                    leiderschapsstijl, competenties en
                                    ontwikkelpunten door middel van assessments
                                    en 360-graden feedback.
                                </p>
                                <div className='text-sm text-gray-500'>
                                    <strong>Duur:</strong> 2x 60 minuten •{' '}
                                    <strong>Focus:</strong> Zelfkennis & inzicht
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8'>
                            <div className='flex-shrink-0'>
                                <div className='bg-gold-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg'>
                                    3
                                </div>
                            </div>
                            <div className='flex-1 bg-gold-50 p-6 rounded-lg'>
                                <h3 className='font-bold text-gold-800 mb-3'>
                                    Ontwikkeling & Praktijk (Sessie 4-8)
                                </h3>
                                <p className='text-gray-600 mb-3'>
                                    Het hart van het traject: praktische
                                    coaching sessies gericht op skill building,
                                    gedragsverandering en concrete toepassing in
                                    uw werkomgeving.
                                </p>
                                <div className='text-sm text-gray-500'>
                                    <strong>Duur:</strong> 5x 60 minuten •{' '}
                                    <strong>Focus:</strong> Ontwikkeling &
                                    toepassing
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8'>
                            <div className='flex-shrink-0'>
                                <div className='bg-slate-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg'>
                                    4
                                </div>
                            </div>
                            <div className='flex-1 bg-slate-50 p-6 rounded-lg'>
                                <h3 className='font-bold text-gold-800 mb-3'>
                                    Evaluatie & Borging (Sessie 9-10)
                                </h3>
                                <p className='text-gray-600 mb-3'>
                                    Evaluatie van de geboekte vooruitgang,
                                    borging van geleerde vaardigheden en
                                    opstellen van een persoonlijk ontwikkelplan
                                    voor de toekomst.
                                </p>
                                <div className='text-sm text-gray-500'>
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
            <section className='py-16 bg-gray-50'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                        <div>
                            <img
                                src='https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800'
                                alt='Mentorship Program'
                                className='rounded-lg shadow-lg'
                            />
                        </div>
                        <div>
                            <h2 className='text-3xl font-bold text-gold-800 mb-6'>
                                Mentorschap Programma
                            </h2>
                            <p className='text-lg text-gray-600 mb-6 leading-relaxed'>
                                Naast individuele coaching bieden we ook
                                mentorschap aan door ervaren leiders uit de
                                publieke sector. Een unieke kans om te leren van
                                professionals die de weg hebben bewandeld die u
                                wilt gaan.
                            </p>

                            <div className='space-y-4'>
                                <div className='flex items-start space-x-3'>
                                    <Star className='h-6 w-6 text-gold-500 mt-1' />
                                    <div>
                                        <h3 className='font-semibold text-gold-800'>
                                            Ervaren Mentoren
                                        </h3>
                                        <p className='text-gray-600'>
                                            Toegang tot senior leiders met
                                            bewezen track record
                                        </p>
                                    </div>
                                </div>
                                <div className='flex items-start space-x-3'>
                                    <Star className='h-6 w-6 text-gold-500 mt-1' />
                                    <div>
                                        <h3 className='font-semibold text-gold-800'>
                                            Netwerk Uitbreiding
                                        </h3>
                                        <p className='text-gray-600'>
                                            Bouw waardevolle contacten in de
                                            publieke sector
                                        </p>
                                    </div>
                                </div>
                                <div className='flex items-start space-x-3'>
                                    <Star className='h-6 w-6 text-gold-500 mt-1' />
                                    <div>
                                        <h3 className='font-semibold text-gold-800'>
                                            Praktijkgerichte Adviezen
                                        </h3>
                                        <p className='text-gray-600'>
                                            Concrete tips gebaseerd op echte
                                            ervaringen
                                        </p>
                                    </div>
                                </div>
                                <div className='flex items-start space-x-3'>
                                    <Star className='h-6 w-6 text-gold-500 mt-1' />
                                    <div>
                                        <h3 className='font-semibold text-gold-800'>
                                            Lange Termijn Relatie
                                        </h3>
                                        <p className='text-gray-600'>
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
            <section className='py-16 bg-gold-800'>
                <div className='max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8'>
                    <h2 className='text-3xl font-bold text-white mb-6'>
                        Investeer in Uw Persoonlijke Ontwikkeling
                    </h2>
                    <p className='text-xl text-gold-100 mb-8 leading-relaxed'>
                        Individuele coaching is een investering in uzelf en uw
                        toekomst. Ontdek wat mogelijk is wanneer u de juiste
                        begeleiding en ondersteuning krijgt.
                    </p>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-8'>
                        <div className='bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6'>
                            <h3 className='text-xl font-semibold text-white mb-4'>
                                Coaching Traject
                            </h3>
                            <div className='text-gold-100 space-y-2'>
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

                        <div className='bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6'>
                            <h3 className='text-xl font-semibold text-white mb-4'>
                                Mentorschap
                            </h3>
                            <div className='text-gold-100 space-y-2'>
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

                    <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                        <a
                            href='/contact'
                            className='inline-flex items-center bg-gold-500 hover:bg-gold-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                        >
                            <Calendar className='mr-2 h-5 w-5' />
                            <span>Plan een kennismaking</span>
                            <ArrowRight className='ml-2 h-5 w-5' />
                        </a>

                        <a
                            href='/contact'
                            className='inline-flex items-center bg-white hover:bg-gray-100 text-gold-800 font-semibold px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                        >
                            <Users className='mr-2 h-5 w-5' />
                            <span>Informatie mentorschap</span>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Coaching;
