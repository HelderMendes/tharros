import { SEO } from '@/components/SEO';
import { Check } from 'lucide-react';
import imageMuseumOfTheFuture from 'images/Museum-of-the-Future-Dubai.jpg';

const Tharros = () => {
    return (
        <>
            <SEO
                title="Tharros - Moed en Zelfvertrouwen in Ambtelijk Vakmanschap"
                description="Ontdek waarom Ferdi Licher Tharros koos als bedrijfsnaam. Tharros betekent moed in het Oudgrieks en staat centraal in ambtelijk vakmanschap: durven spreken, richting geven en authentiek leiderschap tonen in de publieke sector."
                keywords="tharros betekenis, moed zelfvertrouwen, ambtelijk vakmanschap, ambtelijke lef, publiek leiderschap, griekse filosofie, dapperheid overheid, leiderschap publieke sector, vier kardinale deugden"
                structuredData={{
                    '@context': 'https://schema.org',
                    '@type': 'Article',
                    headline:
                        'Tharros - Moed en Zelfvertrouwen in Ambtelijk Vakmanschap',
                    description:
                        'De betekenis van Tharros (moed) en hoe dit Oudgriekse concept essentieel is voor ambtelijk vakmanschap en leiderschap in de publieke sector.',
                    author: {
                        '@type': 'Person',
                        name: 'Ferdi Licher',
                        jobTitle: 'Senior Leadership Coach & Trainer',
                    },
                    publisher: {
                        '@type': 'Organization',
                        name: 'Tharros Training & Coaching',
                    },
                    mainEntityOfPage: {
                        '@type': 'WebPage',
                        '@id': 'https://www.tharros-trainingcoaching.nl/tharros',
                    },
                    about: [
                        {
                            '@type': 'Concept',
                            name: 'Tharros',
                            description:
                                'Oudgrieks woord voor moed, geassocieerd met helden en krijgers die moeilijke uitdagingen aangaan',
                        },
                        {
                            '@type': 'Concept',
                            name: 'Ambtelijk Vakmanschap',
                            description:
                                'Professionele vaardigheden en moed om het goede gesprek aan te gaan in de publieke sector',
                        },
                    ],
                }}
            />

            {/* Featured Image Section */}
            <section className="mb-12 bg-gradient-to-t from-black/85 to-gold-900 text-white">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                        <div>
                            <h1 className="mb-2 text-4xl font-bold lg:text-5xl">
                                Tharros
                            </h1>
                            <p className="mb-6 text-2xl text-slate-600">
                                Moed en zelfvertrouwen
                            </p>
                            <p className="mb-8 text-xl font-light leading-loose">
                                Tharros is een Oudgrieks woord dat moed
                                betekent. In de Griekse literatuur wordt
                                'tharros' vaak geassocieerd met helden, krijgers
                                en andere mensen die in staat zijn om moeilijke
                                uitdagingen aan te gaan en hun doelen te
                                bereiken.
                            </p>
                        </div>
                        <div className="relative inset-0 rounded-lg bg-gradient-to-t from-gold-900/50 to-transparent">
                            <img
                                src="images/Tharros_hero.jpeg"
                                alt="De vier hoofddeugden die aan Sint-Hiëronymus verschijnen (Pietro Testa)"
                                className="w-full rounded-sm object-fill shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="bg-white py-16">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
                        <div className="space-y-8">
                            <div>
                                <h3 className="mb-6 text-2xl font-semibold leading-tight text-gold-800">
                                    Moed in het Nederlands betekent dapperheid
                                </h3>
                                <div className="space-y-6 leading-relaxed text-gray-700">
                                    <p>
                                        Tharros verwijst ook naar innerlijke
                                        kracht, zelfvertrouwen en naar een
                                        onbevreesde houding in moeilijke
                                        situaties, de bereidheid risico's te
                                        nemen, angst en onzekerheid te
                                        trotseren.
                                    </p>
                                    <p>
                                        Moed in het Nederlands betekent
                                        dapperheid, de eigenschap om door te
                                        gaan ondanks tegenslag, pijn of
                                        bedreiging. Moed wordt vaak gezien als
                                        een deugd, en is een belangrijke
                                        eigenschap voor leiderschap en
                                        persoonlijke ontwikkeling. Het vergt
                                        moed om tegen te spreken of een nieuwe
                                        koers in te slaan.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:pl-8">
                            <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
                                <h4 className="mb-6 text-xl font-semibold text-gold-800">
                                    Kernwaarden van Tharros
                                </h4>
                                <ul className="space-y-4">
                                    <li className="items-start">
                                        <span className="text-gray-700">
                                            <Check className="mr-2 inline-flex text-gold-700" />
                                            Innerlijke kracht en zelfvertrouwen
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-gray-700">
                                            <Check className="mr-2 inline-flex text-gold-700" />
                                            Onbevreesde houding in moeilijke
                                            situaties
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-gray-700">
                                            <Check className="mr-2 inline-flex text-gold-700" />
                                            Bereidheid risico's te nemen
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-gray-700">
                                            <Check className="mr-2 inline-flex text-gold-700" />
                                            Doorzettingsvermogen bij tegenslagen
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Personal Philosophy Section */}
            <section className="bg-white py-16">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <div className="rounded-lg bg-gradient-to-b from-black/85 to-gold-900 p-8 text-white md:p-12">
                        <h3 className="mb-6 text-2xl font-semibold text-slate-600">
                            Waarom Tharros?
                        </h3>
                        <div className="space-y-6 leading-loose">
                            <p>
                                Ik heb 'Tharros' als naam voor mijn bedrijf
                                gekozen omdat ambtelijke lef voor mij cruciaal
                                is in goed ambtelijk vakmanschap. Niet je mond
                                houden als je vindt dat iets niet deugt. Niet je
                                mond houden als je denkt dat iets niet klopt.
                            </p>
                            <p>
                                Zelfvertrouwen hebben om het goede gesprek aan
                                te gaan over de onderlinge verhoudingen en over
                                ingewikkelde vraagstukken. Dat is onderdeel van
                                ambtelijk vakmanschap, maar vergt ook ambtelijk
                                vakmanschap. Weten waar je het over hebt. Kennis
                                van zaken hebben. Nieuwe perspectieven en
                                alternatieven kunnen bieden.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="mt-12 bg-slate-100/30 py-20">
                <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
                    <div>
                        <h3 className="mb-8 text-3xl font-semibold text-gold-800">
                            Leiderschap in de publieke sector
                        </h3>
                        <div className="space-y-6 leading-relaxed">
                            <p>
                                Leiderschap in de publieke sector vraagt
                                wijsheid, kunnen luisteren en doorvragen, maar
                                ook dat je richting durft te geven en de koers
                                weet uit te zetten.
                            </p>
                            <p>
                                In de training en coaching gaat het om kunnen en
                                durven vertrouwen op jezelf, echt weten waar je
                                het over hebt, verbinding kunnen maken juist ook
                                als het ingewikkeld wordt, richting durven geven
                                en het in openheid durven spreken over wat er op
                                dat moment toe doet.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 items-center gap-12 text-gray-700 lg:grid-cols-2"></div>
                </div>
            </section>
        </>
    );
};

export default Tharros;
