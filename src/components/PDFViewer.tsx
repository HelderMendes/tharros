import { useEffect, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Configure the PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url
).toString();

function PDFViewer() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(600); // Default width

    // Update width responsively
    useEffect(() => {
        const updateWidth = () => {
            if (containerRef.current) {
                setWidth(containerRef.current.offsetWidth);
            }
        };

        updateWidth(); // Initial update

        // Listen for container resize
        const resizeObserver = new window.ResizeObserver(() => {
            updateWidth();
        });
        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }

        // Cleanup
        return () => resizeObserver.disconnect();
    }, []);

    return (
        <div
            ref={containerRef}
            className="mx-auto flex w-full max-w-5xl justify-center"
        >
            <Document
                file="/files/ambtelijk-leiderschap_lecture.pdf"
                className={'text-center'}
            >
                <Page
                    pageNumber={1}
                    width={width}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    className="mx-auto"
                    pageIndex={0}
                />
            </Document>
        </div>
    );
}

export default PDFViewer;
