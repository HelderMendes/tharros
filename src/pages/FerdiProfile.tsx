import { SEO } from '@/components/SEO';
import { MapPin, Briefcase, GraduationCap, Heart, Linkedin, Check, Sun } from 'lucide-react';
import { faChess } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TestimonialsSlider from '@/components/TestimonialsSlider';

const FerdiProfile = () => {
    const personSchema = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Ferdi Licher',
        jobTitle: 'Senior Leadership Coach, Trainer & Moderator',
        worksFor: {
            '@type': 'Organization',
            name: 'Tharros, Training en Coaching',
        },
        description:
            'Ervaren trainer, coach en moderator met 35 jaar ervaring in de rijksoverheid, waarvan 25 jaar als leidinggevende. Gespecialiseerd in leiderschapsontwikkeling voor de publieke sector, met rollen als directeur Bouwen en Energie en programmadirecteur Verduurzaming Groningen bij BZK.',
        image: 'https://www.tharros-trainingcoaching.nl/images/Ferdi_Profil.jpeg',
        url: 'https://www.tharros-trainingcoaching.nl/ferdi-licher',
        birthPlace: 'Ermelo, Nederland',
        homeLocation: [
            {
                '@type': 'Place',
                name: 'Amsterdam, Nederland',
            },
            {
                '@type': 'Place',
                name: 'Siracusa, Sicilië',
            },
        ],
        alumniOf: ['Universiteit van Amsterdam', 'Universiteit Padova, Italië'],
        hasOccupation: [
            {
                '@type': 'Occupation',
                name: 'Bewegingsonderwijzer',
            },
            {
                '@type': 'Occupation',
                name: 'Arbeid- en Organisatiepsycholoog',
            },
            {
                '@type': 'Occupation',
                name: 'Directeur Bouwen en Energie',
                worksFor: 'Ministerie van BZK',
            },
            {
                '@type': 'Occupation',
                name: 'Programmadirecteur Verduurzaming Groningen',
                worksFor: 'Ministerie van BZK',
            },
        ],
        knowsAbout: [
            'Leiderschapsontwikkeling',
            'Coaching',
            'Publieke sector',
            'Organisatieverandering',
            'Ambtelijk vakmanschap',
            'Politiek-ambtelijke advisering',
            'Emerging Leaders training',
            'Comenius leergang',
            'Verduurzaming Groningen',
            'Bouwen en Energie',
            'Persoonlijk leiderschap',
            'Moed en zelfvertrouwen ontwikkeling',
        ],
        hasCredential: [
            'Bewegingsonderwijzer',
            'Arbeid- en Organisatiepsycholoog',
            '35 jaar rijksoverheid ervaring',
            '25 jaar leidinggevende ervaring',
        ],
        interestIn: ['Tango', 'Sport', 'Schaken'],
        sameAs: ['https://www.linkedin.com/in/ferdi-licher'],
    };

    return (
        <>
            <SEO
                title="Ferdi Licher - Senior Leadership Coach & Expert in Publieke Sector | 35+ Jaar Ervaring"
                description="Ferdi Licher: 35 jaar rijksoverheid, 25 jaar leidinggevende bij BZK, OCW & SZW. Van Ermelo naar Amsterdam en Siracusa. Expert in leiderschapsontwikkeling, Emerging Leaders training en politiek-ambtelijke advisering. Moderator Comenius leergang."
                keywords="ferdi licher, leadership coach rijksoverheid, trainer publieke sector, moderator comenius, leiderschapsontwikkeling overheid, BZK directeur, emerging leaders, programmadirecteur verduurzaming groningen, ambtelijk vakmanschap, politiek-ambtelijke advisering, tango schaken sport, amsterdam siracusa, arbeid organisatiepsycholoog"
                structuredData={personSchema}
            />
            {/* Featured Image Section */}
            <section className="mb-12 bg-gradient-to-t from-black/85 to-gold-900 text-white">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                        <div>
                            <h1 className="mb-2 text-4xl font-bold lg:text-5xl">Ferdi Licher</h1>
                            <p className="mb-6 text-2xl text-slate-600">Moderator, trainer en coach</p>
                            <p className="mb-8 text-xl font-light leading-loose">
                                Na mijn jarenlange ervaring als leidinggevende bij verschillende ministeries wil ik met jonge medewerkers en beginnend
                                leidinggevenden delen hoe je als ambtenaar het verschil kunt maken.
                            </p>
                            <div className="flex flex-col space-y-3 text-slate-600 sm:flex-row sm:items-start sm:space-x-10 sm:space-y-0">
                                <div className="flex items-center">
                                    <MapPin className="mr-2 h-5 w-5" />
                                    <span>Amsterdam / Siracusa</span>
                                </div>
                                <div className="flex items-center">
                                    <Briefcase className="mr-2 h-5 w-5" />
                                    <span>35 jaar rijksoverheid</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="overflow-hidden rounded-lg shadow-2xl">
                                <img
                                    src="images/profil.jpg"
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
                                <h2 className="mb-6 text-3xl font-semibold text-gold-800">Mijn achtergrond</h2>
                                <div className="space-y-4 text-lg leading-relaxed text-gray-700">
                                    <p>
                                        Ik ben geboren in Ermelo en opgegroeid in de Veluwse bossen. Daarna heb ik gewoond in Arnhem, Modena (Italië)
                                        en inmiddels alweer 35 jaar in Amsterdam. Sinds begin dit jaar ook voor een deel van het jaar in Siracusa, een
                                        Oudgriekse stad op Sicilië.
                                    </p>
                                    <p>
                                        Ik ben opgeleid als bewegingsonderwijzer, heb enkele jaren als leraar voor de klas gestaan en ben vervolgens
                                        arbeid- en organisatiepsychologie gaan studeren in Padova (Italië) en Amsterdam.
                                    </p>
                                    <p>
                                        Ik heb bijna 35 jaar ervaring bij de rijksoverheid waarvan ruim 25 jaar als leidinggevende. Eerst bij het
                                        ministerie van SZW, later bij OCW en de laatste 15 jaar bij het ministerie van BZK onder meer als, directeur
                                        Bouwen en Energie en programmadirecteur Verduurzaming Groningen.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:pl-8">
                            <div className="mb-6 rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
                                <h3 className="mb-4 flex items-center text-xl font-semibold text-slate-800">
                                    <GraduationCap className="mr-4 h-6 w-6 text-slate-700" />
                                    LinkedIn
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
                                            Topambtenaar Rijksoverheid
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-gray-700">
                                            <Check className="mr-2 inline-flex text-slate-700" />
                                            Tango, schaken, sport
                                        </span>
                                    </li>
                                </ul>
                                <div className="mt-3">
                                    <a
                                        href="https://www.linkedin.com/in/ferdi-licher-20456313/#"
                                        className="flex items-center text-gold-700 transition-colors hover:text-slate-600"
                                        aria-label="LinkedIn"
                                        target="new"
                                    >
                                        <Linkedin className="inline" />
                                        <span className="ml-[9.5px] pt-2 font-semibold">LinkedIn Profile</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership and vision Section */}
            <section className="bg-white py-16">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <div className="rounded-lg bg-gradient-to-b from-black/85 to-gold-900 p-8 text-white md:p-12">
                        <h3 className="mb-6 text-2xl font-semibold text-slate-600">Mijn leiderschapsvisie </h3>
                        <div className="space-y-6 leading-loose">
                            <p>
                                Als rode draad door mijn loopbaan loopt het aspect van het ontwerpen, het effectief leren samenspelen en het
                                enthousiasmeren van jonge mensen.
                            </p>
                            <p>
                                In mijn visie op leiderschap staan het ontwikkelen van moed en zelfvertrouwen centraal, en het durven vertrouwen op
                                intuïtie en improvisatie.
                            </p>
                            <p>Deze elementen van intuïtie en improvisatie vind ik ook terug in mijn passies zoals tangodansen, schaken en sport.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="bg-white py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="mb-12 text-center text-3xl font-semibold text-gold-800">Wat anderen zeggen...</h2>
                    <TestimonialsSlider />
                </div>
            </section>
        </>
    );
};

export default FerdiProfile;
