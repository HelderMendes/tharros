// workshops.jsx
import { Users, Award, CheckCircle, Briefcase } from 'lucide-react';
import { SEO } from '@/components/SEO';

const kernAspecten = [
    {
        icon: Briefcase,
        title: 'Moderatie van workshops',
        description: 'Elke stem telt, scherpe vraagstelling, sfeer van vertrouwen.',
    },
    {
        icon: CheckCircle,
        title: 'Podiumgesprekken',
        description: 'Interview in College Tour stijl waarbij de achterkant van persoon en verhaal scherp naar voren komt',
    },
    {
        icon: Users,
        title: 'Maatwerk voor organisaties',
        description: "Begeleiding van gesprekken over het maken van impact, dilemma's en organisatieverandering",
    },
];

const Workshops = () => {
    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Workshops - Maatwerk en moderatie voor teams en organisaties',
        description:
            'Professionele workshops en moderatie voor teams en organisaties. Oplossingsgerichte begeleiding, podiumgesprekken en maatwerk voor uiteenlopende sectoren.',
        provider: {
            '@type': 'Organization',
            name: 'Tharros, Training en Coaching',
            url: 'https://tharros.nl',
        },
        serviceType: 'Workshop Facilitation',
        areaServed: 'Nederland',
        audience: {
            '@type': 'Audience',
            audienceType: 'Teams en organisaties publieke en private sector',
        },
    };

    return (
        <>
            <SEO
                title="Workshops - Maatwerk en Moderatie voor Teams en Organisaties"
                description="Professionele workshops en moderatie voor teams en organisaties. Oplossingsgerichte begeleiding, podiumgesprekken en maatwerk voor overheidsinstellingen, NGOs en private sector."
                keywords="workshops, moderatie, teamworkshops, organisatie workshops, podiumgesprekken, workshop facilitatie, team training, groepsdynamiek, overheid workshops, NGO workshops, bedrijfsworkshops"
                structuredData={serviceSchema}
            />
            {/* Hero Section */}
            <section className="mb-12 bg-gradient-to-br from-black/95 to-gold-900 text-white">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                        <div>
                            <h1 className="mb-2 text-3xl font-bold lg:text-4xl">Workshops</h1>
                            <p className="mb-6 text-2xl text-gold-300">Maatwerk en moderatie voor teams en organisaties</p>
                            <p className="mb-8 text-xl font-light leading-loose">
                                Als u met uw team een goed gesprek wilt voeren over wat er goed gaat en beter kan, in beleid of uitvoering, dan kan ik
                                u daarbij helpen door te zorgen dat de vraagstelling scherp en duidelijk wordt, er geluisterd en doorgevraagd wordt en
                                er vrijmoedig met elkaar wordt gesproken en alle stemmen gehoord worden.
                            </p>
                            text-gold-300
                            <div className="flex flex-col items-start space-x-0 space-y-3 text-gold-300 sm:flex-row sm:items-start sm:space-x-10 sm:space-y-0">
                                <div className="flex items-start">
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
                                    src="images/workshops_intro.jpeg"
                                    alt="Ferdi Licher - Senior Leadership Coach & Trainer"
                                    className="h-96 w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Aanpak Section */}
            <section className="bg-white py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto mb-16 max-w-4xl text-center">
                        <h2 className="mb-6 text-3xl font-bold leading-snug text-gold-600 lg:text-4xl lg:leading-snug">Voorbeelden</h2>
                        <p className="mx-auto pb-3 text-xl leading-relaxed text-gray-700">
                            Voorbeelden zijn een podiumgesprek met Diederik Samsom over zijn persoonlijke ervaringen, drijfveren en ambities in het
                            klimaatbeleid. Een gesprek over meer impact maken bij afdeling Corporate Communicatie bij de Belastingdienst en een
                            vrijplaats met Comenius alumni en ex-directeur-generaal Mark Frequin over over het thema het Rijk in roerige tijden.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {kernAspecten.map((aspect, index) => (
                            <div key={index} className="group relative">
                                <div className="h-full rounded-2xl bg-gradient-to-br from-slate-50 to-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold-500/10">
                                        <aspect.icon className="h-6 w-6 text-gold-600" />
                                    </div>
                                    <h3 className="mb-4 text-xl font-semibold text-gold-600">{aspect.title}</h3>
                                    <p className="leading-relaxed text-black">{aspect.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Workshops;
