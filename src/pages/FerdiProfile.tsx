import { SEO } from '@/components/SEO';
import {
    MapPin,
    Briefcase,
    GraduationCap,
    Heart,
    Star,
    Check,
    Sun,
} from 'lucide-react';
import { faChess } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TestimonialsSlider from '@/components/TestimonialsSlider';

const FerdiProfile = () => {
    const personSchema = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Ferdi Licher',
        jobTitle: 'Senior Leadership Coach & Trainer',
        worksFor: {
            '@type': 'Organization',
            name: 'Tharros Training & Coaching',
        },
        description:
            'Ervaren trainer, coach en moderator met 35 jaar ervaring in de rijksoverheid, gespecialiseerd in leiderschapsontwikkeling voor de publieke sector.',
        image: 'https://www.tharros-trainingcoaching.nl/images/Ferdi01.jpeg',
        url: 'https://www.tharros-trainingcoaching.nl/ferdi-licher',
        birthPlace: 'Ermelo, Nederland',
        alumniOf: ['Universiteit van Amsterdam', 'Universiteit Padova, Italië'],
        knowsAbout: [
            'Leiderschapsontwikkeling',
            'Coaching',
            'Publieke sector',
            'Organisatieverandering',
            'Ambtelijk vakmanschap',
            'Politiek-ambtelijke advisering',
        ],
        sameAs: ['https://www.linkedin.com/in/ferdi-licher'],
    };

    return (
        <>
            <SEO
                title="Ferdi Licher - Moderator, Trainer en Coach voor de Publieke Sector"
                description="Ferdi Licher heeft 35 jaar ervaring in de rijksoverheid, waarvan 25 jaar als leidinggevende. Nu helpt hij jonge ambtenaren en beginnend leidinggevenden het verschil te maken door zijn expertise in leiderschapsontwikkeling."
                keywords="ferdi licher, leadership coach rijksoverheid, trainer publieke sector, moderator, leiderschapsontwikkeling overheid, ambtelijk vakmanschap, BZK, OCW, SZW, emerging leaders"
                structuredData={personSchema}
            />
            {/* Featured Image Section */}
            <section className="mb-12 bg-gradient-to-t from-black/85 to-gold-900 text-white">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                        <div>
                            <h1 className="mb-2 text-4xl font-bold lg:text-5xl">
                                Ferdi Licher
                            </h1>
                            <p className="mb-6 text-2xl text-slate-600">
                                Moderator, trainer en coach
                            </p>
                            <p className="mb-8 text-xl font-light leading-loose">
                                Na mijn jarenlange ervaring als leidinggevende
                                bij verschillende ministeries wil ik met jonge
                                medewerkers en beginnend leidinggevenden delen
                                hoe je als ambtenaar het verschil kunt maken.
                            </p>
                            <div className="flex items-center space-x-10 text-slate-600">
                                <div className="flex items-center">
                                    <MapPin className="mr-2 h-5 w-5" />
                                    <span>Amsterdam / Siracusa</span>
                                </div>
                                <div className="flex items-center">
                                    <Briefcase className="mr-2 h-5 w-5" />
                                    <span>35+ jaar rijksoverheid</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="overflow-hidden rounded-lg shadow-2xl">
                                <img
                                    src="images/Ferdi_Profil.jpeg"
                                    alt="Ferdi Licher - Senior Leadership Coach & Trainer"
                                    className="h-96 w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Background & Journey Section */}
            <section className="bg-white py-16">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
                        <div className="space-y-8">
                            <div>
                                <h2 className="mb-6 text-3xl font-semibold text-gold-800">
                                    Mijn achtergrond
                                </h2>
                                <div className="space-y-4 text-lg leading-relaxed text-gray-700">
                                    <p>
                                        Ik ben geboren in Ermelo en opgegroeid
                                        in de Veluwse bossen. Daarna heb ik
                                        gewoond in Arnhem, Modena (Italië) en
                                        inmiddels alweer 35 jaar in Amsterdam.
                                        Sinds begin dit jaar ook voor een deel
                                        van het jaar in Siracusa, een Oudgriekse
                                        stad op Sicilië.
                                    </p>
                                    <p>
                                        Ik ben opgeleid als
                                        bewegingsonderwijzer, heb enkele jaren
                                        als leraar voor de klas gestaan en ben
                                        vervolgens arbeid- en
                                        organisatiepsycholoog gaan studeren in
                                        Padova (Italië) en Amsterdam.
                                    </p>
                                    <p>
                                        Ik heb bijna 35 jaar ervaring bij de
                                        rijksoverheid waarvan ruim 25 jaar als
                                        leidinggevende. Eerst bij het ministerie
                                        van SZW, later bij OCW en de laatste 15
                                        jaar bij het ministerie van BZK onder
                                        meer al, directeur Bouwen en Energie en
                                        programmadirecteur Verduurzaming
                                        Groningen.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:pl-8">
                            <div className="mb-6 rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
                                <h3 className="mb-4 flex items-center text-xl font-semibold text-slate-800">
                                    <GraduationCap className="mr-4 h-6 w-6 text-slate-700" />
                                    Opleiding
                                </h3>
                                <ul className="space-y-3">
                                    <li className="items-start">
                                        <span className="text-gray-700">
                                            <Check className="mr-2 inline-flex text-slate-700" />
                                            Bewegingsonderwijzer
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-gray-700">
                                            <Check className="mr-2 inline-flex text-slate-700" />
                                            Arbeid- en Organisatiepsycholoog
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-gray-700">
                                            <Check className="mr-2 inline-flex text-slate-700" />
                                            Universiteit van Amsterdam
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-gray-700">
                                            <Check className="mr-2 inline-flex text-slate-700" />
                                            Universiteit Padova (Italië)
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
                                <h3 className="mb-4 flex items-center text-xl font-semibold text-slate-800">
                                    <MapPin className="mr-3 h-6 w-6 text-slate-700" />
                                    Opleiding
                                </h3>
                                <ul className="space-y-3">
                                    <li className="items-start">
                                        <span className="text-gray-700">
                                            <Check className="mr-2 inline-flex text-slate-700" />
                                            Ermelo (geboorteplaats)
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-gray-700">
                                            <Check className="mr-2 inline-flex text-slate-700" />
                                            Arnhem
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-gray-700">
                                            <Check className="mr-2 inline-flex text-slate-700" />
                                            Modena, Italië
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-gray-700">
                                            <Check className="mr-2 inline-flex text-slate-700" />
                                            Amsterdam (35 jaar)
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-gray-700">
                                            <Check className="mr-2 inline-flex text-slate-700" />
                                            Siracusa, Sicilië (seizoensgebonden)
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Leiderschapsvisie Section */}
            {/* <section className='py-16 bg-white'>
                <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='bg-gradient-to-br to-gold-900 from-black/85 rounded-lg p-8 md:p-12 text-white'>
                        <h3 className='text-2xl font-semibold mb-6 text-slate-600'>
                            Mijn leiderschapsvisie
                        </h3>
                        <div className='space-y-6 leading-loose '>
                            <p>
                                Als rode draad door mijn loopbaan loopt het
                                aspect van het ontwerpen, het effectief leren
                                samenspelen en het enthousiasmeren van jonge
                                mensen.
                            </p>
                            <p>
                                In mijn visie op leiderschap staan het
                                ontwikkelen van{' '}
                                <strong>moed en zelfvertrouwen</strong>{' '}
                                centraal, en het durven vertrouwen op intuïtie
                                en improvisatie.
                            </p>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* Leadership and vision Section */}
            <section className="mt-12 bg-slate-100/30 py-20 pt-20">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-start gap-12 text-gray-700 lg:grid-cols-2">
                        <div>
                            <h3 className="mb-8 text-3xl font-semibold text-gold-800">
                                Mijn leiderschapsvisie
                            </h3>
                            <div className="space-y-6 text-lg leading-relaxed">
                                <p>
                                    Als rode draad door mijn loopbaan loopt het
                                    aspect van het ontwerpen, het effectief
                                    leren samenspelen en het enthousiasmeren van
                                    jonge mensen.
                                </p>
                                <p>
                                    In mijn visie op leiderschap staan het
                                    ontwikkelen van{' '}
                                    <strong>moed en zelfvertrouwen</strong>{' '}
                                    centraal, en het durven vertrouwen op
                                    intuïtie en improvisatie.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="rounded-lg border border-gray-200 bg-white/75 p-5 shadow-sm">
                                <h4 className="mb-2 text-xl font-semibold leading-snug text-slate-800">
                                    Directeur Bouwen en Energie
                                </h4>
                                <p className="text-gray-600">
                                    Ministerie van BZK - Strategische leiding
                                    aan beleidsontwikkeling{' '}
                                </p>
                            </div>
                            <div className="rounded-lg border border-gray-200 bg-white/75 p-5 shadow-sm">
                                <h4 className="mb-2 text-xl font-semibold leading-snug text-slate-800">
                                    Programmadirecteur Verduurzaming Groningen
                                </h4>
                                <p className="text-gray-600">
                                    Complexe programma's leiden in uitdagende
                                    omstandigheden
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Career Experience Section */}
            <section className="bg-slate-100/30 py-20 pt-14">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <h2 className="mx-auto mb-12 max-w-6xl text-center text-2xl font-semibold text-gold-800">
                        Leidinggevende (25+ jaar ervaring) en huidige
                        werkzaamheden
                    </h2>
                    <div className="grid grid-cols-1 items-start gap-6 text-gray-700 lg:grid-cols-2">
                        <div className="rounded-lg bg-white p-4 shadow-sm">
                            <h3 className="mb-2 text-xl font-semibold leading-snug text-slate-800">
                                Tharros Training & Coaching
                            </h3>
                            <p className="mb-1 text-gray-600">
                                Medio 2025 ben ik gestart met mijn bedrijf
                                Tharros training en coaching, gericht op
                                leiderschapsontwikkeling in de publieke sector.
                            </p>
                        </div>

                        <div className="rounded-lg bg-white p-6 shadow-sm">
                            <h3 className="mb-2 text-xl font-semibold leading-snug text-slate-800">
                                Comenius leergang
                            </h3>
                            <p className="mb-1 text-gray-600">
                                Moderator van de Comenius leergang 'Emerging
                                Leaders' die ik samen met Comenius heb
                                ontwikkeld.
                            </p>
                        </div>

                        <div className="rounded-lg bg-white p-6 shadow-sm">
                            <h3 className="mb-2 text-xl font-semibold leading-snug text-slate-800">
                                Ministerie BZK
                            </h3>
                            <p className="mb-1 text-gray-600">
                                Leergang 'Groeien in persoonlijk leiderschap'
                                die meerdere succesvolle edities heeft
                                doorlopen.
                            </p>
                        </div>

                        <div className="rounded-lg bg-white p-6 shadow-sm">
                            <h3 className="mb-2 text-xl font-semibold leading-snug text-slate-800">
                                Algemene bestuursdienst
                            </h3>
                            <p className="mb-1 text-gray-600">
                                Trainingen voor leidinggevenden op het thema
                                politiek-ambtelijke advisering en workshops
                                binnen het rijk.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Current Work Section */}
            <section className="bg-white py-20">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <h2 className="mb-12 text-center text-3xl font-semibold text-slate-700">
                        Lust for life...
                    </h2>

                    {/* Leadership Philosophy Section */}
                    <div className="mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                            <div className="text-center">
                                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gold-100">
                                    <Heart className="h-10 w-10 text-gold-600" />
                                </div>
                                <h3 className="mb-2 text-2xl font-semibold text-slate-800">
                                    Tango
                                </h3>
                                <p className="text-lg text-gray-600">
                                    Passie voor verbinding en improvisatie
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gold-100">
                                    <Sun className="h-10 w-10 text-gold-600" />
                                </div>
                                <h3 className="mb-2 text-2xl font-semibold text-slate-800">
                                    Sport
                                </h3>
                                <p className="text-lg text-gray-600">
                                    Doorzettingsvermogen en teamwork
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gold-100">
                                    <FontAwesomeIcon
                                        icon={faChess}
                                        size="2x"
                                        className="text-gold-600"
                                    />
                                </div>

                                <h3 className="mb-2 text-2xl font-semibold text-slate-800">
                                    Schaken
                                </h3>
                                <p className="text-lg text-gray-600">
                                    Strategisch denken en geduld
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Testimonials Section */}
            <section className="bg-white py-16">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <h2 className="mb-12 text-center text-3xl font-semibold text-gold-800">
                        Wat anderen zeggen!
                    </h2>
                    <TestimonialsSlider />
                </div>
            </section>

            {/* Featured Image */}
            <div className="mt-12 max-h-[500px]">
                <img
                    src="images/Profil_ferdi.jpg"
                    alt="Museum of the Future Dubai"
                    className="h-full w-full object-cover"
                />
            </div>
        </>
    );
};

export default FerdiProfile;
