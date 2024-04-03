import {useState} from 'react';
import {Document, Page, pdfjs} from 'react-pdf';
import {PDFWorker} from "pdfjs-dist";
import path from 'path';
import * as fs from 'fs';

const pdfWorkerPath = path.join(path.dirname(require.resolve('pdfjs-dist/package.json')), 'build', 'pdf.worker.js');
fs.copyFileSync(pdfWorkerPath, './dist/pdf.worker.js');

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

type PPTXViewerProps = {
    file: string;
}

function PDFViewer({file}: PPTXViewerProps) {
    const [numPages, setNumPages] = useState<number>(0);

    // When the document is loaded, set the number of pages
    function onDocumentLoadSuccess({numPages}: { numPages: number }) {
        setNumPages(numPages);
    }

    return (
        <div>
            <Document
                file={file}
                onLoadSuccess={onDocumentLoadSuccess}
                options={{workerSrc: './pdf.worker.js'}}
            >
                {Array.from(new Array(numPages), (_el, index) => (
                    <Page key={`page_${index + 1}`} pageNumber={index + 1}/>
                ))}
            </Document>
        </div>
    );
}

export default PDFViewer;
