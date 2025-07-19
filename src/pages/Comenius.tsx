import { SEO } from '@/components/SEO';
import {
    Users,
    Target,
    Lightbulb,
    Eye,
    Brain,
    Ear,
    Star,
    Calendar,
    Clock,
    GraduationCap,
} from 'lucide-react';

const Comenius = () => {
    const courseSchema = {
        '@context': 'https://schema.org',
        '@type': 'EducationalEvent',
        name: 'Comenius - Leergang Emerging Leaders in de Publieke Sector',
        description:
            'Een transformatieve leergang voor jonge veelbelovende mensen in de publieke sector. Focus op persoonlijk leiderschap, visie, morele waarden en het maken van het verschil in een complexe samenleving.',
        organizer: {
            '@type': 'Organization',
            name: 'Tharros Training & Coaching',
        },
        performer: {
            '@type': 'Person',
            name: 'Ferdi Licher',
        },
        eventMode: 'In-person',
        duration: 'P4D',
        startDate: '2025-09-15',
        endDate: '2025-09-18',
        location: {
            '@type': 'Place',
            name: 'Comenius Locatie',
        },
        audience: {
            '@type': 'Audience',
            audienceType:
                'Senior/coördinerend beleidsmedewerkers, emerging leaders publieke sector',
        },
        keywords:
            'emerging leaders, publieke sector, wijs leiderschap, 7 pijlers, persoonlijk leiderschap, europa, markteconomie, samenleving',
    };

    const pillars = [
        {
            icon: Eye,
            title: 'Ken uzelf',
            description:
                'Leiders die niet de tijd nemen zichzelf te leren kennen hebben het moeilijk. Daarom is er volop ruimte voor een verkenning van persoonlijke vragen. Die zijn gericht op het versterken van je zelfbeeld. Wie ben je en wat zijn je wortels? Dragen die bij aan je persoonlijke en professionele ambitie of staan ze je ontwikkeling in de weg? Wat omarm je en wat blijf je voeden? En wat laat je los? Wie ben je en wat zijn je wortels? Verken persoonlijke vragen gericht op het versterken van je zelfbeeld.',
        },
        {
            icon: Brain,
            title: 'Zelfreflectie',
            description:
                'Zelfreflectie is een versneller van persoonlijke groei. Maar kritisch kijken naar jezelf is niet altijd fijn. Daarom is het belangrijk dat zelfvertrouwen en zelfrespect op orde zijn. Zelfreflectie toepassen vergt rust en ruimte waar je ook tijd en ruimte voor moet zien te vinden. De 7 pijlers van nieuw, wijs leiderschap helpen bij een moment van reflectie op en voor jezelf.',
        },
        {
            icon: Lightbulb,
            title: 'Verbeeldingskracht',
            description:
                'Verbeeldingskracht verdient een prominente plaats in het repertoire van de leider. Zonder verbeeldingskrachtverbleken persoonlijke en maatschappelijke drive en inspiratie. Hoe geef je metaforen, verhalen, gedichten, muziek, een plek in jouw werk?',
        },
        {
            icon: Star,
            title: 'Verwondering',
            description:
                'Ruimte maken voor andere inzichten en opvattingen kan wel eens moeilijk zijn. Vooral als jezelf lang hebt nagedacht over een oplossing kan een gesprek met collega’s hierover al snel uitlopen op een teleurstelling. Iedereen vindt er iets van. Maar ontstaan briljante gedachten niet vaak als resultaat van ‘verwondering’, nieuwsgierigheid, in het omarmen van het andere, het onbekende, het onmogelijke?',
        },
        {
            icon: Target,
            title: 'Adaptiviteit',
            description:
                'Werken vanuit robuuste waarheden lijkt degelijk en betrouwbaar, maar kan ook resulteren in stagnatie en fixatie. Beweeglijkheid en interactie scheppen vaak ruimte en dynamiek. Aanpassingsvermogen of adaptiviteit mag echter niet ongemakkelijk gaan voelen, als in: visieloos meewaaien met alle winden. Dat wil je natuurlijk niet. Hoe handhaaf je de balans?',
        },
        {
            icon: Users,
            title: 'Iedereen doet ertoe:\t ‘Deep democracy’',
            description:
                'Mensen kunnen niet zonder elkaar en ze kunnen niet zonder hun omgeving. Ook de kritische opvatting maakt als het goed is deel uit van jouw omgeving; vaak klinkt uit de stilste stem de hardste waarheid. Samen zijn mensen slim. Samen werken en delen is het nieuwe, wijze leiderschap.',
        },
        {
            icon: Ear,
            title: 'Luisteren en bevragen',
            description:
                'Veronderstelt het vermogen open vragen te stellen, waarin de eigen opvatting niet doorklinkt. 7 pijlers van nieuw, wijs leiderschap bekwaamt je in deze traditie, de zogenaamde Socratische bevraging.',
        },
    ];

    return (
        <>
            <SEO
                title="Comenius - Leergang Emerging Leaders in de Publieke Sector | Wijs Leiderschap"
                description="Transformatieve leergang voor jonge veelbelovende mensen in de publieke sector. Ontwikkel persoonlijk leiderschap op basis van de 7 pijlers van wijs leiderschap. Focus op visie, morele waarden en het maken van het verschil."
                keywords="comenius leergang, emerging leaders publieke sector, wijs leiderschap, 7 pijlers leiderschap, persoonlijk leiderschap, europa toekomst, publieke regie, samenleving kloof, deep democracy, zelfreflectie, verbeeldingskracht, adaptiviteit"
                structuredData={courseSchema}
            />

            {/* Featured Image Section */}
            <section className="mb-12 bg-gradient-to-tl from-black/85 to-gold-900 text-white">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                        <div className="">
                            <div className="mb-6 flex items-center text-slate-400">
                                <GraduationCap className="mr-3 h-8 w-8" />
                                <span className="text-lg font-medium">
                                    Comenius Leergang
                                </span>
                            </div>
                            <h1 className="mb-2 text-4xl font-bold lg:text-5xl">
                                Emerging Leaders
                            </h1>
                            <p className="mb-6 text-xl uppercase text-slate-400">
                                in de publieke sector
                            </p>
                            <p className="mb-4 text-xl leading-relaxed">
                                Dit leiderschapsprogramma van Comenius wil jonge
                                veelbelovende mensen in de publieke sector
                                uitdagen, om zich te ontwikkelen tot een nieuwe
                                generatie van leidinggevenden in staat tot
                                inclusief, gedeeld en opgavegericht leiderschap.
                            </p>
                            <p className="mb-8 text-xl leading-relaxed">
                                Een generatie die in staat is het verschil te
                                maken op basis van visie en morele waarden, die
                                in staat is een cultuur te ontwikkelen van
                                reflectie en cocreatie die in verbinding staat
                                met de samenleving en daardoor bij kan dragen
                                aan herstel van vertrouwen tussen overheid en
                                burger. Een generatie die in staat is tot
                                positief transformerend leiderschap in een
                                complexe samenleving en in het licht van een
                                onzekere toekomst.
                            </p>
                        </div>

                        <div className="flex flex-col justify-start gap-12">
                            <div className="overflow-hidden rounded-lg shadow-2xl">
                                <img
                                    src="images/comenius.jpeg"
                                    alt="Bibliotheek overzicht - leeromgeving en kennis"
                                    className="h-96 w-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col gap-3 text-lg text-slate-400">
                                <div className="mr-8 flex items-center">
                                    <Calendar className="mr-3 h-4 w-4" />
                                    <span>jaarlijks</span>
                                </div>
                                <div className="mr-8 flex items-center">
                                    <Clock className="mr-3 h-4 w-4" />
                                    <span>4-daags intensief programma</span>
                                </div>
                                <div className="flex items-center">
                                    <Users className="mr-3 h-4 w-4" />
                                    <span>12-16 deelnemers</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="mx-auto max-w-7xl bg-white py-20">
                <div className="px-4 sm:px-6 lg:px-8">
                    <h2 className="mb-12 text-center text-4xl font-bold text-slate-600">
                        Een nieuwe generatie leidinggevenden
                    </h2>
                    <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
                        <div>
                            <div className="mb-6 flex flex-col gap-4 text-xl leading-relaxed text-gray-700">
                                <p>
                                    De basis hiervoor leggen we in de
                                    ontwikkeling van het persoonlijk
                                    leiderschapsverhaal. Dat werken aan
                                    persoonlijk leiderschap vergt veel. In de
                                    eerste plaats de bereidheid tot diepgaande
                                    zelfkennis en zelfreflectie, maar ook de
                                    bereidheid te luisteren en bevragen en de
                                    moed ruimte te geven aan anderen en
                                    andersdenkenden en nieuwe inzichten te
                                    omarmen.
                                </p>
                                <p>
                                    Wijs leiderschap staat open voor
                                    verwondering en verbeelding en durft te
                                    varen op intuïtie en gevoel. Die
                                    sensitiviteit en adaptiviteit kan je alleen
                                    ontwikkelen als je vertrouwen durft te
                                    stellen in jezelf en trouw durft te zijn aan
                                    jezelf, als je oprecht en authentiek durft
                                    te zijn. Persoonlijk leiderschap gaat dus
                                    ook over lef.
                                </p>
                                <p>
                                    We verbinden het persoonlijk leiderschap en
                                    het leiderschapsverhaal met de weerbarstige
                                    praktijk van alle dag, en proberen aan de
                                    hand van een aantal grote thema’s meer zicht
                                    en grip te krijgen op de achterliggende
                                    oorzaken van die weerbarstige praktijk.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="mx-auto max-w-2xl">
                                <div className="mb-6 flex flex-col gap-4 text-xl leading-relaxed text-gray-700">
                                    <p>
                                        We verkennen de gelaagdheid en
                                        complexiteit van de samenleving aan de
                                        hand van drietal thema’s:
                                    </p>
                                </div>
                                <blockquote className="relative mx-auto max-w-screen-md rounded-lg bg-slate-50 px-8 py-6 text-center text-xl font-medium italic leading-relaxed text-slate-700 shadow">
                                    "De toekomst van Europa, Publieke regie in
                                    een markteconomie, De kloof in de
                                    samenleving."
                                </blockquote>
                                <p className="pt-8 text-xl leading-relaxed text-gray-700">
                                    Deze thema’s spelen in veel van onze
                                    publieke domeinen een belangrijke rol,
                                    terwijl we in de hectiek van het dagelijkse
                                    werk vaak onvoldoende tijd weten te vinden
                                    voor gezamenlijke reflectie op die grotere
                                    thema’s en hoe we ons daartoe kunnen
                                    verhouden. De leergang wil een vrijplaats
                                    zijn om over deze grotere thema’s na te
                                    denken en ook samen te bespreken hoe we
                                    reflectie een grotere plek in ons dagelijks
                                    werk kunnen geven. Hoe we de incidenten in
                                    een groter geheel kunnen plaatsen en meer
                                    grip kunnen krijgen op de onderliggende
                                    vraagstukken. Hoe we bij kunnen dragen aan
                                    herstel van vertrouwen en als nieuwe
                                    generatie leiders het verschil kunnen gaan
                                    maken.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hoe kan het anders Section */}
            <section className="bg-slate-50 py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h3 className="mb-8 text-center text-3xl font-semibold text-slate-600">
                        Hoe kan het anders
                    </h3>
                    <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
                        <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                            <p>
                                We zoeken deelnemers die jong en veelbelovend
                                zijn: gedreven, intelligent, belezen en open
                                minded. We zoeken hemelbestormers, zonder
                                luchtfietserij. Emerging leaders die van
                                betekenis willen zijn en het verschil willen
                                maken in de complexe en dynamische samenleving
                                van deze tijd. Die de durf hebben zich kwetsbaar
                                op te stellen en kracht te tonen als er moreel
                                leiderschap wordt gevraagd. <br />
                                Jonge mensen die kunnen luisteren en doorvragen,
                                die geen genoegen nemen met halve waarheden of
                                te gemakkelijke conclusies, die de
                                dieperliggende oorzaken willen leren kennen en
                                begrijpen, en die anderen kunnen meenemen in een
                                visie en verhaal.
                            </p>
                        </div>

                        <div className="space-y-8 text-lg leading-relaxed text-gray-700">
                            <p className="">
                                Het leiderschapsprogramma van Comenius is een
                                stimulerende vrijplaats waarin de 7 pijlers van
                                nieuw, wijs leiderschap centraal staan en het
                                programma is ook een ‘learning community’ die
                                jou en andere jonge leiders uitnodigt tot
                                vriendschap, tot uitwisseling, tot delen en tot
                                respectvol leren van elkaar. Onder leiding van
                                een moderator voer jij met hen het goede gesprek
                                over wie jij bent, over wie je wil worden en
                                over de route erheen. Daarbij vormen de 7
                                pijlers van wijs leiderschap een belangrijk
                                ankerpunt. Maar is er nadrukkelijk ook aandacht
                                voor inhoudelijke verdieping, het internationale
                                perspectief, de grote lijnen in de
                                politiek-filosofische stromingen en wat we
                                kunnen leren van de geschiedenis.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7 Pillars Extra Section */}
            <section className="bg-white py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mt-6 text-center">
                        <h3 className="mb-6 text-3xl font-semibold text-slate-600">
                            Comenius ‘7 pijlers van wijs leiderschap’
                        </h3>
                        <p className="mx-auto mb-12 max-w-4xl text-lg leading-relaxed text-gray-600">
                            Comenius is een internationaal netwerk gericht op
                            leiderschapsontwikkeling en begeleidt al 25 jaar
                            executives bij het versterken van het eigen
                            leiderschap. Met hen verkent Comenius de ‘andere
                            kant van de medaille’ en de samenhang der dingen.
                            Beoogd is hiermee een versterking van ‘zijn en
                            zelfvertrouwen’: grondtonen van wijs leiderschap.
                            Comenius’ denken over leiderschap heeft in al die
                            jaren niet geleid tot vastomlijnde opvattingen over
                            wat goed en wijs leiderschap zou moeten zijn. Wel
                            constateert Comenius dat een aantal kwaliteiten in
                            al die jaren door vele leiders telkens worden
                            genoemd als belangrijk. Comenius noemt ze de 7
                            pijlers van wijs leiderschap.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {pillars.map((pillar, index) => {
                            const IconComponent = pillar.icon;
                            return (
                                <div
                                    key={index}
                                    className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                                >
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
                                        <IconComponent className="mx-auto h-6 w-6 text-center text-slate-600" />
                                    </div>
                                    <h4 className="mb-3 text-xl font-semibold text-slate-600">
                                        {pillar.title}
                                    </h4>
                                    <p className="leading-relaxed text-gray-600">
                                        {pillar.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Comenius;
