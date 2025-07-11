import { SEO } from '@/components/SEO';
import {
    Building2,
    Users,
    Target,
    CheckCircle,
    ArrowRight,
    Shield,
    BookOpen,
} from 'lucide-react';

const ABR = () => {
    const courseSchema = {
        '@context': 'https://schema.org',
        '@type': 'Course',
        name: 'ABR - Algemene Bestuursdienst Rijk - De rol van politiek-ambtelijk adviseur',
        description:
            'Groei in persoonlijk leiderschap - een programma voor beleidsmedewerkers en medewerkers in de uitvoering en het toezicht, ontwikkeld voor en door medewerkers zelf.',
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
            audienceType: 'Beleidsmedewerkers en uitvoeringsmedewerkers',
        },
    };

    return (
        <>
            <SEO
                title='ABR - Algemene Bestuursdienst Rijk - De rol van politiek-ambtelijk adviseur'
                description='Groei in persoonlijk leiderschap - een programma voor beleidsmedewerkers en medewerkers in de uitvoering en het toezicht, ontwikkeld voor en door medewerkers zelf.'
                keywords='algemene bestuursdienst, ABR, politiek ambtelijk adviseur, rijksoverheid, beleidsmedewerkers, persoonlijk leiderschap'
                structuredData={courseSchema}
            />
            {/* Hero Section */}
            <section className='bg-gradient-to-r from-slate-800 to-slate-900 text-white'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
                        <div>
                            <div className='flex items-center space-x-4 mb-8'>
                                <Building2 className='h-16 w-16 text-slate-300' />
                                <div>
                                    <h1 className='text-5xl lg:text-6xl font-bold tracking-tight'>
                                        ABR
                                    </h1>
                                    <p className='text-xl text-slate-100 font-light'>
                                        Ontwikkelprogramma Leiderschap
                                    </p>
                                </div>
                            </div>
                            <p className='text-xl text-slate-100 mb-8 font-light'>
                                Groei in Persoonlijk Leiderschap (incompany)
                            </p>
                            <p className='text-lg leading-relaxed mb-10 font-light'>
                                Training voor de rol van politiek en ambtelijk
                                adviseur binnen het ABR programma. Leer
                                effectief en krachtig je adviserende rol in te
                                vullen in de complexe dynamiek tussen politiek
                                en ambtelijke organisatie.
                            </p>
                            <div className='flex flex-wrap gap-4'>
                                <div className='flex items-center bg-slate-700 px-6 py-3 rounded-full'>
                                    <Shield className='h-5 w-5 mr-2' />
                                    <span className='font-medium'>
                                        ABR Gecertificeerd
                                    </span>
                                </div>
                                <div className='flex items-center bg-white text-slate-800 px-6 py-3 rounded-full'>
                                    <Users className='h-5 w-5 mr-2' />
                                    <span className='font-medium'>
                                        Politiek-Ambtelijk
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='relative'>
                            <img
                                src='SocialRealism.jpg'
                                alt='Government Advisory Training'
                                className='rounded-none shadow-2xl'
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-none'></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ABR Context */}
            <section className='py-20 bg-white'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center mb-16'>
                        <h2 className='text-4xl font-semibold text-slate-800 mb-6'>
                            De Politiek-Ambtelijke Relatie
                        </h2>
                        <p className='text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light'>
                            Het ABR (Algemene Bestuursdienst) programma vormt
                            topambtenaren die de brug slaan tussen politiek en
                            uitvoering. Onze training bereidt u voor op deze
                            cruciale rol in het hart van de democratie.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        <div className='bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-none border border-slate-200'>
                            <div className='bg-slate-600 w-16 h-16 rounded-full flex items-center justify-center mb-6'>
                                <Building2 className='h-8 w-8 text-white' />
                            </div>
                            <h3 className='font-semibold text-slate-800 mb-4 text-xl'>
                                Ambtelijke Professionaliteit
                            </h3>
                            <p className='text-gray-600 font-light leading-relaxed'>
                                Ontwikkel een sterke professionele identiteit
                                als topambtenaar, gebaseerd op onpartijdigheid,
                                integriteit en vakmanschap.
                            </p>
                        </div>

                        <div className='bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-none border border-slate-200'>
                            <div className='bg-slate-600 w-16 h-16 rounded-full flex items-center justify-center mb-6'>
                                <Users className='h-8 w-8 text-white' />
                            </div>
                            <h3 className='font-semibold text-slate-800 mb-4 text-xl'>
                                Politieke Sensitiviteit
                            </h3>
                            <p className='text-gray-600 font-light leading-relaxed'>
                                Leer navigeren in de politieke arena met respect
                                voor democratische processen en politieke
                                verhoudingen.
                            </p>
                        </div>

                        <div className='bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-none border border-slate-200'>
                            <div className='bg-slate-600 w-16 h-16 rounded-full flex items-center justify-center mb-6'>
                                <Target className='h-8 w-8 text-white' />
                            </div>
                            <h3 className='font-semibold text-slate-800 mb-4 text-xl'>
                                Strategisch Adviseren
                            </h3>
                            <p className='text-gray-600 font-light leading-relaxed'>
                                Ontwikkel vaardigheden om complexe
                                beleidsvraagstukken te vertalen naar heldere
                                adviezen en uitvoerbare plannen.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Skills */}
            <section className='py-20 bg-gray-50'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
                        <div>
                            <h2 className='text-4xl font-semibold text-slate-800 mb-8'>
                                Kernvaardigheden voor ABR'ers
                            </h2>
                            <p className='text-lg text-gray-600 mb-10 leading-relaxed font-light'>
                                Als ABR'er bent u de spil tussen politieke
                                ambities en ambtelijke realiteit. Ons programma
                                rust u uit met de unieke vaardigheden die nodig
                                zijn voor deze uitdagende positie.
                            </p>

                            <div className='space-y-6'>
                                <div className='flex items-start space-x-4'>
                                    <CheckCircle className='h-6 w-6 text-slate-500 mt-1' />
                                    <div>
                                        <h3 className='font-semibold text-slate-800 text-lg'>
                                            Strategische Analyse
                                        </h3>
                                        <p className='text-gray-600 font-light'>
                                            Complexe beleidsvraagstukken
                                            doorgronden en helder adviseren
                                        </p>
                                    </div>
                                </div>
                                <div className='flex items-start space-x-4'>
                                    <CheckCircle className='h-6 w-6 text-slate-500 mt-1' />
                                    <div>
                                        <h3 className='font-semibold text-slate-800 text-lg'>
                                            Stakeholder Management
                                        </h3>
                                        <p className='text-gray-600 font-light'>
                                            Effectief samenwerken met politici,
                                            ambtenaren en externe partijen
                                        </p>
                                    </div>
                                </div>
                                <div className='flex items-start space-x-4'>
                                    <CheckCircle className='h-6 w-6 text-slate-500 mt-1' />
                                    <div>
                                        <h3 className='font-semibold text-slate-800 text-lg'>
                                            Politieke Intelligentie
                                        </h3>
                                        <p className='text-gray-600 font-light'>
                                            Begrip van politieke dynamiek en
                                            democratische besluitvorming
                                        </p>
                                    </div>
                                </div>
                                <div className='flex items-start space-x-4'>
                                    <CheckCircle className='h-6 w-6 text-slate-500 mt-1' />
                                    <div>
                                        <h3 className='font-semibold text-slate-800 text-lg'>
                                            Integriteit & Onpartijdigheid
                                        </h3>
                                        <p className='text-gray-600 font-light'>
                                            Handelen vanuit professionele
                                            waarden in politiek gevoelige
                                            situaties
                                        </p>
                                    </div>
                                </div>
                                <div className='flex items-start space-x-4'>
                                    <CheckCircle className='h-6 w-6 text-slate-500 mt-1' />
                                    <div>
                                        <h3 className='font-semibold text-slate-800 text-lg'>
                                            Communicatie & Invloed
                                        </h3>
                                        <p className='text-gray-600 font-light'>
                                            Overtuigend presenteren en adviseren
                                            op het hoogste niveau
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img
                                src='groeps04.jpeg'
                                alt='Strategic Advisory Skills'
                                className='rounded-none shadow-lg'
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Program Structure */}
            <section className='py-20 bg-white'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center mb-16'>
                        <h2 className='text-4xl font-semibold text-slate-800 mb-6'>
                            Programma-opbouw
                        </h2>
                        <p className='text-xl text-gray-600 max-w-4xl mx-auto font-light'>
                            Een intensief 4-maanden durend programma, specifiek
                            ontworpen voor ABR'ers en hun unieke uitdagingen in
                            de politiek-ambtelijke context.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        <div className='bg-white border-2 border-slate-200 p-8 rounded-none shadow-sm'>
                            <div className='bg-slate-600 text-white w-16 h-16 rounded-full flex items-center justify-center mb-6 font-bold text-xl'>
                                1
                            </div>
                            <h3 className='font-semibold text-slate-800 mb-4 text-xl'>
                                Politiek-Ambtelijke Verhoudingen
                            </h3>
                            <p className='text-gray-600 mb-6 font-light leading-relaxed'>
                                Verdieping in de constitutionele kaders,
                                democratische legitimiteit en de unieke positie
                                van de ABR'er in het bestuurlijke stelsel.
                            </p>
                            <ul className='text-sm text-gray-500 space-y-2 font-light'>
                                <li>• Democratie en rechtsstaat</li>
                                <li>• Rol van de ambtelijke top</li>
                                <li>• Politieke sensitiviteit</li>
                                <li>• Case studies uit de praktijk</li>
                            </ul>
                        </div>

                        <div className='bg-white border-2 border-slate-200 p-8 rounded-none shadow-sm'>
                            <div className='bg-slate-600 text-white w-16 h-16 rounded-full flex items-center justify-center mb-6 font-bold text-xl'>
                                2
                            </div>
                            <h3 className='font-semibold text-slate-800 mb-4 text-xl'>
                                Strategisch Adviseren
                            </h3>
                            <p className='text-gray-600 mb-6 font-light leading-relaxed'>
                                Praktische vaardigheden voor het analyseren van
                                complexe beleidsvraagstukken en het formuleren
                                van heldere adviezen.
                            </p>
                            <ul className='text-sm text-gray-500 space-y-2 font-light'>
                                <li>• Beleidsanalyse technieken</li>
                                <li>• Adviesvaardigheden</li>
                                <li>• Presentatie technieken</li>
                                <li>• Omgaan met onzekerheid</li>
                            </ul>
                        </div>

                        <div className='bg-white border-2 border-slate-200 p-8 rounded-none shadow-sm'>
                            <div className='bg-slate-600 text-white w-16 h-16 rounded-full flex items-center justify-center mb-6 font-bold text-xl'>
                                3
                            </div>
                            <h3 className='font-semibold text-slate-800 mb-4 text-xl'>
                                Stakeholder Dynamiek
                            </h3>
                            <p className='text-gray-600 mb-6 font-light leading-relaxed'>
                                Navigeren in complexe netwerken van politici,
                                ambtenaren, media en maatschappelijke
                                organisaties.
                            </p>
                            <ul className='text-sm text-gray-500 space-y-2 font-light'>
                                <li>• Stakeholder mapping</li>
                                <li>• Netwerk management</li>
                                <li>• Media omgang</li>
                                <li>• Crisis communicatie</li>
                            </ul>
                        </div>

                        <div className='bg-white border-2 border-slate-200 p-8 rounded-none shadow-sm'>
                            <div className='bg-slate-600 text-white w-16 h-16 rounded-full flex items-center justify-center mb-6 font-bold text-xl'>
                                4
                            </div>
                            <h3 className='font-semibold text-slate-800 mb-4 text-xl'>
                                Persoonlijk Leiderschap
                            </h3>
                            <p className='text-gray-600 mb-6 font-light leading-relaxed'>
                                Ontwikkeling van authentiek leiderschap onder
                                politieke druk, met focus op integriteit en
                                professionele waarden.
                            </p>
                            <ul className='text-sm text-gray-500 space-y-2 font-light'>
                                <li>• Persoonlijke effectiviteit</li>
                                <li>• Omgaan met druk</li>
                                <li>• Ethisch leiderschap</li>
                                <li>• Work-life integration</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ABR Logo Section & CTA */}
            <section className='py-20 bg-slate-800'>
                <div className='max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8'>
                    <div className='flex items-center justify-center space-x-6 mb-10'>
                        <Building2 className='h-20 w-20 text-slate-300' />
                        <div className='text-left'>
                            <h2 className='text-4xl font-bold text-white'>
                                ABR Ontwikkelprogramma
                            </h2>
                            <p className='text-slate-100 text-lg font-light'>
                                In samenwerking met de Algemene Bestuursdienst
                            </p>
                        </div>
                    </div>

                    <p className='text-xl text-slate-100 mb-10 leading-relaxed font-light'>
                        Bereid u voor op een succesvolle carrière als
                        topambtenaar. Ontwikkel de vaardigheden die u nodig
                        heeft om effectief te adviseren en leiding te geven in
                        de complexe wereld van politiek en bestuur.
                    </p>

                    <div className='bg-white bg-opacity-10 backdrop-blur-sm rounded-none p-10 mb-10'>
                        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 text-white'>
                            <div>
                                <h3 className='font-semibold mb-3 text-lg'>
                                    Duur
                                </h3>
                                <p className='text-slate-100 font-light'>
                                    4 maanden
                                </p>
                            </div>
                            <div>
                                <h3 className='font-semibold mb-3 text-lg'>
                                    Format
                                </h3>
                                <p className='text-slate-100 font-light'>
                                    Incompany
                                </p>
                            </div>
                            <div>
                                <h3 className='font-semibold mb-3 text-lg'>
                                    Doelgroep
                                </h3>
                                <p className='text-slate-100 font-light'>
                                    ABR'ers
                                </p>
                            </div>
                            <div>
                                <h3 className='font-semibold mb-3 text-lg'>
                                    Certificering
                                </h3>
                                <p className='text-slate-100 font-light'>
                                    ABR erkend
                                </p>
                            </div>
                        </div>
                    </div>

                    <a
                        href='/contact'
                        className='inline-flex items-center bg-white hover:bg-gray-100 text-slate-800 font-semibold px-10 py-5 rounded-none transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                    >
                        <BookOpen className='mr-3 h-5 w-5' />
                        <span>Informatie aanvragen</span>
                        <ArrowRight className='ml-3 h-5 w-5' />
                    </a>
                </div>
            </section>
        </>
    );
};

export default ABR;
