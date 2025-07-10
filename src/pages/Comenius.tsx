import { SEO } from '@/components/SEO';
import {
    Lightbulb,
    Users,
    Heart,
    Handshake,
    CheckCircle,
    ArrowRight,
    Star,
} from 'lucide-react';

const Comenius = () => {
    const courseSchema = {
        '@context': 'https://schema.org',
        '@type': 'Course',
        name: 'Comenius - Leergang Emerging Leaders in de Publieke Sector',
        description:
            'Een transformatieve leergang voor de nieuwe generatie leidinggevenden in de publieke sector. Focus op visie, waarden, cocreatie en het herstel van vertrouwen.',
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
            audienceType: 'Emerging leaders in de publieke sector',
        },
    };

    return (
        <>
            <SEO
                title='Comenius - Leergang Emerging Leaders in de Publieke Sector'
                description='Een transformatieve leergang voor de nieuwe generatie leidinggevenden in de publieke sector. Focus op visie, waarden, cocreatie en het herstel van vertrouwen.'
                keywords='emerging leaders, publieke sector leiderschap, leergang leiderschap, jong leiderschap, overheid training, cocreatie'
                structuredData={courseSchema}
            />
            <div className='pt-16'>
                {/* Hero Section */}
                <section className='bg-gradient-to-r from-slate-800 to-slate-900 text-white'>
                    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                            <div>
                                <h1 className='text-4xl lg:text-5xl font-bold mb-6'>
                                    Comenius
                                </h1>
                                <p className='text-xl text-slate-100 mb-6'>
                                    Leergang 'Emerging Leaders in de Publieke
                                    Sector'
                                </p>
                                <p className='text-lg leading-relaxed mb-8'>
                                    Een transformatieve leergang voor de nieuwe
                                    generatie leidinggevenden in de publieke
                                    sector. Focus op visie, waarden, cocreatie
                                    en het herstel van vertrouwen tussen burger
                                    en overheid.
                                </p>
                                <div className='flex flex-wrap gap-4'>
                                    <div className='flex items-center bg-slate-700 px-4 py-2 rounded-full'>
                                        <Star className='h-5 w-5 mr-2' />
                                        <span>Flagship Programma</span>
                                    </div>
                                    <div className='flex items-center bg-gold-800 px-4 py-2 rounded-full'>
                                        <Users className='h-5 w-5 mr-2' />
                                        <span>Emerging Leaders</span>
                                    </div>
                                </div>
                            </div>
                            <div className='relative'>
                                <img
                                    src='lecture.jpeg'
                                    alt='Emerging Leaders Program'
                                    className='rounded-lg shadow-2xl'
                                />
                                <div className='absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-lg'></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Vision Section */}
                <section className='py-16 bg-white'>
                    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                        <div className='text-center mb-12'>
                            <h2 className='text-3xl font-bold text-gold-800 mb-4'>
                                De Nieuwe Generatie Leiders
                            </h2>
                            <p className='text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed'>
                                De publieke sector heeft behoefte aan leiders
                                die anders durven te denken, verbinding maken en
                                vertrouwen herstellen. Het Comenius programma
                                ontwikkelt precies deze vaardigheden.
                            </p>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                            <div className='text-center'>
                                <div className='bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                                    <Lightbulb className='h-8 w-8 text-slate-600' />
                                </div>
                                <h3 className='font-bold text-slate-800 mb-3'>
                                    Visie
                                </h3>
                                <p className='text-gold-800'>
                                    Ontwikkel een heldere visie op de toekomst
                                    van de publieke sector en uw rol daarin.
                                </p>
                            </div>

                            <div className='text-center'>
                                <div className='bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                                    <Heart className='h-8 w-8 text-gold-900' />
                                </div>
                                <h3 className='font-bold text-gold-800 mb-3'>
                                    Waarden
                                </h3>
                                <p className='text-gray-600'>
                                    Verdiep uw begrip van kernwaarden en
                                    integreer deze in uw dagelijkse
                                    leiderschapsgedrag.
                                </p>
                            </div>

                            <div className='text-center'>
                                <div className='bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                                    <Users className='h-8 w-8 text-slate-600' />
                                </div>
                                <h3 className='font-bold text-slate-800 mb-3'>
                                    Cocreatie
                                </h3>
                                <p className='text-gold-800'>
                                    Leer samen te werken met burgers, collega's
                                    en stakeholders voor duurzame oplossingen.
                                </p>
                            </div>

                            <div className='text-center'>
                                <div className='bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                                    <Handshake className='h-8 w-8 text-gold-6800' />
                                </div>
                                <h3 className='font-bold text-gold-800 mb-3'>
                                    Vertrouwen
                                </h3>
                                <p className='text-gray-600'>
                                    Herstel en versterk het vertrouwen tussen
                                    overheid en samenleving door authentiek
                                    leiderschap.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Program Content */}
                <section className='py-16 bg-gray-50'>
                    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                            <div>
                                <h2 className='text-3xl font-bold text-slate-800 mb-6'>
                                    Waarom Comenius?
                                </h2>
                                <p className='text-lg text-gray-600 mb-6 leading-relaxed'>
                                    Genoemd naar de grote pedagoog en filosoof
                                    Jan Amos Comenius, staat dit programma voor
                                    vernieuwend denken en leren. Net zoals
                                    Comenius de basis legde voor modern
                                    onderwijs, leggen wij de basis voor modern
                                    leiderschap in de publieke sector.
                                </p>

                                <div className='space-y-4'>
                                    <div className='flex items-start space-x-3'>
                                        <CheckCircle className='h-6 w-6 text-slate-500 mt-1' />
                                        <div>
                                            <h3 className='font-semibold text-slate-800'>
                                                Toekomstgericht Denken
                                            </h3>
                                            <p className='text-gray-600'>
                                                Ontwikkel een strategische
                                                mindset voor de uitdagingen van
                                                morgen
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex items-start space-x-3'>
                                        <CheckCircle className='h-6 w-6 text-slate-500 mt-1' />
                                        <div>
                                            <h3 className='font-semibold text-slate-800'>
                                                Burgerbetrokkenheid
                                            </h3>
                                            <p className='text-gray-600'>
                                                Leer hoe u burgers effectief
                                                kunt betrekken bij beleid en
                                                uitvoering
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex items-start space-x-3'>
                                        <CheckCircle className='h-6 w-6 text-slate-500 mt-1' />
                                        <div>
                                            <h3 className='font-semibold text-slate-800'>
                                                Innovatief Leiderschap
                                            </h3>
                                            <p className='text-gray-600'>
                                                Ontwikkel vaardigheden om
                                                innovatie en verandering te
                                                leiden
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex items-start space-x-3'>
                                        <CheckCircle className='h-6 w-6 text-slate-500 mt-1' />
                                        <div>
                                            <h3 className='font-semibold text-slate-800'>
                                                Netwerk & Peer Learning
                                            </h3>
                                            <p className='text-gray-600'>
                                                Bouw een sterk netwerk van
                                                gelijkgestemde professionals
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img
                                    src='At-the-Cycle-RaceTrack.jpeg'
                                    alt='Comenius Learning Philosophy'
                                    className='rounded-lg shadow-lg'
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Learning Journey */}
                <section className='py-16 bg-white'>
                    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                        <div className='text-center mb-12'>
                            <h2 className='text-3xl font-bold text-slate-800 mb-4'>
                                De Leerreis
                            </h2>
                            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                                Een intensieve 8-maanden durende reis waarin u
                                zich ontwikkelt tot een inspirerende leider voor
                                de publieke sector van de toekomst.
                            </p>
                        </div>

                        <div className='space-y-8'>
                            <div className='flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8'>
                                <div className='flex-shrink-0'>
                                    <div className='bg-slate-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg'>
                                        1
                                    </div>
                                </div>
                                <div className='flex-1 bg-slate-50 p-6 rounded-lg'>
                                    <h3 className='font-bold text-slate-800 mb-3'>
                                        Fundament & Visie (Maand 1-2)
                                    </h3>
                                    <p className='text-gray-600'>
                                        Verkenning van persoonlijke waarden,
                                        ontwikkeling van toekomstvisie en
                                        introductie in moderne
                                        leiderschapstheorieën voor de publieke
                                        sector.
                                    </p>
                                </div>
                            </div>

                            <div className='flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8'>
                                <div className='flex-shrink-0'>
                                    <div className='bg-slate-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg'>
                                        2
                                    </div>
                                </div>
                                <div className='flex-1 bg-slate-50 p-6 rounded-lg'>
                                    <h3 className='font-bold text-slate-800 mb-3'>
                                        Verbinding & Cocreatie (Maand 3-4)
                                    </h3>
                                    <p className='text-gray-600'>
                                        Praktische vaardigheden voor stakeholder
                                        management, participatie en co-creatie
                                        met burgers en andere partners.
                                    </p>
                                </div>
                            </div>

                            <div className='flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8'>
                                <div className='flex-shrink-0'>
                                    <div className='bg-slate-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg'>
                                        3
                                    </div>
                                </div>
                                <div className='flex-1 bg-slate-50 p-6 rounded-lg'>
                                    <h3 className='font-bold text-slate-800 mb-3'>
                                        Innovatie & Verandering (Maand 5-6)
                                    </h3>
                                    <p className='text-gray-600'>
                                        Leren leiden van innovatie en
                                        transformatie binnen complexe publieke
                                        organisaties en systemen.
                                    </p>
                                </div>
                            </div>

                            <div className='flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8'>
                                <div className='flex-shrink-0'>
                                    <div className='bg-slate-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg'>
                                        4
                                    </div>
                                </div>
                                <div className='flex-1 bg-slate-50 p-6 rounded-lg'>
                                    <h3 className='font-bold text-slate-800 mb-3'>
                                        Impact & Implementatie (Maand 7-8)
                                    </h3>
                                    <p className='text-gray-600'>
                                        Persoonlijk ontwikkelplan, implementatie
                                        in de praktijk en voorbereiding op uw
                                        rol als emerging leader.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Program Details & CTA */}
                <section className='py-16 bg-slate-800'>
                    <div className='max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8'>
                        <h2 className='text-3xl font-bold text-gold-800 mb-6'>
                            Klaar om de leider van morgen te worden?
                        </h2>
                        <p className='text-xl text-slate-100 mb-8 leading-relaxed'>
                            Het Comenius programma is uw springplank naar
                            impactvol leiderschap in de publieke sector. Sluit u
                            aan bij de nieuwe generatie.
                        </p>

                        <div className='bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 mb-8'>
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-white'>
                                <div>
                                    <h3 className='font-semibold mb-2'>Duur</h3>
                                    <p className='text-slate-100'>8 maanden</p>
                                </div>
                                <div>
                                    <h3 className='font-semibold mb-2'>
                                        Deelnemers
                                    </h3>
                                    <p className='text-slate-100'>
                                        12-16 emerging leaders
                                    </p>
                                </div>
                                <div>
                                    <h3 className='font-semibold mb-2'>
                                        Format
                                    </h3>
                                    <p className='text-slate-100'>
                                        Blended learning
                                    </p>
                                </div>
                            </div>
                        </div>

                        <a
                            href='/contact'
                            className='inline-flex items-center bg-gold-950 hover:bg-gold-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                        >
                            <span>Schrijf u in voor Comenius</span>
                            <ArrowRight className='ml-2 h-5 w-5' />
                        </a>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Comenius;
