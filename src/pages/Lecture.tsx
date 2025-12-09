import PDFViewer from '@/components/PDFViewer';
import { SEO } from '@/components/SEO';
import { BookOpen, Users, Target } from 'lucide-react';
import { useState, useEffect } from 'react'; // Add these for error state

const Lecture = () => {
    // ... (your existing lectureSchema and return start unchanged)

    // Add state for PDF load errors/fallback
    const [pdfError, setPdfError] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Detect mobile/small screen
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Optional: If PDFViewer supports error prop, pass a handler like this
    // const handlePdfError = () => setPdfError(true);

    return (
        <>
            {/* ... (your existing SEO, Hero, Introduction, Key Themes sections unchanged) */}

            {/* Full Lecture Text Section */}
            <section className="bg-gradient-to-br from-slate-100 to-gold-50 pt-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-4xl font-bold text-slate-600">Volledige Lecture</h2>
                        <p className="text-xl text-gray-600">Lees de complete tekst van de lecture over ambtelijk vakmanschap</p>{' '}
                        {/* Fixed typo: text-gary-600 → text-gray-600 */}
                    </div>
                    <p className="mb-3 text-right text-sm font-semibold uppercase text-gray-600/80">Publicatie maart 2025</p>

                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
                        {/* Desktop/Large Screen: PDFViewer */}
                        {!isMobile && !pdfError && (
                            <div className="mb-8 hidden md:block">
                                {' '}
                                {/* Tailwind: hidden on small, block on md+ */}
                                <PDFViewer
                                // Optional: Add error handler if your component supports it
                                // onDocumentLoadError={handlePdfError}
                                />
                            </div>
                        )}

                        {/* Fallback for Mobile/Small Screen or Errors: Message + Iframe + Download */}
                        {(isMobile || pdfError) && (
                            <div className="space-y-6 md:hidden">
                                {' '}
                                {/* Show only on small screens; hide on md+ */}
                                <div className="text-center">
                                    <p className="mb-4 text-lg font-medium text-gray-700">
                                        Voor de beste ervaring op mobiel: download de PDF of bekijk in een aparte viewer.
                                    </p>
                                    {/* Optional Iframe: Attempts inline view; iOS may prompt download instead */}
                                    <iframe
                                        src="/files/ambtelijk-leiderschap_lecture.pdf"
                                        className="mx-auto h-96 w-full rounded-lg border"
                                        title="Lecture PDF"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Error Overlay on Desktop (if PDF fails) */}
                        {!isMobile && pdfError && (
                            <div className="text-center">
                                <p className="mb-4 text-lg text-red-600">PDF kon niet laden. Download voor offline lezen.</p>
                            </div>
                        )}

                        {/* Always-visible Download Button (Responsive Styling) */}
                        <div className="mx-4 my-12 text-center">
                            <a
                                href="/files/ambtelijk-leiderschap_lecture.pdf"
                                download
                                className="inline-flex items-center rounded-xl bg-slate-600 px-12 py-2 font-semibold text-white shadow-lg transition-all duration-200 hover:bg-gold-600 hover:shadow-xl md:px-16 md:py-3 md:text-lg" // Made larger on desktop
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
