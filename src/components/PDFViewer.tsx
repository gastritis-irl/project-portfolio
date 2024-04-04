import {useState} from 'react';
import {Document, Page, pdfjs} from 'react-pdf';



pdfjs.GlobalWorkerOptions.workerSrc = '//cdnjs.cloudflare.com/ajax/libs/pdf.js/7/pdf.worker.js';


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
            >
                <Page pageNumber={numPages}/>
            </Document>
            {/*    number of pages*/}
            <p>Page {numPages} of {numPages}</p>
        </div>
    );
}

export default PDFViewer;
