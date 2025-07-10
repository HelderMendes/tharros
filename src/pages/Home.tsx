import ImageSlider from '../components/ImageSlider';
import ServiceBlock from '../components/ServiceBlock';
import { Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ReferencesSlider from '@/components/ReferencesSlider';
import { SEO } from '@/components/SEO';

const Home = () => {
    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Tharros Training & Coaching',
        url: 'https://www.tharros-trainingcoaching.nl',
        logo: 'https://www.tharros-trainingcoaching.nl/LogoTharros.png',
        description:
            'Leiderschapstraining en coaching voor professionals in de publieke sector. Gespecialiseerd in ambtelijk vakmanschap en persoonlijke ontwikkeling.',
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'NL',
        },
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            email: 'info@tharros-trainingcoaching.nl',
        },
        founder: {
            '@type': 'Person',
            name: 'Ferdi Licher',
            jobTitle: 'Senior Leadership Coach & Trainer',
        },
        services: [
            'Leiderschapstraining',
            'Coaching',
            'Workshops',
            'Mentorschap',
            'Persoonlijke ontwikkeling',
        ],
    };

    return (
        <>
            <SEO
                title='Tharros – Leiderschapstraining & Coaching voor de Publieke Sector'
                description="Tharros Training & Coaching biedt gespecialiseerde leiderschapstraining en coaching voor professionals in de publieke sector. Ontdek onze programma's voor persoonlijke ontwikkeling en ambtelijk vakmanschap."
                keywords='leiderschapstraining, coaching publieke sector, ambtelijk vakmanschap, overheid training, persoonlijke ontwikkeling, management training, leiderschap nederland'
                structuredData={organizationSchema}
            />
            <div className='mt-24'>
                {/* Slider Section */}
                <section className='w-full max-h-[60vh] md:max-h-[40vh] xl:max-h-[55vh] 2xl:max-h-[60] relative'>
                    <ImageSlider />
                </section>

                <section className='min-w-full'>
                    {/* Profile - Below slider (shown on lg and down) */}
                    <div className='block xl:hidden bg-[#04293A] min-w-full'>
                        <div className='flex  w-[80%] pb-12 mx-auto gap-3 '>
                            <div className='flex-1 flex flex-col justify-center items-center gap-3 -mt-4'>
                                <div className='w-36 h-36 rounded-full overflow-hidden flex-shrink-0 border-4 border-slate-700 z-50'>
                                    <img
                                        src='images/Ferdi01.jpeg'
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
                                <ReferencesSlider />
                            </div>
                        </div>
                    </div>
                </section>
                {/* Services Section */}
                <section className='py-20 bg-white 2xl:mt-24 '>
                    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                            <ServiceBlock
                                title='Tharros'
                                subtitle='Moed en zelfvertrouwen'
                                intro="Tharros is een Oudgrieks woord dat moed betekent. In de Griekse literatuur wordt 'tharros' vaak geassocieerd met helden, krijgers en andere mensen die in staat zijn om moeilijke uitdagingen aan te gaan en hun doelen te bereiken."
                                href='tharros'
                                image='images/DeathOfArchimedes.jpg'
                            />

                            <ServiceBlock
                                title='Ferdi Licher'
                                subtitle='Moderator, trainer en coach'
                                intro='Na mijn jarenlange ervaring als leidinggevende bij verschillende ministeries wil ik met jonge medewerkers en beginnend leidinggevenden delen hoe je als ambtenaar het verschil kunt maken.'
                                href='ferdi-licher'
                                image='images/FerdiLicher-profil.jpeg'
                                // featured={true}
                            />

                            <ServiceBlock
                                title='Lecture'
                                subtitle='Over ambtelijke vakmanschap'
                                intro='De waan van de dag bepaalt te vaak de agenda. Goede bedoelingen lopen te vaak vast in de uitvoering. Het gesprek over waarden en waarheid, over wat er echt toe doet en wat er echt aan de hand is in de leefwereld van mensen krijgt te weinig ruimte.'
                                href='lecture'
                                image='images/lecture_intro.jpeg'
                                // featured={true}
                            />

                            <ServiceBlock
                                title='Comenius'
                                subtitle='Leergang Emerging leaders in de publieke sector'
                                intro='Dit leiderschapsprogramma van Comenius wil jonge veelbelovende mensen in de publieke sector uitdagen om zich te ontwikkelen tot een nieuwe generatie van leidinggevenden. Een generatie die in staat is het verschil te maken op basis van visie en morele waarden.'
                                href='comenius'
                                image='images/comenius.jpeg'
                            />

                            <ServiceBlock
                                title='ABR – Algemene Bestuursdienst Rijk'
                                subtitle='Oefenen met de rol van politiek-ambtelijk adviseur'
                                intro='In het kader van het Ontwikkelprogramma Leiderschap van de Algemene Bestuursdienst oefen ik samen met de deelnemers hoe zij ruimte kunnen maken voor het goede gesprek en hun rol als politiek-ambtelijk adviseur krachtiger en effectiever kunnen invullen.'
                                href='abr'
                                image='images/Algemene-Bestuursdienst-Rijk.jpeg'
                                // logo={
                                //     <Building2 className='h-12 w-12 text-slate-600' />
                                // }
                            />

                            <ServiceBlock
                                title='Ministerie BZK'
                                subtitle='Leergang Groeien in persoonlijk leiderschap'
                                intro='De leergang groeien in persoonlijk leiderschap is een in-company leergang die voor en door medewerkers zelf wordt gemaakt onder begeleiding van een moderator. Aan de orde komen onder meer persoonlijke leerdoelen, uitdagingen in communicatie en interactie en het effectief handelen in de complexe omgeving van beleid en uitvoering. '
                                href='ministerie-BZK'
                                image='images/ministerie-BZK.jpeg'
                            />

                            <ServiceBlock
                                title='Workshops'
                                subtitle='Maatwerk en moderatie voor teams en organisaties'
                                intro='Als u met u team een goed gesprek wilt voeren over wat er goed gaat en beter kan, in beleid of uitvoering dan kan ik u daarbij helpen door te zorgen dat de vraagstelling scherp en duidelijk wordt, er geluisterd en doorgevraagd wordt en er vrijmoedig met elkaar wordt gesproken en alle stemmen gehoord worden.'
                                href='workshops'
                                image='images/workshops.jpeg'
                            />

                            <ServiceBlock
                                title='Individuele Trajecten'
                                subtitle='Persoonlijke coaching en mentorschap'
                                intro='Als u behoefte heeft aan persoonlijke coaching of mentorschap als medewerker of leidinggevende in de publieke sector dan ik u daarbij helpen door samen te zoeken naar wat er goed gaat en nog beter kan. Daarbij kan ik mijn eigen jarenlange kennis en ervaring uit de praktijk inzetten om te verhelderen hoe dingen wellicht ook anders kunnen een hoe een meer effectief handelingsrepertoire ontwikkeld kan worden.'
                                href='coaching'
                                image='images/Cubism.jpg'
                                // logo={
                                //     <UserCheck className='h-12 w-12 text-slate-600' />
                                // }
                            />

                            <ServiceBlock
                                title='Contact'
                                subtitle='Trainer, coach en moderator'
                                intro={
                                    'Tharros training en coaching is gevestigd in Amsterdam, maar werkt door heel Nederland. Als u contact wilt opnemen kan dat zowel per mail, telefoon als via Whatsapp. Ik vind het boeiend om met nieuwe mensen en organisaties in gesprek te zijn en te zoeken naar nieuwe vormen van samenwerking.'
                                }
                                href='contact'
                                image='images/amsterdam.jpeg'
                                // logo={
                                //     <UserCheck className='h-12 w-12 text-slate-600' />
                                // }
                            />
                        </div>
                    </div>
                </section>

                {/* About Ferdi Section
                <section className='py-20 bg-gray-50'>
                    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
                            <div>
                                <h2 className='text-4xl font-semibold text-slate-800 mb-8'>
                                    Over Ferdi Licher
                                </h2>
                                <div className='space-y-6 text-lg text-gray-600 font-light leading-relaxed'>
                                    <p>
                                        Ferdi Licher is een ervaren trainer,
                                        coach en moderator met meer dan 15 jaar
                                        ervaring in de publieke sector. Hij
                                        combineert praktijkervaring met gedegen
                                        kennis van leiderschapsontwikkeling en
                                        organisatieverandering.
                                    </p>
                                    <p>
                                        Als oprichter van Tharros Training &
                                        Coaching heeft hij zich gespecialiseerd
                                        in het ontwikkelen van
                                        leiderschapsprogramma's die specifiek
                                        zijn afgestemd op de unieke uitdagingen
                                        van de publieke sector.
                                    </p>
                                    <p>
                                        Zijn aanpak kenmerkt zich door een
                                        combinatie van theoretische onderbouwing
                                        en praktische toepasbaarheid, waarbij
                                        hij deelnemers helpt hun persoonlijke
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
                                                • Facilitatie van complexe
                                                processen
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
                                            <p>
                                                www.tharros-trainingcoaching.nl
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section> */}

                {/* CTA Section */}
                {/* <section className='py-20 bg-slate-800'>
                    <div className='max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8'>
                        <h2 className='text-4xl font-semibold text-white mb-8'>
                            Klaar om uw leiderschapspotentieel te ontplooien?
                        </h2>
                        <p className='text-xl text-slate-100 mb-12 leading-relaxed font-light'>
                            Neem contact op voor een vrijblijvend gesprek over
                            hoe onze programma's uw organisatie en persoonlijke
                            ontwikkeling kunnen versterken.
                        </p>
                        <Button
                            asChild
                            variant='secondary'
                            size='lg'
                            className='bg-white hover:bg-gray-100 text-slate-800'
                        >
                            <a
                                href='images/contact'
                                className='inline-flex items-center'
                            >
                                <Target className='mr-3 h-5 w-5' />
                                Start uw reis naar excellentie
                            </a>
                        </Button>
                    </div>
                </section> */}
            </div>
        </>
    );
};

export default Home;
