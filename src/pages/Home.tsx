import React from 'react';
import ImageSlider from '../components/ImageSlider';
import ServiceBlock from '../components/ServiceBlock';
import { Building2, Target, UserCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Home = () => {
    return (
        <div className='pt-20'>
            {/* Hero Section with Full Width Slider */}
            {/* <section className='w-full h-[30vh] md:h-[40vh] xl:h-[55vh] 2xl:h-[60] mt-12 relative'> */}

            <section className='w-full h-[30vh] md:h-[40vh] xl:h-[55vh] 2xl:h-[60] mt-12 relative'>
                <ImageSlider />
            </section>

            <section>
                {/* Profile - Below slider (shown on lg and down) */}
                <div className='block xl:hidden bg-[#04293A]'>
                    <div className='flex  w-[80%] py-12 mx-auto gap-3 '>
                        <div className='flex-1 flex flex-col justify-center items-center gap-3'>
                            <div className='w-36 h-36 rounded-full overflow-hidden flex-shrink-0 border-4 border-slate-700'>
                                <img
                                    src='Ferdi01.jpeg'
                                    alt='Ferdi Licher'
                                    className='w-full h-full object-cover'
                                />
                            </div>
                            <h3 className='font-bold text-slate-400 text-4xl -mb-2'>
                                Ferdi Licher
                            </h3>
                            <p className='text-gold-100 font-medium text-2xl leading-tight text-center '>
                                Senior Leadership Coach & Trainer
                            </p>
                            <p className='text-muted-foreground leading-relaxed text-xl text-center text-slate-400'>
                                Met meer dan 15 jaar ervaring in de publieke
                                sector, specialiseert Ferdi zich in het
                                ontwikkelen van authentiek leiderschap en
                                effectief vakmanschap.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Services Section */}
            <section className='py-20 bg-white '>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center mb-16'>
                        <h2 className='text-4xl font-semibold text-slate-800 mb-6'>
                            Onze Programma's & Diensten
                        </h2>
                        <p className='text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed'>
                            Ontdek onze uitgebreide portfolio van
                            leiderschapsprogramma's, speciaal ontwikkeld voor
                            professionals in de publieke sector.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        <ServiceBlock
                            title='Lecture'
                            subtitle='Programma Doorgroeien in Leiderschap (incompany)'
                            intro='Ontwikkel jezelf als leider met ons intensieve programma gericht op zelfkennis en persoonlijke groei. Inclusief uitgebreide Zelfscan voor diepgaand inzicht in je leiderschapsstijl.'
                            href='/lecture'
                            image='groeps03.jpeg'
                            featured={true}
                        />

                        <ServiceBlock
                            title='Comenius'
                            subtitle="Leergang 'Emerging Leaders in de Publieke Sector'"
                            intro='Een transformatieve leergang voor de nieuwe generatie leidinggevenden. Focus op visie, waarden, cocreatie en het herstel van vertrouwen in de publieke sector.'
                            href='/comenius'
                            image='DeathOfArchimedes.jpg'
                        />

                        <ServiceBlock
                            title='ABD Ontwikkelprogramma'
                            subtitle='Groei in Persoonlijk Leiderschap (incompany)'
                            intro='Groeien in persoonlijk leiderschap is een programma voor beleidsmedewerkers en medewerkers in de uitvoering en het toezicht, ontwikkeld voor en door medewerkers zelf.'
                            href='/abd'
                            image='groeps02.jpeg'
                            // logo={
                            //     <Building2 className='h-12 w-12 text-slate-600' />
                            // }
                        />

                        <ServiceBlock
                            title='BZR Programma'
                            subtitle='Programma Doorgroeien in Leiderschap'
                            intro='Een uitgebreid ontwikkelingspad voor ervaren professionals die de volgende stap in hun leiderschapscarrière willen zetten binnen de publieke sector.'
                            href='/bzr'
                            image='VisualizingtheFuture.jpg'
                        />

                        <ServiceBlock
                            title='Workshops'
                            subtitle='Interactieve Leermodules'
                            intro='Workshops voor teams, afdelingen of directies kunnen op maat gemaakt worden rond het thema van publiek leiderschap en ambtelijk vakmanschap.'
                            href='/workshops'
                            image='groeps01.jpeg'
                        />

                        <ServiceBlock
                            title='Individuele Coaching'
                            subtitle='Persoonlijke Begeleiding & Mentorschap'
                            intro='Individuele coaching en mentorschap waarbij we samen verkennen hoe je jouw rol als leidinggevende in de publieke sector krachtig en overtuigend kunt invullen.'
                            href='/coaching'
                            image='Cubism.jpg'
                            // logo={
                            //     <UserCheck className='h-12 w-12 text-slate-600' />
                            // }
                        />
                    </div>
                </div>
            </section>

            {/* About Ferdi Section */}
            <section className='py-20 bg-gray-50'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
                        <div>
                            <h2 className='text-4xl font-semibold text-slate-800 mb-8'>
                                Over Ferdi Licher
                            </h2>
                            <div className='space-y-6 text-lg text-gray-600 font-light leading-relaxed'>
                                <p>
                                    Ferdi Licher is een ervaren trainer, coach
                                    en moderator met meer dan 15 jaar ervaring
                                    in de publieke sector. Hij combineert
                                    praktijkervaring met gedegen kennis van
                                    leiderschapsontwikkeling en
                                    organisatieverandering.
                                </p>
                                <p>
                                    Als oprichter van Tharros Training &
                                    Coaching heeft hij zich gespecialiseerd in
                                    het ontwikkelen van leiderschapsprogramma's
                                    die specifiek zijn afgestemd op de unieke
                                    uitdagingen van de publieke sector.
                                </p>
                                <p>
                                    Zijn aanpak kenmerkt zich door een
                                    combinatie van theoretische onderbouwing en
                                    praktische toepasbaarheid, waarbij hij
                                    deelnemers helpt hun persoonlijke
                                    leiderschapsstijl te ontdekken en te
                                    ontwikkelen.
                                </p>
                            </div>
                        </div>
                        <Card className='shadow-sm border-gray-200'>
                            <CardHeader>
                                <CardTitle className='text-2xl text-slate-800'>
                                    Expertise & Ervaring
                                </CardTitle>
                            </CardHeader>
                            <CardContent className='space-y-6'>
                                <div>
                                    <h4 className='font-semibold text-slate-700 mb-2'>
                                        Specialisaties
                                    </h4>
                                    <ul className='text-gray-600 space-y-2 font-light'>
                                        <li>
                                            • Leiderschapsontwikkeling in de
                                            publieke sector
                                        </li>
                                        <li>
                                            • Organisatieverandering en
                                            transformatie
                                        </li>
                                        <li>
                                            • Coaching en mentoring van
                                            professionals
                                        </li>
                                        <li>
                                            • Facilitatie van complexe processen
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className='font-semibold text-slate-700 mb-2'>
                                        Contactgegevens
                                    </h4>
                                    <div className='text-gray-600 space-y-2 font-light text-sm'>
                                        <p>KvK: 97556947</p>
                                        <p>BTW: NL005277464B14</p>
                                        <p>IBAN: NL24INGB0114748454</p>
                                        <p>www.tharros-trainingcoaching.nl</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className='py-20 bg-slate-800'>
                <div className='max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8'>
                    <h2 className='text-4xl font-semibold text-white mb-8'>
                        Klaar om uw leiderschapspotentieel te ontplooien?
                    </h2>
                    <p className='text-xl text-slate-100 mb-12 leading-relaxed font-light'>
                        Neem contact op voor een vrijblijvend gesprek over hoe
                        onze programma's uw organisatie en persoonlijke
                        ontwikkeling kunnen versterken.
                    </p>
                    <Button
                        asChild
                        variant='secondary'
                        size='lg'
                        className='bg-white hover:bg-gray-100 text-slate-800'
                    >
                        <a href='/contact' className='inline-flex items-center'>
                            <Target className='mr-3 h-5 w-5' />
                            Start uw reis naar excellentie
                        </a>
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default Home;
