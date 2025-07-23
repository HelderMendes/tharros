import { useEffect, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Configure the PDF.js worker with proper version matching
// This prevents console errors about worker version mismatch
try {
    pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).toString();
} catch (error) {
    // Fallback for environments where URL construction fails
    pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
    console.warn('PDF worker fallback loaded:', error);
}

// Note: Console warning suppression removed for better error visibility in development

function PDFViewer() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(600); // Default width
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [componentError, setComponentError] = useState<string | null>(null);

    // Detect iOS devices with comprehensive detection for all browsers
    const userAgent = navigator.userAgent;
    const isIOS =
        /iPad|iPhone|iPod/.test(userAgent) ||
        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) ||
        /iPhone|iPad|iPod|iOS/i.test(userAgent);

    // More comprehensive iOS Chrome detection
    const isIOSChrome = isIOS && (/CriOS/.test(userAgent) || /Chrome/.test(userAgent) || /Google/.test(userAgent));

    const isIOSSafari = isIOS && !isIOSChrome;

    // Use fallback for ALL iOS devices since react-pdf has issues on iOS
    const isIOSMobile = isIOS;

    // Error boundary effect
    useEffect(() => {
        const handleError = (error: ErrorEvent) => {
            if (error.message.includes('pdf') || error.message.includes('worker')) {
                console.error('PDF-related error caught:', error);
                setComponentError(error.message);
                setHasError(true);
            }
        };

        window.addEventListener('error', handleError);
        return () => window.removeEventListener('error', handleError);
    }, []);

    // Debug logging with more detailed information
    useEffect(() => {
        console.log('=== PDFViewer Debug Info ===');
        console.log('User Agent:', navigator.userAgent);
        console.log('Platform:', navigator.platform);
        console.log('Max Touch Points:', navigator.maxTouchPoints);
        console.log('iOS Detection Results:');
        console.log('  - isIOS:', isIOS);
        console.log('  - isIOSSafari:', isIOSSafari);
        console.log('  - isIOSChrome:', isIOSChrome);
        console.log('  - isIOSMobile (will show fallback):', isIOSMobile);
        console.log('Worker src:', pdfjs.GlobalWorkerOptions.workerSrc);
        if (componentError) {
            console.error('Component Error:', componentError);
        }
        console.log('=== End Debug Info ===');
    }, [isIOS, isIOSSafari, isIOSChrome, isIOSMobile, componentError]);

    // Update width responsively with simplified logic
    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const updateWidth = () => {
            if (containerRef.current) {
                const containerWidth = containerRef.current.offsetWidth;
                const newWidth = Math.max(containerWidth * 0.95, 300);
                setWidth(newWidth);
            }
        };

        // Debounced update function
        const debouncedUpdateWidth = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(updateWidth, 150);
        };

        // Initial update
        const initialTimeoutId = setTimeout(updateWidth, 10);

        // Use ResizeObserver with fallback
        let resizeObserver: ResizeObserver | null = null;

        if (typeof window.ResizeObserver !== 'undefined') {
            try {
                resizeObserver = new window.ResizeObserver(debouncedUpdateWidth);
                if (containerRef.current) {
                    resizeObserver.observe(containerRef.current);
                }
            } catch (error) {
                window.addEventListener('resize', debouncedUpdateWidth);
                window.addEventListener('orientationchange', debouncedUpdateWidth);
            }
        } else {
            window.addEventListener('resize', debouncedUpdateWidth);
            window.addEventListener('orientationchange', debouncedUpdateWidth);
        }

        // Cleanup
        return () => {
            clearTimeout(initialTimeoutId);
            clearTimeout(timeoutId);
            if (resizeObserver) {
                resizeObserver.disconnect();
            } else {
                window.removeEventListener('resize', debouncedUpdateWidth);
                window.removeEventListener('orientationchange', debouncedUpdateWidth);
            }
        };
    }, []);
    return (
        <div ref={containerRef} className="mx-auto flex w-full max-w-5xl justify-center">
            {/* Special handling for ALL iOS devices - show fallback for better compatibility */}
            {isIOSMobile ? (
                <div className="w-full">
                    {/* <div className="mb-4 rounded-md bg-blue-50 p-4 text-center">
                        <p className="text-sm text-blue-700">Voor de beste ervaring op iOS, open de PDF in een nieuwe tab.</p>
                    </div> */}
                    <div className="bg-pdf-bkg flex aspect-[170/270] w-full flex-col items-center justify-center space-y-4 rounded-lg border-2 border-dashed border-gray-300 bg-contain bg-no-repeat">
                        <div className="bg-white/50 px-8 py-3 text-center font-semibold text-gray-600">
                            PDF Preview niet beschikbaar op dit apparaat
                        </div>
                        <a
                            href="/files/ambtelijk-leiderschap_lecture.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-2xl border bg-slate-600 px-6 py-2 text-white hover:bg-gold-600"
                        >
                            Open PDF in nieuwe tab
                        </a>
                    </div>
                </div>
            ) : (
                <>
                    {isLoading && (
                        <div className="flex h-96 w-full items-center justify-center">
                            <div className="text-gray-500">PDF laden...</div>
                        </div>
                    )}

                    {hasError ? (
                        <div className="flex h-96 w-full flex-col items-center justify-center space-y-4">
                            <div className="text-red-500">Er is een probleem opgetreden bij het laden van de PDF.</div>
                            <a
                                href="/files/ambtelijk-leiderschap_lecture.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded bg-slate-600 px-4 py-2 text-white hover:bg-gold-600"
                            >
                                Open PDF in nieuwe tab
                            </a>
                        </div>
                    ) : (
                        <div>
                            {(() => {
                                try {
                                    return (
                                        <Document
                                            file="/files/ambtelijk-leiderschap_lecture.pdf"
                                            onLoadSuccess={(pdf) => {
                                                console.log('PDF loaded successfully:', pdf.numPages, 'pages');
                                                setIsLoading(false);
                                            }}
                                            onLoadError={(error) => {
                                                console.error('Error loading PDF:', error);
                                                setHasError(true);
                                                setIsLoading(false);
                                            }}
                                            onSourceError={(error) => {
                                                console.error('Error with PDF source:', error);
                                                setHasError(true);
                                                setIsLoading(false);
                                            }}
                                            className={'text-center'}
                                            loading={
                                                <div className="flex h-96 w-full items-center justify-center">
                                                    <div className="text-gray-500">PDF laden...</div>
                                                </div>
                                            }
                                            error={
                                                <div className="flex h-96 w-full flex-col items-center justify-center space-y-4">
                                                    <div className="text-red-500">PDF kan niet worden geladen op dit apparaat.</div>
                                                    <a
                                                        href="/files/ambtelijk-leiderschap_lecture.pdf"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="rounded bg-slate-600 px-4 py-2 text-white hover:bg-gold-600"
                                                    >
                                                        Open PDF in nieuwe tab
                                                    </a>
                                                </div>
                                            }
                                            options={{
                                                cMapUrl: `//unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
                                                cMapPacked: true,
                                                standardFontDataUrl: `//unpkg.com/pdfjs-dist@${pdfjs.version}/standard_fonts/`,
                                                verbosity: 0,
                                            }}
                                        >
                                            <Page
                                                pageNumber={1}
                                                width={width}
                                                renderTextLayer={false}
                                                renderAnnotationLayer={false}
                                                className="mx-auto"
                                                onRenderSuccess={() => {
                                                    console.log('Page rendered successfully with width:', width);
                                                }}
                                                onRenderError={(error) => {
                                                    console.error('Page render error:', error);
                                                }}
                                                loading={
                                                    <div className="flex h-96 w-full items-center justify-center">
                                                        <div className="text-gray-500">Pagina laden...</div>
                                                    </div>
                                                }
                                                error={
                                                    <div className="flex h-96 w-full flex-col items-center justify-center space-y-4">
                                                        <div className="text-red-500">Pagina kan niet worden weergegeven.</div>
                                                        <a
                                                            href="/files/ambtelijk-leiderschap_lecture.pdf"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="rounded bg-slate-600 px-4 py-2 text-white hover:bg-gold-600"
                                                        >
                                                            Open PDF in nieuwe tab
                                                        </a>
                                                    </div>
                                                }
                                            />
                                        </Document>
                                    );
                                } catch (error) {
                                    console.error('PDF Component Error:', error);
                                    setComponentError(error instanceof Error ? error.message : 'Unknown error');
                                    setHasError(true);
                                    return (
                                        <div className="flex h-96 w-full flex-col items-center justify-center space-y-4">
                                            <div className="text-red-500">Er is een probleem opgetreden met de PDF component.</div>
                                            <a
                                                href="/files/ambtelijk-leiderschap_lecture.pdf"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="rounded bg-slate-600 px-4 py-2 text-white hover:bg-gold-600"
                                            >
                                                Open PDF in nieuwe tab
                                            </a>
                                        </div>
                                    );
                                }
                            })()}
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

export default PDFViewer;
