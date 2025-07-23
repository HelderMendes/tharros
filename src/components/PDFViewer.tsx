import { useEffect, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Configure the PDF.js worker with proper version matching
// This prevents console errors about worker version mismatch
pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).toString();

// Configure PDF.js to reduce console warnings
if (import.meta.env.DEV) {
    // Suppress common PDF.js warnings in development
    const originalConsoleWarn = console.warn;
    console.warn = function (message, ...args) {
        if (
            typeof message === 'string' &&
            (message.includes('Setting up fake worker') || message.includes('pdf.worker.js') || message.includes('WorkerTransport'))
        ) {
            return;
        }
        originalConsoleWarn.apply(console, [message, ...args]);
    };
}

function PDFViewer() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(600); // Default width
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    // Detect iOS devices
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isIOSChrome = isIOS && /CriOS/.test(navigator.userAgent);
    const isIOSSafari = isIOS && !isIOSChrome;

    // Debug logging
    useEffect(() => {
        console.log('PDFViewer mounted');
        console.log('iOS:', isIOS, 'Safari:', isIOSSafari);
        console.log('Worker src:', pdfjs.GlobalWorkerOptions.workerSrc);
    }, [isIOS, isIOSSafari]);

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
            {/* Special handling for iOS Safari - show iframe fallback */}
            {isIOSSafari ? (
                <div className="w-full">
                    <div className="mb-4 rounded-md bg-blue-50 p-4 text-center">
                        <p className="text-sm text-blue-700">Voor de beste ervaring op iOS, open de PDF in een nieuwe tab.</p>
                    </div>
                    <div className="flex h-96 w-full flex-col items-center justify-center space-y-4 rounded-lg border-2 border-dashed border-gray-300">
                        <div className="text-gray-600">PDF Preview niet beschikbaar op dit apparaat</div>
                        <a
                            href="/files/ambtelijk-leiderschap_lecture.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded bg-slate-600 px-6 py-3 font-semibold text-white shadow-lg hover:bg-gold-600"
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
                    )}
                </>
            )}
        </div>
    );
}

export default PDFViewer;
