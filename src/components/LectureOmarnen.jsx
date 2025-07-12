import { Document, Page, pdfjs } from 'react-pdf';

// Configure the PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url
).toString();

function PDFViewer() {
    return (
        <Document file="comenianen-omarmen.pdf">
            <Page pageNumber={1} />
        </Document>
    );
}

export default PDFViewer;
