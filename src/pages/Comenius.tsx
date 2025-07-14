import { SEO } from '@/components/SEO';
import { useState } from 'react';
import {
    Users,
    Target,
    Lightbulb,
    Heart,
    Eye,
    Brain,
    Ear,
    // SpeechBubble,
    // Speech,
    Star,
    Calendar,
    Clock,
    GraduationCap,
    CheckCircle,
    Speech,
} from 'lucide-react';

const Comenius = () => {
    const [activeDay, setActiveDay] = useState('maandag');

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
                'Wie ben je en wat zijn je wortels? Verken persoonlijke vragen gericht op het versterken van je zelfbeeld.',
        },
        {
            icon: Brain,
            title: 'Zelfreflectie',
            description:
                'Een versneller van persoonlijke groei. Kritisch kijken naar jezelf met rust en ruimte voor reflectie.',
        },
        {
            icon: Lightbulb,
            title: 'Verbeeldingskracht',
            description:
                'Metaforen, verhalen, gedichten, muziek - hoe geef je deze een plek in jouw werk en leiderschap?',
        },
        {
            icon: Star,
            title: 'Verwondering',
            description:
                'Ruimte maken voor andere inzichten. Briljante gedachten ontstaan uit nieuwsgierigheid en het omarmen van het onbekende.',
        },
        {
            icon: Target,
            title: 'Adaptiviteit',
            description:
                'Beweeglijkheid en interactie scheppen ruimte. Hoe handhaaf je de balans tussen aanpassingsvermogen en visie?',
        },
        {
            icon: Users,
            title: 'Deep Democracy',
            description:
                'Iedereen doet ertoe. Uit de stilste stem klinkt vaak de hardste waarheid. Samen zijn mensen slim.',
        },
        {
            icon: Ear,
            title: 'Luisteren & Bevragen',
            description:
                'Wie spreekt hoort de ander niet. Leer de Socratische bevraging en het stellen van open vragen.',
        },
    ];

    const themes = [
        {
            title: 'De toekomst van Europa',
            description:
                'Geopolitieke ontwikkelingen en Europese waarden in een veranderende wereld.',
        },
        {
            title: 'Publieke regie in een markteconomie',
            description:
                'De complexe interactie tussen marktwerking en publieke waarden.',
        },
        {
            title: 'De kloof in de samenleving',
            description:
                'Demografische ontwikkelingen, populisme en het herstel van vertrouwen.',
        },
    ];

    const pillarsExtra = [
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
                                    <span>15-18 september 2025</span>
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
                                    De basis hiervoor leggen we in het
                                    persoonlijk leiderschap en het ontwikkelen
                                    van een persoonlijk leiderschapsverhaal. Dat
                                    werken aan persoonlijk leiderschap vergt
                                    veel. In de eerste plaats de bereidheid tot
                                    diepgaande zelfkennis en zelfreflectie, maar
                                    ook de bereidheid te luisteren en bevragen
                                    en de moed ruimte te geven aan anderen en
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
                    <h3 className="mb-8 text-center text-3xl font-semibold text-slate-800">
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
                            <div className="overflow-hidden rounded-lg shadow-lg">
                                <img
                                    src="images/groeps03.jpeg"
                                    alt="Deelnemers in cirkel - verbinding en dialoog"
                                    className="h-80 w-full object-cover"
                                />
                            </div>

                            <p className="font-medium text-slate-800">
                                De basis hiervoor leggen we in het persoonlijk
                                leiderschap en het ontwikkelen van een
                                persoonlijk leiderschapsverhaal.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <p className="text-lg leading-relaxed text-gray-700">
                                Het leiderschapsprogramma van Comenius is een
                                stimulerende vrijplaats waarin de 7 pijlers van
                                nieuw, wijs leiderschap centraal staan en het
                                programma is ook een ‘learning community’ die
                                jou en andere jonge leiders uitnodigt tot
                                vriendschap, tot uitwisseling, tot delen en tot
                                respectvol leren van elkaar. Onder leiding van
                                een moderator voer jij met hen het goede gesprek
                                over wie jij bent, over wie je wil worden en
                                over de route erheen.{' '}
                                <strong>
                                    Daarbij vormen de 7 pijlers van wijs
                                    leiderschap
                                </strong>{' '}
                                een belangrijk ankerpunt. Maar is er
                                nadrukkelijk ook aandacht voor inhoudelijke
                                verdieping, het internationale perspectief, de
                                grote lijnen in de politiek-filosofische
                                stromingen en wat we kunnen leren van de
                                geschiedenis.
                            </p>
                            <div className="overflow-hidden rounded-lg shadow-lg">
                                <img
                                    src="images/groeps04.jpeg"
                                    alt="Tafels in vierkant - structuur en samenwerking"
                                    className="h-80 w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7 Pillars Section – optie 00A */}
            <section className="bg-white py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h3 className="mb-4 text-3xl font-semibold text-slate-800">
                            #Optie A - Comenius ‘7 pijlers van wijs leiderschap’
                        </h3>
                        <p className="mx-auto mb-12 max-w-4xl text-lg text-gray-600">
                            Richtingwijzers voor het juiste en goede in
                            verhouding tot anderen. 25 jaar ervaring met
                            leiderschapsontwikkeling gebundeld in 7
                            kernkwaliteiten.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {pillars.map((pillar, index) => {
                            const IconComponent = pillar.icon;
                            return (
                                <div
                                    key={index}
                                    className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
                                >
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
                                        <IconComponent className="mx-auto h-6 w-6 text-center text-slate-600" />
                                    </div>
                                    <h4 className="mb-3 text-xl font-semibold text-slate-800">
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

            {/* Drie Grote Maatschappelijke Vraagstukken */}
            <section className="mt-8 bg-slate-50 py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h3 className="mb-4 text-3xl font-semibold text-slate-800">
                            Drie Grote Maatschappelijke Vraagstukken
                        </h3>
                        <p className="text-lg text-gray-600">
                            We verkennen de gelaagdheid en complexiteit van de
                            samenleving aan de hand van drie thema's
                        </p>
                    </div>

                    <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-3">
                        {themes.map((theme, index) => (
                            <div
                                key={index}
                                className="rounded-lg bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
                            >
                                <h4 className="mb-3 text-xl font-semibold text-slate-800">
                                    {theme.title}
                                </h4>
                                <p className="leading-relaxed text-gray-600">
                                    {theme.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Programmaopbouw */}
                    <div className="mb-8 text-center">
                        <h3 className="mb-4 text-3xl font-semibold text-gray-700">
                            Programmaopbouw
                        </h3>
                        <p className="text-lg text-gray-600">
                            Het programma is gebouwd uit twee complementaire
                            lagen
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-500">
                                <Heart className="h-6 w-6 text-white" />
                            </div>
                            <h4 className="mb-4 text-2xl font-semibold text-gray-500">
                                Persoonlijk-Emotionele Laag
                            </h4>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start">
                                    <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-gray-500" />
                                    <span>Je roots en achtergrond</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-gray-500" />
                                    <span>
                                        Persoonlijke drijfveren en leerdoelen
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-gray-500" />
                                    <span>Kwetsbaarheid en kracht</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-gray-500" />
                                    <span>Persoonlijk leiderschapsprofiel</span>
                                </li>
                            </ul>
                        </div>

                        <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-700">
                                <Brain className="h-6 w-6 text-white" />
                            </div>
                            <h4 className="mb-4 text-2xl font-semibold text-gray-500">
                                Systemisch-Rationele Laag
                            </h4>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start">
                                    <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-gray-500" />
                                    <span>
                                        Complexiteit van maatschappelijke
                                        vraagstukken
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-gray-500" />
                                    <span>
                                        Analytische en debatvaardigheden
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-gray-500" />
                                    <span>
                                        Systeemfalen en handelingsperspectieven
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-gray-500" />
                                    <span>
                                        Politiek-filosofische stromingen
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <blockquote className="relative mx-auto mt-12 max-w-5xl px-8 py-6 text-center font-medium leading-loose text-gray-600">
                    Het programma heeft als ankerpunt de 7 pijlers van wijs
                    leiderschap. Deze pijlers, zijn richtingwijzers voor het
                    juiste en goede in verhouding tot anderen. Ze nodigen uit
                    tot zelfkennis en zelfreflectie, tot verwondering en het
                    actief luisteren en bevragen van andere inzichten{' '}
                    <strong>(deep democracy)</strong>, en tot het vergroten van
                    aanpassingsvermogen en verbeeldingskracht, omdat deze{' '}
                    <span className="font-bold text-slate-600">
                        onmisbaar zijn voor positief transformerend leiderschap
                    </span>
                    . Daarbij gaat het steeds opnieuw om het vinden van een
                    balans tussen emotie en ratio, tussen reflectie en actie,
                    tussen het persoonlijke en het institutionele, en tussen de
                    systemische analyse en strategisch handelen.
                </blockquote>
            </section>

            <section className="mt-12 py-20 pt-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid-cols- grid items-start gap-12 text-gray-700 lg:grid-cols-2">
                        <div>
                            {/* Collomn 01 */}
                            <h3 className="mb-8 text-3xl font-semibold text-gold-800">
                                Het programma
                            </h3>
                            <div className="space-y-6 text-lg leading-relaxed">
                                <p>
                                    Het programma start en eindigt met een
                                    persoonlijke opdracht:{' '}
                                    <span className="font-bold text-slate-600">
                                        een confessio
                                    </span>
                                    , oftewel een persoonlijk levensverhaal of
                                    sleutelverhaal, waarin je de betekenis van
                                    dit verhaal voor jouw persoonlijk
                                    leiderschap toelicht, en een{' '}
                                    <span className="font-bold text-slate-600">
                                        proeve van wijs leiderschap
                                    </span>
                                    , een persoonlijk manifest waarin je anderen
                                    meeneemt in jouw visie en verhaal voor de
                                    toekomst, en de wijze waarop jij daar een
                                    rol in wilt spelen. Hierbij word je begeleid
                                    zodat jouw boodschap ook vorm krijgt in een
                                    eigen stijl en toon.
                                </p>
                            </div>
                            <div className="mt-12 space-y-6">
                                <div className="rounded-lg border border-gray-200 bg-white/75 p-5 shadow-sm">
                                    <div className="mb-3 flex items-center">
                                        <div className="mr-3 h-3 w-3 rounded-full bg-slate-600"></div>
                                        <h4 className="text-xl font-semibold text-slate-800">
                                            Maandag 15 september
                                        </h4>
                                    </div>
                                    <p className="mb-2 font-medium text-gray-700">
                                        Aristotelische deugden: Ken jezelf!
                                    </p>
                                    <p className="text-gray-600">
                                        IOver de innerlijke stem en het
                                        persoonlijk kompas
                                    </p>
                                </div>

                                <div className="rounded-lg border border-gray-200 bg-white/75 p-5 shadow-sm">
                                    <div className="mb-3 flex items-center">
                                        <div className="mr-3 h-3 w-3 rounded-full bg-slate-600"></div>
                                        <h4 className="text-xl font-semibold text-slate-800">
                                            Dinsdag 16 september
                                        </h4>
                                    </div>
                                    <p className="mb-2 font-medium text-gray-700">
                                        Europese waarden: Otherness
                                    </p>
                                    <p className="text-gray-600">
                                        Ik en de ander - de ander en ik. Over
                                        relativeren en luisteren
                                    </p>
                                </div>

                                <div className="rounded-lg border border-gray-200 bg-white/75 p-5 shadow-sm">
                                    <div className="mb-3 flex items-center">
                                        <div className="mr-3 h-3 w-3 rounded-full bg-slate-500"></div>
                                        <h4 className="text-xl font-semibold text-slate-800">
                                            Woensdag 17 september
                                        </h4>
                                    </div>
                                    <p className="mb-2 font-medium text-gray-700">
                                        De markt en publieke waarden
                                    </p>
                                    <p className="text-gray-600">
                                        Interacties en complexiteiten. Over
                                        analyseren en interveniëren
                                    </p>
                                </div>

                                <div className="rounded-lg border border-gray-200 bg-white/75 p-5 shadow-sm">
                                    <div className="mb-3 flex items-center">
                                        <div className="mr-3 h-3 w-3 rounded-full bg-slate-600"></div>
                                        <h4 className="text-xl font-semibold text-slate-800">
                                            Donderdag 18 september
                                        </h4>
                                    </div>
                                    <p className="mb-2 font-medium text-gray-700">
                                        De uitdaging van publiek leiderschap
                                    </p>
                                    <p className="text-gray-600">
                                        Tot onderscheiding komen. Over jouw
                                        verhaal en persoonlijke opdracht
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Collomn 02 */}
                        <div>
                            <h3 className="mb-8 text-3xl font-semibold text-gold-800">
                                Voor wie?
                            </h3>
                            <div className="space-y-6 text-lg leading-relaxed">
                                <p>
                                    We zoeken hemelbestormers zonder
                                    luchtfietserij.
                                </p>
                            </div>
                            <img
                                src="images/workshops.jpeg"
                                alt="Mensen met stoelen in de lucht - creativiteit en verbinding"
                                className="my-6 h-72 w-full object-cover"
                            />

                            {/* Target Audience */}
                            <div className="rounded-lg bg-gradient-to-br from-slate-50 to-slate-50 p-8">
                                <h4 className="mb-4 text-xl font-semibold text-slate-800">
                                    Doelgroep
                                </h4>
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex items-start">
                                        <Star className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-slate-500" />
                                        <span>
                                            Senior/coördinerend
                                            beleidsmedewerkers
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <Star className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-slate-500" />
                                        <span>Tot ongeveer 40-45 jaar</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Star className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-slate-500" />
                                        <span>
                                            Werkzaam binnen hetzelfde
                                            departement
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <Star className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-slate-500" />
                                        <span>12-16 deelnemers per groep</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="my-6 rounded-lg bg-gradient-to-br from-slate-50 to-slate-50 p-8">
                                <h4 className="mb-4 text-xl font-semibold text-slate-800">
                                    Wat we zoeken
                                </h4>
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex items-start">
                                        <Lightbulb className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-slate-500" />
                                        <span>
                                            Gedreven, intelligent, belezen en
                                            open minded
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <Heart className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-slate-500" />
                                        <span>
                                            Durf om kwetsbaar en krachtig te
                                            zijn
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <Ear className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-slate-500" />
                                        <span>
                                            Kunnen luisteren en doorvragen
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <Target className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-slate-500" />
                                        <span>
                                            Wil van betekenis zijn en het
                                            verschil maken
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7 Pillars Extra Section – otie 02 */}
            <section className="bg-white py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h3 className="mb-4 text-3xl font-semibold text-slate-800">
                            #Optie B - Comenius ‘7 pijlers van wijs leiderschap’
                        </h3>
                        <p className="mx-auto mb-12 max-w-4xl text-lg text-gray-600">
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
                            pijlers van wijs leiderschap.{' '}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {pillarsExtra.map((pillarExtra, index) => {
                            const IconComponent = pillarExtra.icon;
                            return (
                                <div
                                    key={index}
                                    className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                                >
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
                                        <IconComponent className="mx-auto h-6 w-6 text-center text-slate-600" />
                                    </div>
                                    <h4 className="mb-3 text-xl font-semibold text-slate-800">
                                        {pillarExtra.title}
                                    </h4>
                                    <p className="leading-relaxed text-gray-600">
                                        {pillarExtra.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Option 2 - Complete Program Explanation */}
            <section className="bg-slate-100/50 py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <h3 className="mb-6 text-4xl font-bold text-slate-800">
                            Toelichting op het programma
                        </h3>
                        <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
                            Een diepgaande verkenning van persoonlijk en
                            contextueel leiderschap
                        </p>
                    </div>

                    {/* Two Layers Introduction */}
                    <div className="mb-20">
                        <div className="mx-auto max-w-4xl text-center">
                            <p className="mb-8 text-lg leading-relaxed text-gray-700">
                                Het programma is gebouwd op uit twee lagen.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                            {/* First Layer - Personal-Emotional */}
                            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">
                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-slate-600">
                                    <Heart className="h-8 w-8 text-white" />
                                </div>
                                <h4 className="mb-6 text-2xl font-bold text-slate-600">
                                    Persoonlijk-Emotionele Laag
                                </h4>
                                <div className="space-y-4 leading-relaxed text-gray-700">
                                    <p>
                                        <strong>De eerste laag</strong> richt
                                        zich op het persoonlijk-emotionele, het
                                        bewuste en onbewuste niveau van het
                                        persoonlijk leiderschap.
                                    </p>
                                    <p>
                                        Hierbij is er aandacht voor je{' '}
                                        <strong>roots</strong>, voor waar je
                                        vandaan komt, wat je meeneemt, de
                                        voorbeelden en waarden die je hebt
                                        meegekregen in je opvoeding, de
                                        gewoonten en patronen die je kenmerken.
                                    </p>
                                    <p>
                                        Is er aandacht voor{' '}
                                        <strong>
                                            wie je nu bent en wie je wilt zijn
                                        </strong>
                                        , de netwerken waarin je je beweegt, je
                                        verhouding tot anderen, je kwetsbaarheid
                                        en kracht.
                                    </p>
                                    <p>
                                        En we verkennen je{' '}
                                        <strong>
                                            persoonlijke drijfveren en
                                            leerdoelen
                                        </strong>
                                        , je inspiratiebronnen en
                                        voedingsbronnen voor je dromen, je
                                        persoonlijke leiderschapsprofiel, je
                                        route en mogelijke bestemmingen.
                                    </p>
                                </div>
                            </div>

                            {/* Second Layer - Systemic-Rational */}
                            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">
                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-slate-600">
                                    <Brain className="h-8 w-8 text-white" />
                                </div>
                                <h4 className="mb-6 text-2xl font-bold text-slate-600">
                                    Systemisch-Rationele Laag
                                </h4>
                                <div className="space-y-4 leading-relaxed text-gray-700">
                                    <p>
                                        <strong>De tweede laag</strong> richt
                                        zich meer op systemische-rationele
                                        niveau van het contextueel leiderschap.
                                    </p>
                                    <p>
                                        Hierbij is er aandacht voor de{' '}
                                        <strong>
                                            complexiteit van de grote
                                            maatschappelijke vraagstukken
                                        </strong>{' '}
                                        zowel geopolitiek, economisch als
                                        sociaal-cultureel.
                                    </p>
                                    <p>
                                        We onderzoeken{' '}
                                        <strong>
                                            de toekomst van Europa, de publieke
                                            regie in een markteconomie en de
                                            kloof in de samenleving
                                        </strong>
                                        .
                                    </p>
                                    <p>
                                        Aan de hand van deze drie grote thema's
                                        scherpen we onze{' '}
                                        <strong>
                                            analytische vaardigheden en
                                            debatvaardigheden
                                        </strong>{' '}
                                        aan om te komen tot dieper inzicht in en
                                        begrip voor de achterliggende oorzaken.
                                    </p>
                                    <p>
                                        We verdiepen ons in{' '}
                                        <strong>
                                            systeemfalen en bestuurlijke en
                                            beleidsmatige
                                            handelingsperspectieven
                                        </strong>
                                        . Om onze horizon te verbreden
                                        reflecteren op de geschiedenis, de grote
                                        politiek-filosofische stromingen en de
                                        geografische en culturele verschillen
                                        tussen landen.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 7 Pillars as Anchor Point */}
                    <div className="mb-8"></div>
                    <div className="mx-auto max-w-4xl space-y-6 text-lg leading-relaxed text-gray-600">
                        <h4 className="mb-4 text-3xl font-bold text-slate-600">
                            Het Ankerpunt: 7 Pijlers van Wijs Leiderschap
                        </h4>
                        <p>
                            Het programma heeft als{' '}
                            <strong>
                                ankerpunt de 7 pijlers van wijs leiderschap
                            </strong>
                            . Deze pijlers, zijn richtingwijzers voor het juiste
                            en goede in verhouding tot anderen.
                        </p>
                        <p>
                            Ze nodigen uit tot{' '}
                            <strong>zelfkennis en zelfreflectie</strong>, tot{' '}
                            <strong>verwondering</strong> en het actief{' '}
                            <strong>
                                luisteren en bevragen van andere inzichten (deep
                                democracy)
                            </strong>
                            , en tot het vergroten van{' '}
                            <strong>
                                aanpassingsvermogen en verbeeldingskracht
                            </strong>
                            , omdat deze onmisbaar zijn voor positief
                            transformerend leiderschap.
                        </p>
                        <p className="font-medium text-slate-600">
                            Daarbij gaat het steeds opnieuw om het vinden van
                            een balans tussen emotie en ratio, tussen reflectie
                            en actie, tussen het persoonlijke en het
                            institutionele, en tussen de systemische analyse en
                            strategisch handelen.
                        </p>
                    </div>

                    {/* Personal Assignments */}
                    <div className="my-20">
                        <div className="mx-auto max-w-6xl">
                            <h4 className="mb-8 text-2xl font-bold text-slate-600">
                                Het programma start en eindigt met een
                                persoonlijke opdracht
                            </h4>

                            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                                {/* First Layer - Personal-Emotional */}
                                <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">
                                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-slate-600">
                                        <Speech className="h-8 w-8 text-white" />
                                    </div>
                                    <h4 className="mb-6 text-2xl font-bold text-slate-600">
                                        Confessio
                                    </h4>
                                    <div className="space-y-4 leading-relaxed text-gray-700">
                                        <p>
                                            Een{' '}
                                            <strong>
                                                persoonlijk levensverhaal of
                                                sleutelverhaal
                                            </strong>
                                            , waarin je de betekenis van dit
                                            verhaal voor jouw persoonlijk
                                            leiderschap toelicht.
                                        </p>
                                    </div>
                                </div>

                                {/* Second Layer - Systemic-Rational */}
                                <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">
                                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-slate-600">
                                        <GraduationCap className="h-8 w-8 text-white" />
                                    </div>
                                    <h4 className="mb-6 text-2xl font-bold text-slate-600">
                                        Proeve van Wijs Leiderschap
                                    </h4>
                                    <div className="space-y-4 leading-relaxed text-gray-700">
                                        <p>
                                            Een{' '}
                                            <strong>
                                                persoonlijk manifest
                                            </strong>{' '}
                                            waarin je anderen meeneemt in jouw
                                            visie en verhaal voor de toekomst,
                                            en de wijze waarop jij daar een rol
                                            in wilt spelen.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <p className="my-10 leading-relaxed text-gray-700">
                                <strong>Begeleiding:</strong> Hierbij word je
                                begeleid zodat jouw boodschap ook vorm krijgt in
                                een eigen stijl en toon.
                            </p>
                        </div>
                    </div>

                    {/* Program Flow */}

                    <div className="mb-8 text-center">
                        <div className="mx-auto max-w-4xl space-y-6 text-left text-lg leading-relaxed text-gray-600">
                            <h4 className="mb-4 text-3xl font-bold text-slate-600">
                                Programmaverloop
                            </h4>
                            <p className="mb-6 text-lg leading-relaxed text-gray-700">
                                Het programma <strong>start en eindigt</strong>{' '}
                                met een persoonlijke opdracht: een confessio,
                                oftewel een persoonlijk levensverhaal of
                                sleutelverhaal, waarin je de betekenis van dit
                                verhaal voor jouw persoonlijk leiderschap
                                toelicht, en een proeve van wijs leiderschap,
                                een persoonlijk manifest waarin je anderen
                                meeneemt in jouw visie en verhaal voor de
                                toekomst, en de wijze waarop jij daar een rol in
                                wilt spelen.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-700">
                                In de <strong>tussenliggende dagen</strong>{' '}
                                staan drie grote maatschappelijke vraagstukken
                                centraal:{' '}
                                <strong>
                                    de toekomst van Europa, publieke regie in de
                                    markteconomie en de kloof in de samenleving
                                </strong>
                                . Hiervoor zijn zowel wetenschappelijke experts
                                als ervaringsdeskundigen uitgenodigd. We volgen
                                colleges, luisteren naar verhalen uit de
                                praktijk, bevragen de sprekers en elkaar op
                                ervaringen in inzichten, doen groepsopdrachten
                                om tot dieper inzicht en begrip te komen, en
                                eindigen elke dag met een reflectie op het thema
                                van de dag in de vorm van een dialoog of
                                socratisch gesprek.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Participants Profile Section */}
            <section className="bg-white py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <h3 className="mb-6 text-4xl font-bold text-slate-600">
                            Deelnemersprofiel
                        </h3>
                        <p className="mx-auto max-w-2xl text-xl text-gray-600">
                            Emerging leaders in de publieke sector
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
                        {/* Target Group */}
                        <div>
                            <h4 className="mb-8 text-2xl font-bold text-slate-800">
                                Wie nodigen we uit?
                            </h4>
                            <div className="rounded-xl bg-gradient-to-br from-slate-50 to-slate-50 p-8">
                                <p className="mb-6 text-lg leading-relaxed text-gray-700">
                                    Voor 7 pijlers van wijs leiderschap nodigt
                                    Comenius{' '}
                                    <strong>
                                        getalenteerde beleidsmedewerkers
                                    </strong>{' '}
                                    uit:{' '}
                                    <em>
                                        'Emerging leaders in de publieke sector'
                                    </em>
                                    .
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <Users className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-slate-600" />
                                        <div>
                                            <p className="font-medium text-gray-800">
                                                Groepssamenstelling
                                            </p>
                                            <p className="text-gray-600">
                                                Minimaal 12 en maximum 16
                                                deelnemers allen werkzaam binnen
                                                hetzelfde departement
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <Target className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-slate-600" />
                                        <div>
                                            <p className="font-medium text-gray-800">
                                                Functieniveau
                                            </p>
                                            <p className="text-gray-600">
                                                Senior/coördinerend
                                                beleidsmedewerkers die de wens
                                                hebben zich verder te
                                                ontwikkelen
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <Calendar className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-slate-600" />
                                        <div>
                                            <p className="font-medium text-gray-800">
                                                Leeftijd
                                            </p>
                                            <p className="text-gray-600">
                                                Geen harde leeftijdgrens, focus
                                                ligt op medewerkers tot ongeveer
                                                40-45 jaar
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 rounded-lg bg-slate-100 p-4">
                                    <p className="font-medium text-slate-800">
                                        <strong>Netwerkvorming:</strong> Er
                                        ontstaat ook een nieuw netwerk waar je
                                        steun aan kan hebben bij je verdere
                                        persoonlijke en professionele
                                        ontwikkeling.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Expectations */}
                        <div>
                            <h4 className="mb-8 text-2xl font-bold text-slate-800">
                                Wat verwachten we?
                            </h4>
                            <div className="rounded-xl bg-gradient-to-br from-gold-50 to-yellow-50 p-8">
                                <p className="mb-6 text-lg leading-relaxed text-gray-700">
                                    Van de deelnemers verwacht Comenius een{' '}
                                    <strong>
                                        actieve en betrokken deelname
                                    </strong>
                                    , waarbij reflecteren en co-creëren
                                    essentieel zijn.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <Heart className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-slate-600" />
                                        <div>
                                            <p className="font-medium text-gray-800">
                                                Actieve participatie
                                            </p>
                                            <p className="text-gray-600">
                                                Reflecteren en co-creëren zijn
                                                essentieel voor het programma
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <Brain className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-slate-600" />
                                        <div>
                                            <p className="font-medium text-gray-800">
                                                Persoonlijk gesprek
                                            </p>
                                            <p className="text-gray-600">
                                                Voorafgaand aan het programma
                                                vindt een gesprek plaats met de
                                                moderator
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <Target className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-slate-600" />
                                        <div>
                                            <p className="font-medium text-gray-800">
                                                Persoonlijk leerdoel
                                            </p>
                                            <p className="text-gray-600">
                                                Hiermee articuleer je in nauwe
                                                samenspraak je persoonlijke
                                                leerdoel
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Daily Program Section */}
            <section className="bg-slate-50 py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <h3 className="mb-6 text-4xl font-bold text-slate-800">
                            Programma
                        </h3>
                        <p className="mx-auto mb-8 max-w-2xl text-2xl font-medium text-gray-600">
                            15 september – 18 september 2025
                        </p>

                        {/* Dynamic Day Tabs */}
                        <div className="mb-12 flex flex-wrap justify-center gap-4">
                            {[
                                {
                                    id: 'maandag',
                                    label: 'Maandag 15 sept',
                                    subtitle:
                                        'Aristotelische deugden: Ken jezelf!',
                                },
                                {
                                    id: 'dinsdag',
                                    label: 'Dinsdag 16 sept',
                                    subtitle: 'Europese waarden: Otherness',
                                },
                                {
                                    id: 'woensdag',
                                    label: 'Woensdag 17 sept',
                                    subtitle: 'De markt en publieke waarden',
                                },
                                {
                                    id: 'donderdag',
                                    label: 'Donderdag 18 sept',
                                    subtitle:
                                        'De uitdaging van publiek leiderschap',
                                },
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveDay(tab.id)}
                                    className={`rounded-lg px-6 py-3 font-semibold transition-all duration-300 ${
                                        activeDay === tab.id
                                            ? 'scale-105 transform bg-gradient-to-r from-gold-500 to-gold-600 text-white shadow-lg'
                                            : 'border-2 border-gold-300 bg-white text-gold-600 hover:border-gold-500 hover:bg-gold-50'
                                    }`}
                                >
                                    <div className="flex flex-col items-center">
                                        <span className="text-sm">
                                            {tab.label}
                                        </span>
                                        <span className="text-xs opacity-75">
                                            {tab.subtitle}
                                        </span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Dynamic Program Content */}
                    <div className="mx-auto max-w-5xl">
                        {activeDay === 'maandag' && (
                            <div className="mb-12 rounded-2xl bg-white p-8 shadow-lg">
                                <div className="mb-8 border-b border-gray-200 pb-6">
                                    <h4 className="mb-2 text-3xl font-bold text-slate-800">
                                        Maandag 15 september 2025
                                    </h4>
                                    <div className="mb-4">
                                        <h5 className="text-xl font-semibold text-blue-700">
                                            Aristotelische deugden: Ken jezelf!
                                        </h5>
                                        <p className="text-lg italic text-gray-600">
                                            Over de innerlijke stem en het
                                            persoonlijk kompas
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    {/* Morning Sessions */}
                                    <div className="rounded-lg bg-gold-50 p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="rounded-full bg-gold-100 px-3 py-1 text-sm font-medium text-gold-800">
                                                    09:00 – 09:45
                                                </div>
                                            </div>
                                            <div>
                                                <h6 className="font-semibold text-gray-800">
                                                    Check-in, kwartier maken
                                                </h6>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-lg bg-gold-100 p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="rounded-full bg-gold-200 px-3 py-1 text-sm font-medium text-gold-800">
                                                    09:45 – 10:15
                                                </div>
                                            </div>
                                            <div>
                                                <h6 className="font-semibold text-gray-800">
                                                    Opening, oculaire
                                                    kennismaking
                                                </h6>
                                                <p className="text-sm text-gray-600">
                                                    (moderator; allen)
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-lg bg-gold-200 p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="rounded-full bg-gold-300 px-3 py-1 text-sm font-medium text-gold-900">
                                                    10:15 – 11:15
                                                </div>
                                            </div>
                                            <div>
                                                <h6 className="font-semibold text-gray-800">
                                                    Inleiding: Leiderschap in de
                                                    publieke sector, als
                                                    uitdaging
                                                </h6>
                                                <p className="mb-2 text-sm text-gray-600">
                                                    (co-moderator)
                                                </p>
                                                <h6 className="font-semibold text-gray-800">
                                                    Opening: Comenius Code;
                                                    opzet programma
                                                </h6>
                                                <p className="text-sm text-gray-600">
                                                    (moderator)
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-lg bg-gray-100 p-4">
                                        <div className="flex items-center gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-600">
                                                    11:15 – 11:30
                                                </div>
                                            </div>
                                            <div>
                                                <h6 className="font-medium text-gray-700">
                                                    Break
                                                </h6>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-lg bg-gold-300 p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="rounded-full bg-gold-400 px-3 py-1 text-sm font-medium text-gold-900">
                                                    11:30 – 13:00
                                                </div>
                                            </div>
                                            <div>
                                                <h6 className="font-semibold text-gray-800">
                                                    Confessio
                                                </h6>
                                                <p className="text-sm text-gray-600">
                                                    (moderator; allen)
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-lg bg-gray-100 p-4">
                                        <div className="flex items-center gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-600">
                                                    13:00 – 14:00
                                                </div>
                                            </div>
                                            <div>
                                                <h6 className="font-medium text-gray-700">
                                                    Lunch
                                                </h6>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Afternoon Sessions */}
                                    <div className="rounded-lg bg-gold-400 p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="rounded-full bg-gold-500 px-3 py-1 text-sm font-medium text-white">
                                                    14:00 – 16:30
                                                </div>
                                            </div>
                                            <div>
                                                <h6 className="font-semibold text-gray-800">
                                                    College & dialoog #1:
                                                    Aristotelische deugdethiek
                                                </h6>
                                                <p className="text-sm text-gold-100">
                                                    door Prof. dr. Andreas
                                                    Kinneging
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-lg bg-gray-100 p-4">
                                        <div className="flex items-center gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-600">
                                                    16:30 – 17:00
                                                </div>
                                            </div>
                                            <div>
                                                <h6 className="font-medium text-gray-700">
                                                    Break
                                                </h6>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-lg bg-gold-500 p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="rounded-full bg-gold-600 px-3 py-1 text-sm font-medium text-white">
                                                    17:00 – 18:30
                                                </div>
                                            </div>
                                            <div>
                                                <h6 className="font-semibold text-gold-100">
                                                    Reflectie #1: Bouwstenen
                                                    voor persoonlijk kompas;
                                                    schrijfopdracht
                                                </h6>
                                                <p className="text-sm text-gray-100">
                                                    (moderator; allen)
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Evening Sessions */}
                                    <div className="rounded-lg bg-gray-100 p-4">
                                        <div className="flex items-center gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-600">
                                                    18:30 – 19:30
                                                </div>
                                            </div>
                                            <div>
                                                <h6 className="font-medium text-gray-700">
                                                    Diner
                                                </h6>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-lg bg-gold-600 p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="rounded-full bg-gold-700 px-3 py-1 text-sm font-medium text-white">
                                                    19:30 – 21:30
                                                </div>
                                            </div>
                                            <div>
                                                <h6 className="font-semibold text-white">
                                                    Field lab #1: Innerlijke
                                                    stem
                                                </h6>
                                                <p className="text-sm text-gold-100">
                                                    Concert en beschouwing door
                                                    Remy van Kesteren
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-lg bg-gold-700 p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="rounded-full bg-gold-800 px-3 py-1 text-sm font-medium text-white">
                                                    Vanaf 21:30
                                                </div>
                                            </div>
                                            <div>
                                                <h6 className="font-semibold text-white">
                                                    Ont-moeten: Tijd voor jezelf
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeDay === 'dinsdag' && (
                            <div className="mb-12 rounded-2xl bg-white p-8 shadow-lg">
                                <div className="mb-8 border-b border-gray-200 pb-6">
                                    <h4 className="mb-2 text-3xl font-bold text-slate-800">
                                        Dinsdag 16 september 2025
                                    </h4>
                                    <div className="mb-4">
                                        <h5 className="text-xl font-semibold text-blue-700">
                                            Europese waarden: Otherness: ik en
                                            de ander – de ander en ik
                                        </h5>
                                        <p className="text-lg italic text-gray-600">
                                            Over relativeren en luisteren
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    {/* Morning Sessions */}
                                    <div className="rounded-lg bg-gold-50 p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="rounded-full bg-gold-100 px-3 py-1 text-sm font-medium text-gold-800">
                                                    08:00 – 09:00
                                                </div>
                                            </div>
                                            <div>
                                                <h6 className="font-semibold text-gray-800">
                                                    Ontbijt
                                                </h6>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-lg bg-gold-100 p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="rounded-full bg-gold-200 px-3 py-1 text-sm font-medium text-gold-800">
                                                    09:00 – 09:30
                                                </div>
                                            </div>
                                            <div>
                                                <h6 className="font-semibold text-gray-800">
                                                    Dagopening
                                                </h6>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-lg bg-gold-200 p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="rounded-full bg-gold-300 px-3 py-1 text-sm font-medium text-gold-900">
                                                    09:30 – 11:00
                                                </div>
                                            </div>
                                            <div>
                                                <h6 className="font-semibold text-gray-800">
                                                    College & dialoog #2:
                                                    Demografische ontwikkelingen
                                                    en visie op Nederland
                                                </h6>
                                                <p className="text-sm text-gray-600">
                                                    door prof. dr. Paul Scheffer
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-lg bg-gray-100 p-4">
                                        <div className="flex items-center gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-600">
                                                    11:00 – 11:15
                                                </div>
                                            </div>
                                            <div>
                                                <h6 className="font-medium text-gray-700">
                                                    Break
                                                </h6>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-lg bg-gold-300 p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="rounded-full bg-gold-400 px-3 py-1 text-sm font-medium text-gold-900">
                                                    11:15 – 13:15
                                                </div>
                                            </div>
                                            <div>
                                                <h6 className="font-semibold text-gray-800">
                                                    Reflectie #2: De Socratische
                                                    vraag durven stellen
                                                </h6>
                                                <p className="text-sm text-gray-600">
                                                    (moderator; allen)
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-lg bg-gray-100 p-4">
                                        <div className="flex items-center gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-600">
                                                    13:15 – 14:15
                                                </div>
                                            </div>
                                            <div>
                                                <h6 className="font-medium text-gray-700">
                                                    Lunch
                                                </h6>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Afternoon Sessions */}
                                    <div className="rounded-lg bg-gold-400 p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="rounded-full bg-gold-500 px-3 py-1 text-sm font-medium text-white">
                                                    14:15 – 16:15
                                                </div>
                                            </div>
                                            <div>
                                                <h6 className="font-semibold text-gray-800">
                                                    College & dialoog #3:
                                                    Populisme: Atlas van
                                                    afgehaakt Nederland
                                                </h6>
                                                <p className="text-sm text-gold-100">
                                                    door drs. René Cuperus
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-lg bg-gray-100 p-4">
                                        <div className="flex items-center gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-600">
                                                    16:15 – 16:30
                                                </div>
                                            </div>
                                            <div>
                                                <h6 className="font-medium text-gray-700">
                                                    Break
                                                </h6>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-lg bg-gold-500 p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="rounded-full bg-gold-600 px-3 py-1 text-sm font-medium text-white">
                                                    16:30 – 18:15
                                                </div>
                                            </div>
                                            <div>
                                                <h6 className="font-semibold text-gold-100">
                                                    Field lab #2: Hoe voer je
                                                    het goede gesprek?
                                                </h6>
                                                <p className="text-sm text-gold-100">
                                                    (co-moderator; allen)
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-lg bg-gray-100 p-4">
                                        <div className="flex items-center gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-600">
                                                    18:15 – 19:30
                                                </div>
                                            </div>
                                            <div>
                                                <h6 className="font-medium text-gray-700">
                                                    Diner
                                                </h6>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Evening Sessions */}
                                    <div className="rounded-lg bg-gold-600 p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="rounded-full bg-gold-700 px-3 py-1 text-sm font-medium text-white">
                                                    19:30 – 21:30
                                                </div>
                                            </div>
                                            <div>
                                                <h6 className="font-semibold text-white">
                                                    Sleutelverhalen
                                                </h6>
                                                <p className="text-sm text-gold-100">
                                                    (moderator; allen)
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-lg bg-gold-700 p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="rounded-full bg-gold-800 px-3 py-1 text-sm font-medium text-white">
                                                    Vanaf 21:30
                                                </div>
                                            </div>
                                            <div>
                                                <h6 className="font-semibold text-white">
                                                    Ont-moeten: Tijd voor jezelf
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeDay === 'woensdag' && (
                            <div className="mb-12 rounded-2xl bg-white p-8 shadow-lg">
                                <div className="mb-8 border-b border-gray-200 pb-6">
                                    <h4 className="mb-2 text-3xl font-bold text-slate-800">
                                        Woensdag 17 september 2025
                                    </h4>
                                    <div className="mb-4">
                                        <h5 className="text-xl font-semibold text-blue-700">
                                            De markt en publieke waarden:
                                            Interacties en complexiteiten
                                        </h5>
                                        <p className="text-lg italic text-gray-600">
                                            Over analyseren en interveniëren
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    {/* Morning Sessions */}
                                    <div className="rounded-lg bg-gold-50 p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="rounded-full bg-gold-100 px-3 py-1 text-sm font-medium text-gold-800">
                                                    08:00 – 08:30
                                                </div>
                                            </div>
                                            <div>
                                                <h6 className="font-semibold text-gray-800">
                                                    Ontbijt
                                                </h6>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-lg bg-gold-100 p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="rounded-full bg-gold-200 px-3 py-1 text-sm font-medium text-gold-800">
                                                    08:30 – 09:00
                                                </div>
                                            </div>
                                            <div>
                                                <h6 className="font-semibold text-gray-800">
                                                    Dagopening
                                                </h6>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-lg bg-gold-200 p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="rounded-full bg-gold-300 px-3 py-1 text-sm font-medium text-gold-900">
                                                    09:00 – 10:30
                                                </div>
                                            </div>
                                            <div>
                                                <h6 className="font-semibold text-gray-800">
                                                    College & dialoog #4: De
                                                    gezagscrisis
                                                </h6>
                                                <p className="text-sm text-gray-600">
                                                    door Prof. dr. Ad Verbrugge
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-lg bg-gray-100 p-4">
                                        <div className="flex items-center gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-600">
                                                    10:30 – 11:00
                                                </div>
                                            </div>
                                            <div>
                                                <h6 className="font-medium text-gray-700">
                                                    Pauze
                                                </h6>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-lg bg-gold-300 p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="rounded-full bg-gold-400 px-3 py-1 text-sm font-medium text-gold-900">
                                                    11:00 – 12:30
                                                </div>
                                            </div>
                                            <div>
                                                <h6 className="font-semibold text-gray-800">
                                                    College & dialoog #5: Markt
                                                    en publieke waarden
                                                </h6>
                                                <p className="text-sm text-gray-600">
                                                    door prof. dr. Barbara
                                                    Baarsma
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-lg bg-gray-100 p-4">
                                        <div className="flex items-center gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-600">
                                                    12:30 – 13:30
                                                </div>
                                            </div>
                                            <div>
                                                <h6 className="font-medium text-gray-700">
                                                    Lunch
                                                </h6>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Afternoon Sessions */}
                                    <div className="rounded-lg bg-gold-400 p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="rounded-full bg-gold-500 px-3 py-1 text-sm font-medium text-white">
                                                    13:30 – 15:00
                                                </div>
                                            </div>
                                            <div>
                                                <h6 className="font-semibold text-gray-800">
                                                    Reflectie #3 Wandelen met
                                                    een vraag, in tweetallen
                                                </h6>
                                                <p className="text-sm text-gold-100">
                                                    (moderator; allen)
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-lg bg-gold-500 p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="rounded-full bg-gold-600 px-3 py-1 text-sm font-medium text-white">
                                                    15:00 – 17:00
                                                </div>
                                            </div>
                                            <div>
                                                <h6 className="font-semibold text-gold-100">
                                                    Field lab #3: Hoe voer je
                                                    het goede gesprek?
                                                </h6>
                                                <p className="text-sm text-gold-100">
                                                    (co-moderator; allen)
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-lg bg-gray-100 p-4">
                                        <div className="flex items-center gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-600">
                                                    17:00 – 18:00
                                                </div>
                                            </div>
                                            <div>
                                                <h6 className="font-medium text-gray-700">
                                                    Tijd voor jezelf
                                                </h6>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-lg bg-gray-100 p-4">
                                        <div className="flex items-center gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-600">
                                                    18:00 – 19:15
                                                </div>
                                            </div>
                                            <div>
                                                <h6 className="font-medium text-gray-700">
                                                    Diner
                                                </h6>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Evening Sessions */}
                                    <div className="rounded-lg bg-gold-600 p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="rounded-full bg-gold-700 px-3 py-1 text-sm font-medium text-white">
                                                    19:30 – 21:30
                                                </div>
                                            </div>
                                            <div>
                                                <h6 className="font-semibold text-white">
                                                    Field lab #4: Harmonie in
                                                    leiderschap: De kunst van
                                                    het dirigeren
                                                </h6>
                                                <p className="text-sm text-gold-100">
                                                    door Alexander de Blaeij
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-lg bg-gold-700 p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="rounded-full bg-gold-800 px-3 py-1 text-sm font-medium text-white">
                                                    Vanaf 21:30
                                                </div>
                                            </div>
                                            <div>
                                                <h6 className="font-semibold text-white">
                                                    Ont-moeten: Tijd voor jezelf
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeDay === 'donderdag' && (
                            <div className="mb-12 rounded-2xl bg-white p-8 shadow-lg">
                                <div className="mb-8 border-b border-gray-200 pb-6">
                                    <h4 className="mb-2 text-3xl font-bold text-slate-800">
                                        Donderdag 18 september 2025
                                    </h4>
                                    <div className="mb-4">
                                        <h5 className="text-xl font-semibold text-blue-700">
                                            De uitdaging van het publiek
                                            leiderschap; tot onderscheiding
                                            komen
                                        </h5>
                                        <p className="text-lg italic text-gray-600">
                                            Over jouw verhaal en persoonlijke
                                            opdracht
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    {/* Morning Sessions */}
                                    <div className="rounded-lg bg-gold-50 p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="rounded-full bg-gold-100 px-3 py-1 text-sm font-medium text-gold-800">
                                                    08:00 – 09:00
                                                </div>
                                            </div>
                                            <div>
                                                <h6 className="font-semibold text-gray-800">
                                                    Ontbijt
                                                </h6>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-lg bg-gold-100 p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="rounded-full bg-gold-200 px-3 py-1 text-sm font-medium text-gold-800">
                                                    09:00 – 09:30
                                                </div>
                                            </div>
                                            <div>
                                                <h6 className="font-semibold text-gray-800">
                                                    Dagopening
                                                </h6>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-lg bg-gold-200 p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="rounded-full bg-gold-300 px-3 py-1 text-sm font-medium text-gold-900">
                                                    09:30 – 13:00
                                                </div>
                                            </div>
                                            <div>
                                                <h6 className="font-semibold text-gray-800">
                                                    Field lab #5: Tot
                                                    onderscheiding komen.
                                                    Introductie op de
                                                    Geestelijke Oefening
                                                </h6>
                                                <p className="mb-2 text-sm text-gray-600">
                                                    door Pieter-Matthijs
                                                    Gijsbers
                                                </p>
                                                <h6 className="font-semibold text-gray-800">
                                                    Practicum: Geestelijke
                                                    Oefening
                                                </h6>
                                                <p className="mb-2 text-sm text-gray-600">
                                                    (moderator; allen)
                                                </p>
                                                <h6 className="font-semibold text-gray-800">
                                                    Reflectie #4: Nabespreking
                                                    Geestelijke Oefening
                                                </h6>
                                                <p className="text-sm text-gray-600">
                                                    (moderator; allen)
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-lg bg-gray-100 p-4">
                                        <div className="flex items-center gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-600">
                                                    13:00 – 14:00
                                                </div>
                                            </div>
                                            <div>
                                                <h6 className="font-medium text-gray-700">
                                                    Lunch
                                                </h6>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Afternoon Sessions */}
                                    <div className="rounded-lg bg-gold-300 p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="rounded-full bg-gold-400 px-3 py-1 text-sm font-medium text-gold-900">
                                                    14:00 – 16:00
                                                </div>
                                            </div>
                                            <div>
                                                <h6 className="font-semibold text-gray-800">
                                                    Jouw verhaal en persoonlijke
                                                    opdracht
                                                </h6>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-lg bg-gray-100 p-4">
                                        <div className="flex items-center gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-600">
                                                    16:00 – 16:15
                                                </div>
                                            </div>
                                            <div>
                                                <h6 className="font-medium text-gray-700">
                                                    Break
                                                </h6>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-lg bg-gold-400 p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="rounded-full bg-gold-500 px-3 py-1 text-sm font-medium text-white">
                                                    16:15 – 16:45
                                                </div>
                                            </div>
                                            <div>
                                                <h6 className="font-semibold text-gray-800">
                                                    Slotwoord: De uitdaging van
                                                    het publiek leiderschap,
                                                    revisited
                                                </h6>
                                                <p className="text-sm text-gold-100">
                                                    (co-moderator)
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-lg bg-gold-500 p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="rounded-full bg-gold-600 px-3 py-1 text-sm font-medium text-white">
                                                    16:45 – 17:00
                                                </div>
                                            </div>
                                            <div>
                                                <h6 className="font-semibold text-gold-100">
                                                    Slotwoord met persoonlijke
                                                    opdracht
                                                </h6>
                                                <p className="text-sm text-gold-100">
                                                    (moderator)
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Closing Session */}
                                    <div className="rounded-lg bg-gold-600 p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="rounded-full bg-gold-700 px-3 py-1 text-sm font-medium text-white">
                                                    17:00 – 17:30
                                                </div>
                                            </div>
                                            <div>
                                                <h6 className="font-semibold text-white">
                                                    Parting glass
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
        </>
    );
};

export default Comenius;
