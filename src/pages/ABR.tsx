import { SEO } from '@/components/SEO';
import {
    Building2,
    Users,
    Target,
    CheckCircle,
    ArrowRight,
    Shield,
    BookOpen,
} from 'lucide-react';

const ABR = () => {
    const courseSchema = {
        '@context': 'https://schema.org',
        '@type': 'Course',
        name: 'ABR - Algemene Bestuursdienst Rijk - De rol van politiek-ambtelijk adviseur',
        description:
            'Groei in persoonlijk leiderschap - een programma voor beleidsmedewerkers en medewerkers in de uitvoering en het toezicht, ontwikkeld voor en door medewerkers zelf.',
        provider: {
            '@type': 'Organization',
            name: 'Tharros Training & Coaching',
        },
        instructor: {
            '@type': 'Person',
            name: 'Ferdi Licher',
        },
        courseMode: 'In-person',
        educationalLevel: 'Professional',
        audience: {
            '@type': 'Audience',
            audienceType: 'Beleidsmedewerkers en uitvoeringsmedewerkers',
        },
    };

    return (
        <>
            <SEO
                title="ABR - Algemene Bestuursdienst Rijk - De rol van politiek-ambtelijk adviseur"
                description="Groei in persoonlijk leiderschap - een programma voor beleidsmedewerkers en medewerkers in de uitvoering en het toezicht, ontwikkeld voor en door medewerkers zelf."
                keywords="algemene bestuursdienst, ABR, politiek ambtelijk adviseur, rijksoverheid, beleidsmedewerkers, persoonlijk leiderschap"
                structuredData={courseSchema}
            />
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-slate-800 to-slate-900 text-white">
                <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
                        <div>
                            <div className="mb-8 flex items-center space-x-4">
                                <Building2 className="h-16 w-16 text-slate-300" />
                                <div>
                                    <h1 className="text-5xl font-bold tracking-tight lg:text-6xl">
                                        ABR
                                    </h1>
                                    <p className="text-xl font-light text-slate-100">
                                        Ontwikkelprogramma Leiderschap
                                    </p>
                                </div>
                            </div>
                            <p className="mb-8 text-xl font-light text-slate-100">
                                Groei in Persoonlijk Leiderschap (incompany)
                            </p>
                            <p className="mb-10 text-lg font-light leading-relaxed">
                                Training voor de rol van politiek en ambtelijk
                                adviseur binnen het ABR programma. Leer
                                effectief en krachtig je adviserende rol in te
                                vullen in de complexe dynamiek tussen politiek
                                en ambtelijke organisatie.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center rounded-full bg-slate-700 px-6 py-3">
                                    <Shield className="mr-2 h-5 w-5" />
                                    <span className="font-medium">
                                        ABR Gecertificeerd
                                    </span>
                                </div>
                                <div className="flex items-center rounded-full bg-white px-6 py-3 text-slate-800">
                                    <Users className="mr-2 h-5 w-5" />
                                    <span className="font-medium">
                                        Politiek-Ambtelijk
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="SocialRealism.jpg"
                                alt="Government Advisory Training"
                                className="rounded-none shadow-2xl"
                            />
                            <div className="absolute inset-0 rounded-none bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ABR Context */}
            <section className="bg-white py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <h2 className="mb-6 text-4xl font-semibold text-slate-800">
                            De Politiek-Ambtelijke Relatie
                        </h2>
                        <p className="mx-auto max-w-4xl text-xl font-light leading-relaxed text-gray-600">
                            Het ABR (Algemene Bestuursdienst) programma vormt
                            topambtenaren die de brug slaan tussen politiek en
                            uitvoering. Onze training bereidt u voor op deze
                            cruciale rol in het hart van de democratie.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        <div className="rounded-none border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-8">
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-slate-600">
                                <Building2 className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="mb-4 text-xl font-semibold text-slate-800">
                                Ambtelijke Professionaliteit
                            </h3>
                            <p className="font-light leading-relaxed text-gray-600">
                                Ontwikkel een sterke professionele identiteit
                                als topambtenaar, gebaseerd op onpartijdigheid,
                                integriteit en vakmanschap.
                            </p>
                        </div>

                        <div className="rounded-none border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-8">
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-slate-600">
                                <Users className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="mb-4 text-xl font-semibold text-slate-800">
                                Politieke Sensitiviteit
                            </h3>
                            <p className="font-light leading-relaxed text-gray-600">
                                Leer navigeren in de politieke arena met respect
                                voor democratische processen en politieke
                                verhoudingen.
                            </p>
                        </div>

                        <div className="rounded-none border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-8">
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-slate-600">
                                <Target className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="mb-4 text-xl font-semibold text-slate-800">
                                Strategisch Adviseren
                            </h3>
                            <p className="font-light leading-relaxed text-gray-600">
                                Ontwikkel vaardigheden om complexe
                                beleidsvraagstukken te vertalen naar heldere
                                adviezen en uitvoerbare plannen.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Skills */}
            <section className="bg-gray-50 py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
                        <div>
                            <h2 className="mb-8 text-4xl font-semibold text-slate-800">
                                Kernvaardigheden voor ABR'ers
                            </h2>
                            <p className="mb-10 text-lg font-light leading-relaxed text-gray-600">
                                Als ABR'er bent u de spil tussen politieke
                                ambities en ambtelijke realiteit. Ons programma
                                rust u uit met de unieke vaardigheden die nodig
                                zijn voor deze uitdagende positie.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <CheckCircle className="mt-1 h-6 w-6 text-slate-500" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-800">
                                            Strategische Analyse
                                        </h3>
                                        <p className="font-light text-gray-600">
                                            Complexe beleidsvraagstukken
                                            doorgronden en helder adviseren
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <CheckCircle className="mt-1 h-6 w-6 text-slate-500" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-800">
                                            Stakeholder Management
                                        </h3>
                                        <p className="font-light text-gray-600">
                                            Effectief samenwerken met politici,
                                            ambtenaren en externe partijen
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <CheckCircle className="mt-1 h-6 w-6 text-slate-500" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-800">
                                            Politieke Intelligentie
                                        </h3>
                                        <p className="font-light text-gray-600">
                                            Begrip van politieke dynamiek en
                                            democratische besluitvorming
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <CheckCircle className="mt-1 h-6 w-6 text-slate-500" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-800">
                                            Integriteit & Onpartijdigheid
                                        </h3>
                                        <p className="font-light text-gray-600">
                                            Handelen vanuit professionele
                                            waarden in politiek gevoelige
                                            situaties
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <CheckCircle className="mt-1 h-6 w-6 text-slate-500" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-800">
                                            Communicatie & Invloed
                                        </h3>
                                        <p className="font-light text-gray-600">
                                            Overtuigend presenteren en adviseren
                                            op het hoogste niveau
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img
                                src="groeps04.jpeg"
                                alt="Strategic Advisory Skills"
                                className="rounded-none shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Program Structure */}
            <section className="bg-white py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <h2 className="mb-6 text-4xl font-semibold text-slate-800">
                            Programma-opbouw
                        </h2>
                        <p className="mx-auto max-w-4xl text-xl font-light text-gray-600">
                            Een intensief 4-maanden durend programma, specifiek
                            ontworpen voor ABR'ers en hun unieke uitdagingen in
                            de politiek-ambtelijke context.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        <div className="rounded-none border-2 border-slate-200 bg-white p-8 shadow-sm">
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-slate-600 text-xl font-bold text-white">
                                1
                            </div>
                            <h3 className="mb-4 text-xl font-semibold text-slate-800">
                                Politiek-Ambtelijke Verhoudingen
                            </h3>
                            <p className="mb-6 font-light leading-relaxed text-gray-600">
                                Verdieping in de constitutionele kaders,
                                democratische legitimiteit en de unieke positie
                                van de ABR'er in het bestuurlijke stelsel.
                            </p>
                            <ul className="space-y-2 text-sm font-light text-gray-500">
                                <li>• Democratie en rechtsstaat</li>
                                <li>• Rol van de ambtelijke top</li>
                                <li>• Politieke sensitiviteit</li>
                                <li>• Case studies uit de praktijk</li>
                            </ul>
                        </div>

                        <div className="rounded-none border-2 border-slate-200 bg-white p-8 shadow-sm">
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-slate-600 text-xl font-bold text-white">
                                2
                            </div>
                            <h3 className="mb-4 text-xl font-semibold text-slate-800">
                                Strategisch Adviseren
                            </h3>
                            <p className="mb-6 font-light leading-relaxed text-gray-600">
                                Praktische vaardigheden voor het analyseren van
                                complexe beleidsvraagstukken en het formuleren
                                van heldere adviezen.
                            </p>
                            <ul className="space-y-2 text-sm font-light text-gray-500">
                                <li>• Beleidsanalyse technieken</li>
                                <li>• Adviesvaardigheden</li>
                                <li>• Presentatie technieken</li>
                                <li>• Omgaan met onzekerheid</li>
                            </ul>
                        </div>

                        <div className="rounded-none border-2 border-slate-200 bg-white p-8 shadow-sm">
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-slate-600 text-xl font-bold text-white">
                                3
                            </div>
                            <h3 className="mb-4 text-xl font-semibold text-slate-800">
                                Stakeholder Dynamiek
                            </h3>
                            <p className="mb-6 font-light leading-relaxed text-gray-600">
                                Navigeren in complexe netwerken van politici,
                                ambtenaren, media en maatschappelijke
                                organisaties.
                            </p>
                            <ul className="space-y-2 text-sm font-light text-gray-500">
                                <li>• Stakeholder mapping</li>
                                <li>• Netwerk management</li>
                                <li>• Media omgang</li>
                                <li>• Crisis communicatie</li>
                            </ul>
                        </div>

                        <div className="rounded-none border-2 border-slate-200 bg-white p-8 shadow-sm">
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-slate-600 text-xl font-bold text-white">
                                4
                            </div>
                            <h3 className="mb-4 text-xl font-semibold text-slate-800">
                                Persoonlijk Leiderschap
                            </h3>
                            <p className="mb-6 font-light leading-relaxed text-gray-600">
                                Ontwikkeling van authentiek leiderschap onder
                                politieke druk, met focus op integriteit en
                                professionele waarden.
                            </p>
                            <ul className="space-y-2 text-sm font-light text-gray-500">
                                <li>• Persoonlijke effectiviteit</li>
                                <li>• Omgaan met druk</li>
                                <li>• Ethisch leiderschap</li>
                                <li>• Work-life integration</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ABR Logo Section & CTA */}
            <section className="bg-slate-800 py-20">
                <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                    <div className="mb-10 flex items-center justify-center space-x-6">
                        <Building2 className="h-20 w-20 text-slate-300" />
                        <div className="text-left">
                            <h2 className="text-4xl font-bold text-white">
                                ABR Ontwikkelprogramma
                            </h2>
                            <p className="text-lg font-light text-slate-100">
                                In samenwerking met de Algemene Bestuursdienst
                            </p>
                        </div>
                    </div>

                    <p className="mb-10 text-xl font-light leading-relaxed text-slate-100">
                        Bereid u voor op een succesvolle carrière als
                        topambtenaar. Ontwikkel de vaardigheden die u nodig
                        heeft om effectief te adviseren en leiding te geven in
                        de complexe wereld van politiek en bestuur.
                    </p>

                    <div className="mb-10 rounded-none bg-white bg-opacity-10 p-10 backdrop-blur-sm">
                        <div className="grid grid-cols-1 gap-8 text-white md:grid-cols-4">
                            <div>
                                <h3 className="mb-3 text-lg font-semibold">
                                    Duur
                                </h3>
                                <p className="font-light text-slate-100">
                                    4 maanden
                                </p>
                            </div>
                            <div>
                                <h3 className="mb-3 text-lg font-semibold">
                                    Format
                                </h3>
                                <p className="font-light text-slate-100">
                                    Incompany
                                </p>
                            </div>
                            <div>
                                <h3 className="mb-3 text-lg font-semibold">
                                    Doelgroep
                                </h3>
                                <p className="font-light text-slate-100">
                                    ABR'ers
                                </p>
                            </div>
                            <div>
                                <h3 className="mb-3 text-lg font-semibold">
                                    Certificering
                                </h3>
                                <p className="font-light text-slate-100">
                                    ABR erkend
                                </p>
                            </div>
                        </div>
                    </div>

                    <a
                        href="/contact"
                        className="inline-flex transform items-center rounded-none bg-white px-10 py-5 font-semibold text-slate-800 shadow-lg transition-colors duration-200 hover:-translate-y-1 hover:bg-gray-100 hover:shadow-xl"
                    >
                        <BookOpen className="mr-3 h-5 w-5" />
                        <span>Informatie aanvragen</span>
                        <ArrowRight className="ml-3 h-5 w-5" />
                    </a>
                </div>
            </section>
        </>
    );
};

export default ABR;
