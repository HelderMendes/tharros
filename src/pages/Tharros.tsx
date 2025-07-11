import { SEO } from '@/components/SEO';
import { Check } from 'lucide-react';
import imageMuseumOfTheFuture from 'images/Museum-of-the-Future-Dubai.jpg';

const Tharros = () => {
    return (
        <>
            <SEO
                title='Tharros - Moed en Zelfvertrouwen'
                description='Ontdek de betekenis van Tharros - moed en zelfvertrouwen. Leer hoe deze antieke Griekse filosofie onze moderne leiderschapsbenadering vormgeeft in de publieke sector.'
                keywords='tharros betekenis, moed zelfvertrouwen, griekse filosofie, leiderschap filosofie, antieke stad tharros'
            />

            {/* Featured Image Section */}
            <section className='bg-gradient-to-t to-gold-900 from-black/85 text-white mb-12'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                        <div>
                            <h1 className='text-4xl lg:text-5xl font-bold mb-2'>
                                Tharros
                            </h1>
                            <p className='text-2xl text-slate-600 mb-6'>
                                Moed en zelfvertrouwen
                            </p>
                            <p className='text-xl leading-loose mb-8 font-light'>
                                Tharros is een Oudgrieks woord dat moed
                                betekent. In de Griekse literatuur wordt
                                'tharros' vaak geassocieerd met helden, krijgers
                                en andere mensen die in staat zijn om moeilijke
                                uitdagingen aan te gaan en hun doelen te
                                bereiken.
                            </p>
                        </div>
                        <div className='relative inset-0 bg-gradient-to-t from-gold-900/50 to-transparent rounded-lg'>
                            <img
                                src='images/TheFourCardinalVirtues-appearing-to-SaintJerome.jpg'
                                alt='De vier hoofddeugden die aan Sint-Hiëronymus verschijnen (Pietro Testa)'
                                className='rounded-sm shadow-2xl'
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className='py-16 bg-white'>
                <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
                        <div className='space-y-8'>
                            <div>
                                <h3 className='text-2xl font-semibold text-gold-800 mb-6 leading-tight'>
                                    Moed in het Nederlands betekent dapperheid
                                </h3>
                                <div className='space-y-6 text-gray-700 leading-relaxed'>
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

                        <div className='lg:pl-8'>
                            <div className='bg-white rounded-lg shadow-sm p-8 border border-gray-200'>
                                <h4 className='text-xl font-semibold text-gold-800 mb-6'>
                                    Kernwaarden van Tharros
                                </h4>
                                <ul className='space-y-4'>
                                    <li className='items-start'>
                                        <span className='text-gray-700'>
                                            <Check className='inline-flex text-gold-700 mr-2' />
                                            Innerlijke kracht en zelfvertrouwen
                                        </span>
                                    </li>
                                    <li className='flex items-start'>
                                        <span className='text-gray-700'>
                                            <Check className='inline-flex text-gold-700 mr-2' />
                                            Onbevreesde houding in moeilijke
                                            situaties
                                        </span>
                                    </li>
                                    <li className='flex items-start'>
                                        <span className='text-gray-700'>
                                            <Check className='inline-flex text-gold-700 mr-2' />
                                            Bereidheid risico's te nemen
                                        </span>
                                    </li>
                                    <li className='flex items-start'>
                                        <span className='text-gray-700'>
                                            <Check className='inline-flex text-gold-700 mr-2 ' />
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
            <section className='py-16 bg-white'>
                <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='bg-gradient-to-b to-gold-900 from-black/85 rounded-lg p-8 md:p-12 text-white'>
                        <h3 className='text-2xl font-semibold mb-6 text-slate-600'>
                            Waarom Tharros?
                        </h3>
                        <div className='space-y-6 leading-loose '>
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
            <section className='pt-20 mt-12 bg-slate-100/30'>
                <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-gray-700'>
                        <div>
                            <h3 className='text-3xl font-semibold mb-8 text-gold-800'>
                                Leiderschap in de publieke sector
                            </h3>
                            <div className='space-y-6 leading-relaxed'>
                                <p>
                                    Leiderschap in de publieke sector vraagt
                                    wijsheid, kunnen luisteren en doorvragen,
                                    maar ook dat je richting durft te geven en
                                    de koers weet uit te zetten.
                                </p>
                                <p>
                                    In de training en coaching gaat het om
                                    kunnen en durven vertrouwen op jezelf, echt
                                    weten waar je het over hebt, verbinding
                                    kunnen maken juist ook als het ingewikkeld
                                    wordt, richting durven geven en het in
                                    openheid durven spreken over wat er op dat
                                    moment toe doet.
                                </p>
                            </div>
                        </div>

                        <div className='space-y-6'>
                            <div className='bg-white/75 rounded-lg shadow-sm p-5 border border-gray-200'>
                                <h4 className='font-semibold text-slate-800 mb-2 text-xl'>
                                    Wijsheid & Luisteren
                                </h4>
                                <p className='text-gray-600 '>
                                    Kunnen luisteren en doorvragen met wijsheid
                                </p>
                            </div>
                            <div className='bg-white/75 rounded-lg shadow-sm p-5 border border-gray-200'>
                                <h4 className='font-semibold text-slate-800 mb-2 text-xl'>
                                    Richting Durven Geven
                                </h4>
                                <p className='text-gray-600 '>
                                    Koers bepalen en leiding nemen wanneer nodig
                                </p>
                            </div>
                            <div className='bg-white/75 rounded-lg shadow-sm p-5 border border-gray-200'>
                                <h4 className='font-semibold text-slate-800 mb-2 text-xl'>
                                    Authentieke Verbinding
                                </h4>
                                <p className='text-gray-600 '>
                                    Echte verbinding maken, ook in complexe
                                    situaties
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-12 max-h-[500px]'>
                    <img
                        src='images/Museum-of-the-Future-Dubai.jpg'
                        alt='Museum of the Future Dubai'
                        className='w-full h-full object-cover'
                    />
                </div>
            </section>
        </>
    );
};

export default Tharros;
