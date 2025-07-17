import ImageSlider from '../components/ImageSlider';
import ServiceBlock from '../components/ServiceBlock';
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
                title="Tharros – Leiderschapstraining & Coaching voor de Publieke Sector"
                description="Tharros Training & Coaching biedt gespecialiseerde leiderschapstraining en coaching voor professionals in de publieke sector. Ontdek onze programma's voor persoonlijke ontwikkeling en ambtelijk vakmanschap."
                keywords="leiderschapstraining, coaching publieke sector, ambtelijk vakmanschap, overheid training, persoonlijke ontwikkeling, management training, leiderschap nederland"
                structuredData={organizationSchema}
            />

            {/* Slider Section */}
            {/* <section className="relative max-h-[60vh] w-full md:max-h-[40vh] xl:max-h-[55vh] 2xl:max-h-[60]"> */}
            <ImageSlider />
            {/* </section> */}

            <section className="min-w-full">
                {/* Profile - Below slider (shown on lg and down) */}
                <div className="block min-w-full bg-[#04293A] xl:hidden">
                    <div className="mx-auto flex w-[80%] gap-3 pb-12">
                        <div className="-mt-4 flex flex-1 flex-col items-center justify-center gap-3">
                            <div className="z-50 h-36 w-36 flex-shrink-0 overflow-hidden rounded-full border-4 border-slate-700">
                                <img
                                    src="images/Profil_FerdiLicher.jpeg"
                                    alt="Ferdi Licher"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <h3 className="-mb-2 text-4xl font-bold text-slate-400">
                                Ferdi Licher
                            </h3>
                            <p className="text-center text-2xl font-medium leading-tight text-gold-100">
                                Moderator, Trainer en Coach
                            </p>
                            <ReferencesSlider />
                        </div>
                    </div>
                </div>
            </section>
            {/* Services Section */}
            <section className="mt-24 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <ServiceBlock
                            title="Tharros"
                            subtitle="Moed en zelfvertrouwen"
                            intro="Tharros is een Oudgrieks woord dat moed betekent. In de Griekse literatuur wordt 'tharros' vaak geassocieerd met helden, krijgers en andere mensen die in staat zijn om moeilijke uitdagingen aan te gaan en hun doelen te bereiken."
                            href="tharros"
                            image="images/DeathOfArchimedes.jpg"
                        />

                        <ServiceBlock
                            title="Ferdi Licher"
                            subtitle="Moderator, trainer en coach"
                            intro="Na mijn jarenlange ervaring als leidinggevende bij verschillende ministeries wil ik met jonge medewerkers en beginnend leidinggevenden delen hoe je als ambtenaar het verschil kunt maken."
                            href="ferdi-licher"
                            image="images/FerdiLicher-profil.jpeg"
                        />

                        <ServiceBlock
                            title="Lecture"
                            subtitle="Over ambtelijke vakmanschap"
                            intro="De waan van de dag bepaalt te vaak de agenda. Goede bedoelingen lopen te vaak vast in de uitvoering. Het gesprek over waarden en waarheid, over wat er echt toe doet en wat er echt aan de hand is in de leefwereld van mensen krijgt te weinig ruimte."
                            href="lecture"
                            image="images/lecture_intro.jpeg"
                        />

                        <ServiceBlock
                            title="Comenius"
                            subtitle="Leergang Emerging leaders in de publieke sector"
                            intro="Dit leiderschapsprogramma van Comenius wil jonge veelbelovende mensen in de publieke sector uitdagen om zich te ontwikkelen tot een nieuwe generatie van leidinggevenden. Een generatie die in staat is het verschil te maken op basis van visie en morele waarden."
                            href="comenius"
                            image="images/comenius.jpeg"
                        />

                        <ServiceBlock
                            title="Algemene Bestuursdienst Rijk"
                            subtitle="Oefenen met de rol van politiek-ambtelijk adviseur"
                            intro="In het kader van het Ontwikkelprogramma Leiderschap van de Algemene Bestuursdienst oefen ik samen met de deelnemers hoe zij ruimte kunnen maken voor het goede gesprek en hun rol als politiek-ambtelijk adviseur krachtiger en effectiever kunnen invullen."
                            href="abr"
                            image="images/Algemene-Bestuursdienst-Rijk.jpeg"
                            // logo={
                            //     <Building2 className='h-12 w-12 text-slate-600' />
                            // }
                        />

                        <ServiceBlock
                            title="Ministerie BZK"
                            subtitle="Leergang Groeien in persoonlijk leiderschap"
                            intro="De leergang groeien in persoonlijk leiderschap is een in-company leergang die voor en door medewerkers zelf wordt gemaakt onder begeleiding van een moderator. Aan de orde komen onder meer persoonlijke leerdoelen, uitdagingen in communicatie en interactie en het effectief handelen in de complexe omgeving van beleid en uitvoering. "
                            href="ministerie-BZK"
                            image="images/ministerie-BZK.jpeg"
                        />

                        <ServiceBlock
                            title="Workshops"
                            subtitle="Maatwerk en moderatie voor teams en organisaties"
                            intro="Als u met u team een goed gesprek wilt voeren over wat er goed gaat en beter kan, in beleid of uitvoering dan kan ik u daarbij helpen door te zorgen dat de vraagstelling scherp en duidelijk wordt, er geluisterd en doorgevraagd wordt en er vrijmoedig met elkaar wordt gesproken en alle stemmen gehoord worden."
                            href="workshops"
                            image="images/workshops.jpeg"
                        />

                        <ServiceBlock
                            title="Individuele Trajecten"
                            subtitle="Persoonlijke coaching en mentorschap"
                            intro="Als u behoefte heeft aan persoonlijke coaching of mentorschap als medewerker of leidinggevende in de publieke sector dan ik u daarbij helpen door samen te zoeken naar wat er goed gaat en nog beter kan. Daarbij kan ik mijn eigen jarenlange kennis en ervaring uit de praktijk inzetten om te verhelderen hoe dingen wellicht ook anders kunnen een hoe een meer effectief handelingsrepertoire ontwikkeld kan worden."
                            href="coaching"
                            image="images/Cubism.jpg"
                        />

                        <ServiceBlock
                            title="Contact"
                            subtitle="Trainer, coach en moderator"
                            intro={
                                'Tharros training en coaching is gevestigd in Amsterdam, maar werkt door heel Nederland. Als u contact wilt opnemen kan dat zowel per mail, telefoon als via Whatsapp. Ik vind het boeiend om met nieuwe mensen en organisaties in gesprek te zijn en te zoeken naar nieuwe vormen van samenwerking.'
                            }
                            href="contact"
                            image="images/amsterdam.jpeg"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
