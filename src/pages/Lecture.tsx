import PDFViewer from '@/components/PDFViewer';
import { SEO } from '@/components/SEO';
import { BookOpen, Users, Target } from 'lucide-react';
import { useState } from 'react';

const Lecture = () => {
    const lectureSchema = {
        '@context': 'https://schema.org',
        '@type': 'EducationalEvent',
        name: 'Lecture - Over Ambtelijk Vakmanschap',
        description:
            'Een inspirerende lecture over ambtelijk vakmanschap, waarin we stilstaan bij wat er echt toe doet in de publieke sector en hoe we als ambtenaren het verschil kunnen maken.',
        organizer: {
            '@type': 'Organization',
            name: 'Tharros, Training en Coaching',
        },
        performer: {
            '@type': 'Person',
            name: 'Ferdi Licher',
        },
        eventMode: 'In-person',
        audience: {
            '@type': 'Audience',
            audienceType: 'Professionals in de publieke sector, ambtenaren, leidinggevenden',
        },
        eventStatus: 'EventScheduled',
        keywords: 'ambtelijk vakmanschap, publieke sector, overheid, waarden, waarheid, leefwereld',
    };

    // State for PDF loading and errors (mobile detection handled by CSS media queries)
    const [pdfError, setPdfError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // PDF success handler - called when PDF loads successfully
    const handlePdfLoadSuccess = () => {
        setIsLoading(false);
        setPdfError(false);
    };

    // PDF error handler - called when PDF fails to load
    const handlePdfLoadError = (error: Error) => {
        console.error('PDF load error:', error);
        setPdfError(true);
        setIsLoading(false);
    };

    return (
        <>
            <SEO
                title="Lecture - Over Ambtelijk Vakmanschap | Reflectie op Publieke Waarden"
                description="Een inspirerende lecture over ambtelijk vakmanschap door Ferdi Licher. Ontdek wat er echt toe doet in de publieke sector, reflecteer op waarden en waarheid, en leer hoe je als ambtenaar het verschil kunt maken. Download de volledige PDF."
                keywords="lecture ambtelijk vakmanschap, publieke sector lecture, overheid waarden, ambtelijke integriteit, politiek ongeduld, thorbecke huis, publieke onvrede, processturing, ferdi licher lecture, haagse bluf, leefwereld mensen, weberiaanse bureaucratie, moreel ethische dilemma's"
                structuredData={lectureSchema}
            />

            {/* Hero Section */}
            <section className="bg-gradient-to-tl from-gold-800 via-black to-gold-950 text-white">
                <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
                        <div className="text-white">
                            <div className="mb-6 flex items-center">
                                <BookOpen className="mr-3 h-8 w-8 text-slate-600" />
                                <span className="text-2xl font-medium text-slate-600">Lecture</span>
                            </div>
                            <h1 className="mb-8 text-5xl font-bold tracking-tight lg:text-6xl">Over ambtelijk vakmanschap</h1>
                            <p className="mb-8 text-xl font-light leading-relaxed">Een reflectie op wat er echt toe doet in de publieke sector.</p>
                        </div>

                        <div className="relative">
                            <div className="overflow-hidden rounded-lg shadow-2xl">
                                <img
                                    src="images/lecture_beeld.jpeg"
                                    alt="Siracusa – metafoor voor groei en stabiliteit"
                                    className="h-96 w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="bg-white py-24">
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-slate-600">Waarom deze lecture?</h2>
                        <div className="space-y-3 pt-8 text-lg leading-relaxed text-gray-700">
                            <p>
                                We draven en dolen steeds meer. Het huis van Thorbecke kraakt en piept. Er is toenemend politiek ongeduld, de druk op
                                de overheid en individuele ambtenaren neemt voelbaar toe.
                            </p>
                            <p>
                                De waan van de dag bepaalt te vaak de agenda. Goede bedoelingen lopen te vaak vast in de uitvoering. Het gesprek over
                                waarden en waarheid, over wat er echt toe doet en wat er echt aan de hand is in de leefwereld van mensen krijgt te
                                weinig ruimte.
                            </p>
                            <p>
                                Ambtenaren voelen zich onmachtig het tij van publieke onvrede te keren. Die onmacht heeft te maken met moeilijk te
                                herstellen fouten uit het verleden, vastgelopen en doorgeschoten wetgeving, het ontbreken van stabiele politieke
                                meerderheden en een consistente koers.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Themes Section */}
            <section className="bg-white py-20">
                <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
                    <h2 className="text-center text-4xl font-bold text-slate-600">Kernthema's van de lecture</h2>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold-100">
                                <Target className="h-6 w-6 text-gold-600" />
                            </div>
                            <h4 className="mb-3 text-xl font-semibold text-slate-600">Waarden & Waarheid</h4>
                            <p className="text-gray-600">
                                Wat doet er echt toe in de publieke sector? Hoe vinden we ruimte voor betekenisvolle gesprekken over waarden?
                            </p>
                        </div>

                        <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold-100">
                                <Users className="h-6 w-6 text-gold-600" />
                            </div>
                            <h4 className="mb-3 text-xl font-semibold text-slate-600">Leefwereld van Mensen</h4>
                            <p className="text-gray-600">
                                Hoe blijven we verbonden met wat er echt speelt in de samenleving? Hoe overbruggen we de kloof?
                            </p>
                        </div>

                        <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold-100">
                                <BookOpen className="h-6 w-6 text-gold-600" />
                            </div>
                            <h4 className="mb-3 text-xl font-semibold text-slate-600">Ambtelijk Vakmanschap</h4>
                            <p className="text-gray-600">
                                Hoe ontwikkelen we ons vakmanschap verder? Wat maakt het verschil in hoe we ons werk doen?
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Full Lecture Text Section */}
            <section className="bg-gradient-to-br from-slate-100 to-gold-50 pt-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-4xl font-bold text-slate-600">Volledige Lecture</h2>
                        <p className="text-xl text-gray-600">Lees de complete tekst van de lecture over ambtelijk vakmanschap</p>
                    </div>
                    <p className="mb-3 text-right text-sm font-semibold uppercase text-gray-600/80">Publicatie maart 2025</p>

                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
                        {/* Desktop: PDFViewer with loading/error handling - visibility controlled by CSS */}
                        <div className="mb-8 hidden md:block">
                            {!pdfError && isLoading && (
                                <div className="flex h-64 items-center justify-center p-4">
                                    <div className="mr-2 h-8 w-8 animate-spin rounded-full border-b-2 border-slate-600"></div>
                                    <span className="text-gray-600">PDF laden...</span>
                                </div>
                            )}
                            {!pdfError && <PDFViewer onLoadSuccess={handlePdfLoadSuccess} onLoadError={handlePdfLoadError} />}
                            {/* Desktop Error Overlay */}
                            {pdfError && (
                                <div className="mb-8 rounded-lg border border-red-200 bg-red-50 p-8 text-center">
                                    <p className="mb-2 text-lg font-medium text-red-600">PDF kon niet laden.</p>
                                    <p className="text-sm text-red-500">Download voor offline lezen of refresh de pagina.</p>
                                </div>
                            )}
                        </div>

                        {/* Mobile Fallback: Always show on small screens - visibility controlled by CSS */}
                        <div className="space-y-6 md:hidden">
                            <div className="rounded-lg border border-blue-200 bg-blue-50 p-6 text-center">
                                <p className="mb-4 text-lg font-medium text-gray-700">
                                    Voor de beste mobiele ervaring: download de PDF of bekijk inline.
                                </p>
                                <iframe
                                    src="/files/ambtelijk-leiderschap_lecture.pdf#toolbar=0&view=fitH"
                                    className="mx-auto h-96 w-full rounded-lg border shadow-inner"
                                    title="Lecture PDF inline viewer"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* Always-Visible Download Button */}
                        <div className="mx-4 my-12 text-center">
                            <a
                                href="/files/ambtelijk-leiderschap_lecture.pdf"
                                download
                                className="inline-flex items-center rounded-xl bg-slate-600 px-12 py-2 font-semibold text-white shadow-lg transition-all duration-200 hover:bg-gold-600 hover:shadow-xl md:px-16 md:py-3 md:text-lg"
                            >
                                <BookOpen className="mr-3 h-5 w-5" />
                                Download PDF
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Lecture;
