import { SEO } from '@/components/SEO';
import {
    BookOpen,
    Users,
    Target,
    Clock,
    ArrowRight,
    Quote,
} from 'lucide-react';

const Lecture = () => {
    const lectureSchema = {
        '@context': 'https://schema.org',
        '@type': 'EducationalEvent',
        name: 'Lecture - Over Ambtelijk Vakmanschap',
        description:
            'Een inspirerende lecture over ambtelijk vakmanschap, waarin we stilstaan bij wat er echt toe doet in de publieke sector en hoe we als ambtenaren het verschil kunnen maken.',
        organizer: {
            '@type': 'Organization',
            name: 'Tharros Training & Coaching',
        },
        performer: {
            '@type': 'Person',
            name: 'Ferdi Licher',
        },
        eventMode: 'In-person',
        audience: {
            '@type': 'Audience',
            audienceType:
                'Professionals in de publieke sector, ambtenaren, leidinggevenden',
        },
        eventStatus: 'EventScheduled',
        keywords:
            'ambtelijk vakmanschap, publieke sector, overheid, waarden, waarheid, leefwereld',
    };

    return (
        <>
            <SEO
                title="Lecture - Over Ambtelijk Vakmanschap | Reflectie op Publieke Waarden"
                description="Een inspirerende lecture over ambtelijk vakmanschap door Ferdi Licher. Ontdek wat er echt toe doet in de publieke sector, reflecteer op waarden en waarheid, en leer hoe je als ambtenaar het verschil kunt maken."
                keywords="lecture ambtelijk vakmanschap, publieke sector lecture, overheid waarden, ambtelijke integriteit, politiek ongeduld, thorbecke huis, publieke onvrede, processturing, ferdi licher lecture"
                structuredData={lectureSchema}
            />

            {/* Hero Section */}
            <section className="bg-gradient-to-tl from-gold-800 via-black to-gold-950 text-white">
                <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
                        <div className="text-white">
                            <div className="mb-6 flex items-center">
                                <BookOpen className="mr-3 h-8 w-8 text-slate-600" />
                                <span className="text-2xl font-medium text-slate-600">
                                    Inspirerende Lecture
                                </span>
                            </div>
                            <h1 className="mb-8 text-5xl font-bold tracking-tight lg:text-6xl">
                                Over ambtelijk vakmanschap
                            </h1>
                            <p className="mb-8 text-xl font-light leading-relaxed">
                                Een reflectie op wat er echt toe doet in de
                                publieke sector.
                            </p>
                            <div className="flex flex-col justify-start gap-2 text-lg text-slate-600">
                                <div className="mr-8 flex items-center">
                                    <Users className="mr-2 h-4 w-4" />
                                    <span>
                                        Voor ambtenaren & leidinggevenden
                                    </span>
                                </div>
                                <div className="mr-6 flex items-center">
                                    <Clock className="mr-2 h-4 w-4" />
                                    <span>60-90 minuten</span>
                                </div>
                                <div className="flex items-center">
                                    <Target className="mr-2 h-4 w-4" />
                                    <span>Waarden & waarheid</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="overflow-hidden rounded-lg shadow-2xl">
                                <img
                                    src="images/lecture_beeld.jpeg"
                                    alt="Siracusa –metafoor voor groei en stabiliteit"
                                    className="h-96 w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="bg-white py-20">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-slate-600">
                            Waarom deze lecture?
                        </h2>
                        <div className="mx-auto max-w-3xl">
                            <div className="rounded-lg bg-gradient-to-r from-gold-50 to-slate-50 p-8 text-lg leading-relaxed text-gray-700">
                                <Quote className="mx-auto mb-6 h-12 w-12 text-slate-600" />
                                <p className="mb-6">
                                    De waan van de dag bepaalt te vaak de
                                    agenda. Goede bedoelingen lopen te vaak vast
                                    in de uitvoering. Het gesprek over waarden
                                    en waarheid, over wat er echt toe doet en
                                    wat er echt aan de hand is in de leefwereld
                                    van mensen krijgt te weinig ruimte.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Context Section */}
            <section className="bg-slate-50 py-20">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
                        <div>
                            <h3 className="mb-8 text-3xl font-semibold text-slate-800">
                                De huidige context
                            </h3>
                            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                                <p>
                                    We draven en dolen steeds meer. Het huis van
                                    Thorbecke kraakt en piept. Er is toenemend
                                    politiek ongeduld, de druk op de overheid en
                                    individuele ambtenaren neemt voelbaar toe.
                                </p>
                                <p>
                                    Ambtenaren voelen zich onmachtig het tij van
                                    publieke onvrede te keren. Die onmacht heeft
                                    te maken met moeilijk te herstellen fouten
                                    uit het verleden, vastgelopen en
                                    doorgeschoten wetgeving, het ontbreken van
                                    stabiele politieke meerderheden en een
                                    consistente koers.
                                </p>
                                <p className="font-medium text-slate-800">
                                    Maar ook met hoe we ons werk doen.
                                    Processturing domineert te vaak de
                                    samenwerking.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="overflow-hidden rounded-lg shadow-lg">
                                <img
                                    src="images/groeps01.jpeg"
                                    alt="Kring met musici - samenwerking en harmonie"
                                    className="h-64 w-full object-cover"
                                />
                            </div>

                            <div className="overflow-hidden rounded-lg shadow-lg">
                                <img
                                    src="images/stabiliteit-en-diepgang.jpeg"
                                    alt="Diepblauwe structuur - stabiliteit en diepgang"
                                    className="h-64 w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Themes Section */}
            <section className="bg-white py-20">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <h3 className="mb-12 text-center text-3xl font-semibold text-slate-800">
                        Kernthema's van de lecture
                    </h3>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold-100">
                                <Target className="h-6 w-6 text-gold-600" />
                            </div>
                            <h4 className="mb-3 text-xl font-semibold text-slate-800">
                                Waarden & Waarheid
                            </h4>
                            <p className="text-gray-600">
                                Wat doet er echt toe in de publieke sector? Hoe
                                vinden we ruimte voor betekenisvolle gesprekken
                                over waarden?
                            </p>
                        </div>

                        <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold-100">
                                <Users className="h-6 w-6 text-gold-600" />
                            </div>
                            <h4 className="mb-3 text-xl font-semibold text-slate-800">
                                Leefwereld van Mensen
                            </h4>
                            <p className="text-gray-600">
                                Hoe blijven we verbonden met wat er echt speelt
                                in de samenleving? Hoe overbruggen we de kloof?
                            </p>
                        </div>

                        <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold-100">
                                <BookOpen className="h-6 w-6 text-gold-600" />
                            </div>
                            <h4 className="mb-3 text-xl font-semibold text-slate-800">
                                Ambtelijk Vakmanschap
                            </h4>
                            <p className="text-gray-600">
                                Hoe ontwikkelen we ons vakmanschap verder? Wat
                                maakt het verschil in hoe we ons werk doen?
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Full Lecture Text Section */}
            <section className="mt-12 bg-gradient-to-br from-slate-100 to-gold-50">
                <div className="border-1 mx-auto max-w-5xl border-slate-400/40 px-4 py-6 shadow-md sm:px-6 lg:px-8">
                    <div className="mb-4">
                        <h4 className="tracking-120 mb-6 rounded-lg bg-gold-800 p-3 text-xl font-light text-white hover:tracking-wide">
                            Comenianen omarmen{' '}
                            <span className="text-sm font-bold text-slate-400">
                                LECTURE SPIRITUELLE
                            </span>
                        </h4>
                        <p className="mb-2 text-lg text-gray-600">
                            Een diepgaande reflectie op ambtelijk vakmanschap en
                            wat er echt toe doet
                        </p>
                        <h3 className="mb-1 text-3xl font-semibold text-slate-800">
                            Haagse Bluf: Over ambtelijk leiderschap
                        </h3>
                        <p className="mb-12 text-lg text-gray-600">
                            De waan van de dag
                        </p>
                    </div>

                    <div className="prose prose-lg space-y-6 text-lg leading-relaxed text-gray-700">
                        <p className="text-md my-6 leading-loose text-slate-800">
                            We draven en dolen steeds meer. Het huis van
                            Thorbecke kraakt en piept. Er is toenemend politiek
                            ongeduld, de druk op de overheid en individuele
                            ambtenaren neemt voelbaar toe. En ambtenaren voelen
                            zich onmachtig het tij van publieke onvrede te
                            keren. Die onmacht heeft te maken met moeilijk te
                            herstellen fouten uit het verleden, vastgelopen en
                            doorgeschoten wetgeving, het ontbreken van stabiele
                            politieke meerderheden en een consistente koers,
                            maar ook met hoe we ons werk doen. De waan van de
                            dag bepaalt te vaak de agenda. Processturing
                            domineert te veel de samenwerking. Goede bedoelingen
                            lopen te vaak vast in de uitvoering. Het gesprek
                            over waarden en waarheid, over wat er echt toe doet
                            en wat er echt aan de hand is in de leefwereld van
                            mensen krijgt te weinig ruimte.
                        </p>
                        <div className="prose prose-lg bg-white">
                            <p className="mt-8">
                                <strong>
                                    De zoektocht naar leiderschap in de publieke
                                    sector
                                </strong>
                            </p>
                            <p className="mt-3">
                                Wellicht een sombere constatering, maar ook een
                                aanmoediging tot beter en anders. De Nederlandse
                                School voor Openbaar Bestuur heeft boven op de
                                fundamenten van de Weberiaanse
                                overheidsbureaucratie een hele bibliotheek
                                opgebouwd van nieuwe handelingsperspectieven. De
                                algemene bestuursdienst heeft een kompas
                                ontwikkeld met zoekrichtingen voor
                                leidinggevenden in deze nieuwe tijd.
                            </p>
                            <p className="mt-3">
                                Geen blauwdrukken maar wel handvatten voor
                                grenzeloos samenwerken en persoonlijk
                                leiderschap. De oproep om moreel-ethische
                                dilemma’s niet uit de weg te gaan. Zoals de
                                vraag of ambtenaren mogen deelnemen aan de
                                klimaatprotesten van Extinction Rebellion en of
                                zij zich publiekelijk mogen uitspreken tegen de
                                opstelling van de Nederlandse regering in het
                                conflict in het Midden-Oosten. Actueel omdat de
                                politieke koers schuurt met de liberale en
                                progressieve waarden van veel ambtenaren.{' '}
                            </p>
                            <p className="mt-3">
                                Wellicht een sombere constatering, maar ook een
                                aanmoediging tot beter en anders. De Nederlandse
                                School voor Openbaar Bestuur heeft boven op de
                                fundamenten van de Weberiaanse
                                overheidsbureaucratie een hele bibliotheek
                                opgebouwd van nieuwe handelingsperspectieven. De
                                algemene bestuursdienst heeft een kompas
                                ontwikkeld met zoekrichtingen voor
                                leidinggevenden in deze nieuwe tijd.
                            </p>
                        </div>

                        <div className="prose prose-lg bg-white">
                            <p className="mt-8">
                                <strong>
                                    De verzuchting om tijd voor reflectie
                                </strong>
                            </p>
                            <p className="mt-3">
                                Hoewel deze gesprekken plaatsvinden hoor ik
                                vooral van jonge ambtenaren de verzuchting dat
                                er te weinig tijd is voor reflectie. Dat zij van
                                het moreel leiderschap in de top van de
                                departementen nog weinig terugzien. Die
                                constatering is mede aanleiding geweest voor het
                                opstarten van de Comenius leergang Emerging
                                leaders in de publieke sector. Een vrijplaats
                                waarin jonge talentvolle ambtenaren de kans
                                krijgen te werken aan hun eigen moreel kompas en
                                persoonlijk leiderschapsverhaal en zich te
                                bekwamen in het voeren van het goede ambtelijke
                                gesprek.{' '}
                            </p>
                            <p className="mt-3">
                                De les die we in deze leergang aan jonge
                                ambtenaren proberen mee te geven is dat
                                reflectie de kern van het ambtelijke werk is.
                                Dat we in al die overleggen veel meer tijd
                                moeten nemen voor de wezenlijke vragen. Waarom
                                doen we dit zo? Kloppen de aannames en de feiten
                                wel? Gaat dit echt werken? Dat vraagt dat we
                                afscheid moeten nemen van plichtmatige
                                vergaderagenda’s en procesantwoorden, en veel
                                meer inhoudelijk in de diepte met elkaar aan het
                                werk gaan. Steeds opnieuw. Als een broodnodige
                                dagelijkse gewoonte.{' '}
                            </p>
                        </div>

                        <div className="prose prose-lg bg-white">
                            <p className="mt-8">
                                <strong>Wat is ambtelijke kwaliteit?</strong>
                            </p>
                            <p className="mt-3">
                                Hoe het goede ambtelijke gesprek te voeren is
                                een vraag naar kwaliteit. En dat is iets dat je
                                kunt herkennen, leren en overdragen, zoals
                                bijvoorbeeld in de muziek. Het begint vaak bij
                                de passie die ergens in je leven aan je is
                                overgedragen. Vervolgens de langdurige studie,
                                het ontwikkelen van een eigen stijl en visie.
                                Het realiseren van echte verbinding en
                                samenspel, waardoor het publiek een ervaring
                                krijgt die hen raakt, ontroert en overtuigt. Ze
                                herkennen kwaliteit.
                            </p>
                            <p className="mt-3">
                                En juist dat is wat we ook in het ambtelijk
                                vakmanschap en goede ambtelijke gesprek moeten
                                nastreven. We moeten meer luisteren, harder
                                studeren en beter samenspelen om het vertrouwen
                                van burgers in de overheid terug te winnen en te
                                vergroten. Verantwoordelijkheden niet afschuiven
                                en niet vluchten in procesafspraken. De burgers
                                recht in de ogen durven kunnen kijken met ons
                                beleid.
                            </p>
                        </div>

                        <div className="prose prose-lg bg-white">
                            <p className="mt-8">
                                <strong>
                                    Het politieke primaat en het leiderschap in
                                    de publieke sector
                                </strong>
                            </p>
                            <p className="mt-3">
                                Gaan we met dat goede ambtelijke gesprek de
                                problemen waar we nu mee worstelen oplossen?
                                Natuurlijk niet direct. Maar we kunnen wel het
                                gevoel van onmacht wegnemen. En de moed
                                ontwikkelen burgers en ministers tegen te
                                spreken en alternatieven bespreekbaar te maken.
                            </p>
                            <p className="mt-3">persoonlijk</p>
                        </div>

                        <div className="prose prose-lg bg-white">
                            <p className="mt-8">
                                <strong>Deerzuchting</strong>
                            </p>
                            <p className="mt-3">persoonlijk</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Image */}
            <div className="mt-24 max-h-[500px]">
                <img
                    src="images/Lecture_bkg.jpeg"
                    alt="Haagse Bluf: Over ambtelijk leiderschap – Lecture"
                    className="h-full w-full object-cover"
                />
            </div>
        </>
    );
};

export default Lecture;
