import { SEO } from '@/components/SEO';
import { User, Target, BarChart3, CheckCircle, ArrowRight } from 'lucide-react';

const Lecture = () => {
    const courseSchema = {
        '@context': 'https://schema.org',
        '@type': 'Course',
        name: 'Lecture - Over Ambtelijk Vakmanschap',
        description:
            'Ontdek de essentie van ambtelijk vakmanschap en ontwikkel jezelf als professional in de publieke sector. Een intensieve training gericht op zelfkennis en persoonlijke groei.',
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
            audienceType: 'Professionals in de publieke sector',
        },
    };

    return (
        <>
            <SEO
                title="Lecture - Over Ambtelijk Vakmanschap"
                description="Ontdek de essentie van ambtelijk vakmanschap en ontwikkel jezelf als professional in de publieke sector. Een intensieve training gericht op zelfkennis en persoonlijke groei."
                keywords="ambtelijk vakmanschap, publieke sector training, overheidstraining, professional development, zelfkennis, persoonlijke groei"
                structuredData={courseSchema}
            />
            <div className="pt-20">
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-gold-700 to-gold-950 text-white">
                    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
                            <div>
                                <h1 className="mb-8 text-5xl font-bold tracking-tight lg:text-6xl">
                                    Lecture
                                </h1>
                                <p className="mb-8 text-xl font-light text-slate-100">
                                    Programma Doorgroeien in Leiderschap
                                    (incompany)
                                </p>
                                <p className="mb-10 text-lg font-light leading-relaxed">
                                    Een intensief ontwikkelprogramma gericht op
                                    persoonlijke groei en
                                    leiderschapsontwikkeling. Ontdek wie je
                                    bent, wat je drijft en hoe je je
                                    leiderschapskracht optimaal kunt inzetten.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="flex items-center rounded-full bg-slate-700 px-6 py-3">
                                        <User className="mr-2 h-5 w-5" />
                                        <span className="font-medium">
                                            Persoonlijk
                                        </span>
                                    </div>
                                    <div className="flex items-center rounded-full bg-white px-6 py-3 text-slate-800">
                                        <Target className="mr-2 h-5 w-5" />
                                        <span className="font-medium">
                                            Incompany
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <img
                                    src="groeps02.jpeg"
                                    alt="Leadership Development"
                                    className="rounded-none shadow-2xl"
                                />
                                <div className="absolute inset-0 rounded-none bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Ken Jezelf Section */}
                <section className="bg-white py-20">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
                            <div>
                                <img
                                    src="Politiek_ambtelijkSamenspel.jpeg"
                                    alt="Zelfkennis en reflectie"
                                    className="rounded-none shadow-lg"
                                />
                            </div>
                            <div>
                                <h2 className="mb-8 text-4xl font-semibold text-gold-800">
                                    Ken Jezelf
                                </h2>
                                <p className="mb-8 text-lg font-light leading-relaxed text-gray-600">
                                    Het fundament van goed leiderschap begint
                                    bij zelfkennis. In dit programma duiken we
                                    diep in wie je bent als persoon en als
                                    leider, wat je drijft en hoe je je
                                    natuurlijke talenten optimaal kunt benutten.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <CheckCircle className="mt-1 h-6 w-6 text-gold-500" />
                                        <div>
                                            <h3 className="text-lg font-semibold text-gold-800">
                                                Uitgebreide Zelfscan
                                            </h3>
                                            <p className="font-light text-gray-700">
                                                Wetenschappelijk onderbouwde
                                                assessment tools voor diepgaand
                                                zelfbegrip
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <CheckCircle className="mt-1 h-6 w-6 text-gold-500" />
                                        <div>
                                            <h3 className="text-lg font-semibold text-gold-800">
                                                Persoonlijkheidsanalyse
                                            </h3>
                                            <p className="font-light text-gray-600">
                                                Ontdek je leiderschapsstijl,
                                                voorkeuren en blinde vlekken
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <CheckCircle className="mt-1 h-6 w-6 text-gold-500" />
                                        <div>
                                            <h3 className="text-lg font-semibold text-gold-800">
                                                Waardenexploratie
                                            </h3>
                                            <p className="font-light text-gray-600">
                                                Identificeer je kernwaarden en
                                                hoe deze je leiderschapsgedrag
                                                beïnvloeden
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <CheckCircle className="mt-1 h-6 w-6 text-gold-500" />
                                        <div>
                                            <h3 className="text-lg font-semibold text-gold-800">
                                                360-graden feedback
                                            </h3>
                                            <p className="font-light text-gray-600">
                                                Inzichten van collega's,
                                                medewerkers en stakeholders
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Program Structure */}
                <section className="bg-gray-50 py-20">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mb-16 text-center">
                            <h2 className="mb-6 text-4xl font-semibold text-gold-800">
                                Programma-opbouw
                            </h2>
                            <p className="mx-auto max-w-4xl text-xl font-light text-gray-600">
                                Een zorgvuldig samengesteld traject van zes
                                maanden, waarbij theorie en praktijk hand in
                                hand gaan voor maximale impact.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                            <div className="rounded-none border border-gray-200 bg-white p-8 shadow-sm">
                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
                                    <User className="h-8 w-8 text-slate-600" />
                                </div>
                                <h3 className="mb-4 text-xl font-semibold text-gold-800">
                                    Fase 1: Zelfinzicht
                                </h3>
                                <p className="mb-6 font-light leading-relaxed text-gray-600">
                                    Uitgebreide assessment,
                                    persoonlijkheidsanalyse en 360-graden
                                    feedback. Fundamentele zelfkennis opbouwen.
                                </p>
                                <ul className="space-y-2 text-sm font-light text-gray-500">
                                    <li>• Intake gesprek</li>
                                    <li>• Zelfscan uitvoering</li>
                                    <li>• Resultaten bespreking</li>
                                    <li>• Persoonlijk ontwikkelplan</li>
                                </ul>
                            </div>

                            <div className="rounded-none border border-gray-200 bg-white p-8 shadow-sm">
                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
                                    <Target className="h-8 w-8 text-slate-600" />
                                </div>
                                <h3 className="mb-4 text-xl font-semibold text-gold-800">
                                    Fase 2: Ontwikkeling
                                </h3>
                                <p className="mb-6 font-light leading-relaxed text-gray-600">
                                    Intensieve workshops, individuele coaching
                                    sessies en praktijkopdrachten voor concrete
                                    leiderschapsontwikkeling.
                                </p>
                                <ul className="space-y-2 text-sm font-light text-gray-500">
                                    <li>• Leiderschapsworkshops</li>
                                    <li>• Individuele coaching</li>
                                    <li>• Praktijkopdrachten</li>
                                    <li>• Peer learning sessies</li>
                                </ul>
                            </div>

                            <div className="rounded-none border border-gray-200 bg-white p-8 shadow-sm">
                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
                                    <BarChart3 className="h-8 w-8 text-slate-600" />
                                </div>
                                <h3 className="mb-4 text-xl font-semibold text-gold-800">
                                    Fase 3: Implementatie
                                </h3>
                                <p className="mb-6 font-light leading-relaxed text-gray-600">
                                    Toepassing in de dagelijkse praktijk,
                                    follow-up sessies en borging van het
                                    geleerde voor duurzame verandering.
                                </p>
                                <ul className="space-y-2 text-sm font-light text-gray-500">
                                    <li>• Actieplan uitvoering</li>
                                    <li>• Progress monitoring</li>
                                    <li>• Follow-up coaching</li>
                                    <li>• Evaluatie & certificering</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="bg-white py-20">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
                            <div>
                                <h2 className="mb-8 text-4xl font-semibold text-gold-800">
                                    Wat levert het op?
                                </h2>
                                <p className="mb-10 text-lg font-light leading-relaxed text-gray-600">
                                    Het Lecture programma zorgt voor meetbare
                                    verbetering in leiderschapseffectiviteit,
                                    teamresultaten en persoonlijke voldoening in
                                    je rol als leider.
                                </p>

                                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="mb-3 text-lg font-semibold text-gold-800">
                                                Persoonlijk
                                            </h3>
                                            <ul className="space-y-2 font-light text-gray-600">
                                                <li>
                                                    • Verhoogd zelfvertrouwen
                                                </li>
                                                <li>• Duidelijkheid in rol</li>
                                                <li>
                                                    • Betere work-life balans
                                                </li>
                                                <li>
                                                    • Authentiek leiderschap
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="mb-3 text-lg font-semibold text-gold-800">
                                                Professioneel
                                            </h3>
                                            <ul className="space-y-2 font-light text-gray-600">
                                                <li>
                                                    • Effectievere communicatie
                                                </li>
                                                <li>• Betere besluitvorming</li>
                                                <li>
                                                    • Verhoogde teamperformance
                                                </li>
                                                <li>
                                                    • Meer invloed en impact
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="rounded-none border border-gold-200 bg-gradient-to-br from-slate-50 to-white p-10">
                                    <h3 className="mb-8 text-2xl font-semibold text-gold-800">
                                        Programma Details
                                    </h3>
                                    <div className="space-y-6">
                                        <div className="flex items-center justify-between">
                                            <span className="font-light text-gray-600">
                                                Duur:
                                            </span>
                                            <span className="font-semibold text-gold-800">
                                                6 maanden
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="font-light text-gray-600">
                                                Format:
                                            </span>
                                            <span className="font-semibold text-gold-800">
                                                Incompany
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="font-light text-gray-600">
                                                Groepsgrootte:
                                            </span>
                                            <span className="font-semibold text-gold-800">
                                                8-12 deelnemers
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="font-light text-gray-600">
                                                Contact uren:
                                            </span>
                                            <span className="font-semibold text-gold-800">
                                                40 uur
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="font-light text-gray-600">
                                                Individuele coaching:
                                            </span>
                                            <span className="font-semibold text-gold-800">
                                                4 sessies
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mt-10">
                                        <a
                                            href="/contact"
                                            className="flex w-full items-center justify-center rounded-none bg-slate-600 px-8 py-4 font-semibold text-white transition-colors duration-200 hover:bg-slate-700"
                                        >
                                            <span>Vraag offerte aan</span>
                                            <ArrowRight className="ml-3 h-5 w-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Lecture;
