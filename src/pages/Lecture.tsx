import { SEO } from '@/components/SEO';
import { User, Target, BarChart3, CheckCircle, ArrowRight } from 'lucide-react';

const Lecture = () => {
    const courseSchema = {
        '@context': 'https://schema.org',
        '@type': 'Course',
        name: 'Lecture - Over Ambtelijk Vakmanschap',
        description:
            'Ontdek de essentie van ambtelijk vakmanschap en ontwikkel jezelf als professional in de publieke sector. Een intensieve training gericht op zelfkennis en persoonlijke groei.',
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
            audienceType: 'Professionals in de publieke sector',
        },
    };

    return (
        <>
            <SEO
                title='Lecture - Over Ambtelijk Vakmanschap'
                description='Ontdek de essentie van ambtelijk vakmanschap en ontwikkel jezelf als professional in de publieke sector. Een intensieve training gericht op zelfkennis en persoonlijke groei.'
                keywords='ambtelijk vakmanschap, publieke sector training, overheidstraining, professional development, zelfkennis, persoonlijke groei'
                structuredData={courseSchema}
            />
            <div className='pt-20'>
                {/* Hero Section */}
                <section className='bg-gradient-to-r from-gold-700 to-gold-950 text-white'>
                    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
                            <div>
                                <h1 className='text-5xl lg:text-6xl font-bold mb-8 tracking-tight'>
                                    Lecture
                                </h1>
                                <p className='text-xl text-slate-100 mb-8 font-light'>
                                    Programma Doorgroeien in Leiderschap
                                    (incompany)
                                </p>
                                <p className='text-lg leading-relaxed mb-10 font-light'>
                                    Een intensief ontwikkelprogramma gericht op
                                    persoonlijke groei en
                                    leiderschapsontwikkeling. Ontdek wie je
                                    bent, wat je drijft en hoe je je
                                    leiderschapskracht optimaal kunt inzetten.
                                </p>
                                <div className='flex flex-wrap gap-4'>
                                    <div className='flex items-center bg-slate-700 px-6 py-3 rounded-full'>
                                        <User className='h-5 w-5 mr-2' />
                                        <span className='font-medium'>
                                            Persoonlijk
                                        </span>
                                    </div>
                                    <div className='flex items-center bg-white text-slate-800 px-6 py-3 rounded-full'>
                                        <Target className='h-5 w-5 mr-2' />
                                        <span className='font-medium'>
                                            Incompany
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='relative'>
                                <img
                                    src='groeps02.jpeg'
                                    alt='Leadership Development'
                                    className='rounded-none shadow-2xl'
                                />
                                <div className='absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-none'></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Ken Jezelf Section */}
                <section className='py-20 bg-white'>
                    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
                            <div>
                                <img
                                    src='Politiek_ambtelijkSamenspel.jpeg'
                                    alt='Zelfkennis en reflectie'
                                    className='rounded-none shadow-lg'
                                />
                            </div>
                            <div>
                                <h2 className='text-4xl font-semibold text-gold-800 mb-8'>
                                    Ken Jezelf
                                </h2>
                                <p className='text-lg text-gray-600 mb-8 leading-relaxed font-light'>
                                    Het fundament van goed leiderschap begint
                                    bij zelfkennis. In dit programma duiken we
                                    diep in wie je bent als persoon en als
                                    leider, wat je drijft en hoe je je
                                    natuurlijke talenten optimaal kunt benutten.
                                </p>

                                <div className='space-y-6'>
                                    <div className='flex items-start space-x-4'>
                                        <CheckCircle className='h-6 w-6 text-gold-500 mt-1' />
                                        <div>
                                            <h3 className='font-semibold text-gold-800 text-lg'>
                                                Uitgebreide Zelfscan
                                            </h3>
                                            <p className='text-gray-700 font-light'>
                                                Wetenschappelijk onderbouwde
                                                assessment tools voor diepgaand
                                                zelfbegrip
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex items-start space-x-4'>
                                        <CheckCircle className='h-6 w-6 text-gold-500 mt-1' />
                                        <div>
                                            <h3 className='font-semibold text-gold-800 text-lg'>
                                                Persoonlijkheidsanalyse
                                            </h3>
                                            <p className='text-gray-600 font-light'>
                                                Ontdek je leiderschapsstijl,
                                                voorkeuren en blinde vlekken
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex items-start space-x-4'>
                                        <CheckCircle className='h-6 w-6 text-gold-500 mt-1' />
                                        <div>
                                            <h3 className='font-semibold text-gold-800 text-lg'>
                                                Waardenexploratie
                                            </h3>
                                            <p className='text-gray-600 font-light'>
                                                Identificeer je kernwaarden en
                                                hoe deze je leiderschapsgedrag
                                                beïnvloeden
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex items-start space-x-4'>
                                        <CheckCircle className='h-6 w-6 text-gold-500 mt-1' />
                                        <div>
                                            <h3 className='font-semibold text-gold-800 text-lg'>
                                                360-graden feedback
                                            </h3>
                                            <p className='text-gray-600 font-light'>
                                                Inzichten van collega's,
                                                medewerkers en stakeholders
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Program Structure */}
                <section className='py-20 bg-gray-50'>
                    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                        <div className='text-center mb-16'>
                            <h2 className='text-4xl font-semibold text-gold-800 mb-6'>
                                Programma-opbouw
                            </h2>
                            <p className='text-xl text-gray-600 max-w-4xl mx-auto font-light'>
                                Een zorgvuldig samengesteld traject van zes
                                maanden, waarbij theorie en praktijk hand in
                                hand gaan voor maximale impact.
                            </p>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                            <div className='bg-white p-8 rounded-none shadow-sm border border-gray-200'>
                                <div className='bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mb-6'>
                                    <User className='h-8 w-8 text-slate-600' />
                                </div>
                                <h3 className='font-semibold text-gold-800 mb-4 text-xl'>
                                    Fase 1: Zelfinzicht
                                </h3>
                                <p className='text-gray-600 mb-6 font-light leading-relaxed'>
                                    Uitgebreide assessment,
                                    persoonlijkheidsanalyse en 360-graden
                                    feedback. Fundamentele zelfkennis opbouwen.
                                </p>
                                <ul className='text-sm text-gray-500 space-y-2 font-light'>
                                    <li>• Intake gesprek</li>
                                    <li>• Zelfscan uitvoering</li>
                                    <li>• Resultaten bespreking</li>
                                    <li>• Persoonlijk ontwikkelplan</li>
                                </ul>
                            </div>

                            <div className='bg-white p-8 rounded-none shadow-sm border border-gray-200'>
                                <div className='bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mb-6'>
                                    <Target className='h-8 w-8 text-slate-600' />
                                </div>
                                <h3 className='font-semibold text-gold-800 mb-4 text-xl'>
                                    Fase 2: Ontwikkeling
                                </h3>
                                <p className='text-gray-600 mb-6 font-light leading-relaxed'>
                                    Intensieve workshops, individuele coaching
                                    sessies en praktijkopdrachten voor concrete
                                    leiderschapsontwikkeling.
                                </p>
                                <ul className='text-sm text-gray-500 space-y-2 font-light'>
                                    <li>• Leiderschapsworkshops</li>
                                    <li>• Individuele coaching</li>
                                    <li>• Praktijkopdrachten</li>
                                    <li>• Peer learning sessies</li>
                                </ul>
                            </div>

                            <div className='bg-white p-8 rounded-none shadow-sm border border-gray-200'>
                                <div className='bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mb-6'>
                                    <BarChart3 className='h-8 w-8 text-slate-600' />
                                </div>
                                <h3 className='font-semibold text-gold-800 mb-4 text-xl'>
                                    Fase 3: Implementatie
                                </h3>
                                <p className='text-gray-600 mb-6 font-light leading-relaxed'>
                                    Toepassing in de dagelijkse praktijk,
                                    follow-up sessies en borging van het
                                    geleerde voor duurzame verandering.
                                </p>
                                <ul className='text-sm text-gray-500 space-y-2 font-light'>
                                    <li>• Actieplan uitvoering</li>
                                    <li>• Progress monitoring</li>
                                    <li>• Follow-up coaching</li>
                                    <li>• Evaluatie & certificering</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className='py-20 bg-white'>
                    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
                            <div>
                                <h2 className='text-4xl font-semibold text-gold-800 mb-8'>
                                    Wat levert het op?
                                </h2>
                                <p className='text-lg text-gray-600 mb-10 leading-relaxed font-light'>
                                    Het Lecture programma zorgt voor meetbare
                                    verbetering in leiderschapseffectiviteit,
                                    teamresultaten en persoonlijke voldoening in
                                    je rol als leider.
                                </p>

                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
                                    <div className='space-y-6'>
                                        <div>
                                            <h3 className='font-semibold text-gold-800 mb-3 text-lg'>
                                                Persoonlijk
                                            </h3>
                                            <ul className='text-gray-600 space-y-2 font-light'>
                                                <li>
                                                    • Verhoogd zelfvertrouwen
                                                </li>
                                                <li>• Duidelijkheid in rol</li>
                                                <li>
                                                    • Betere work-life balans
                                                </li>
                                                <li>
                                                    • Authentiek leiderschap
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='space-y-6'>
                                        <div>
                                            <h3 className='font-semibold text-gold-800 mb-3 text-lg'>
                                                Professioneel
                                            </h3>
                                            <ul className='text-gray-600 space-y-2 font-light'>
                                                <li>
                                                    • Effectievere communicatie
                                                </li>
                                                <li>• Betere besluitvorming</li>
                                                <li>
                                                    • Verhoogde teamperformance
                                                </li>
                                                <li>
                                                    • Meer invloed en impact
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='bg-gradient-to-br from-slate-50 to-white p-10 rounded-none border border-gold-200'>
                                    <h3 className='text-2xl font-semibold text-gold-800 mb-8'>
                                        Programma Details
                                    </h3>
                                    <div className='space-y-6'>
                                        <div className='flex items-center justify-between'>
                                            <span className='text-gray-600 font-light'>
                                                Duur:
                                            </span>
                                            <span className='font-semibold text-gold-800'>
                                                6 maanden
                                            </span>
                                        </div>
                                        <div className='flex items-center justify-between'>
                                            <span className='text-gray-600 font-light'>
                                                Format:
                                            </span>
                                            <span className='font-semibold text-gold-800'>
                                                Incompany
                                            </span>
                                        </div>
                                        <div className='flex items-center justify-between'>
                                            <span className='text-gray-600 font-light'>
                                                Groepsgrootte:
                                            </span>
                                            <span className='font-semibold text-gold-800'>
                                                8-12 deelnemers
                                            </span>
                                        </div>
                                        <div className='flex items-center justify-between'>
                                            <span className='text-gray-600 font-light'>
                                                Contact uren:
                                            </span>
                                            <span className='font-semibold text-gold-800'>
                                                40 uur
                                            </span>
                                        </div>
                                        <div className='flex items-center justify-between'>
                                            <span className='text-gray-600 font-light'>
                                                Individuele coaching:
                                            </span>
                                            <span className='font-semibold text-gold-800'>
                                                4 sessies
                                            </span>
                                        </div>
                                    </div>

                                    <div className='mt-10'>
                                        <a
                                            href='/contact'
                                            className='w-full flex items-center justify-center bg-slate-600 hover:bg-slate-700 text-white font-semibold px-8 py-4 rounded-none transition-colors duration-200'
                                        >
                                            <span>Vraag offerte aan</span>
                                            <ArrowRight className='ml-3 h-5 w-5' />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Lecture;
