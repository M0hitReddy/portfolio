import { useCallback, useState } from 'react';
import { useResizeObserver } from '@wojtekmaj/react-hooks';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import pdf from './UPDATED_RESUME.pdf';
import './style.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
const options = {
    cMapUrl: '/cmaps/',
    standardFontDataUrl: '/standard_fonts/',
};
const resizeObserverOptions = {};
const maxWidth = 800;

export const Resume = () => {
    const [containerRef, setContainerRef] = useState(null);
    const [containerWidth, setContainerWidth] = useState();

    const onResize = useCallback ((entries) => {
        const [entry] = entries;

        if (entry) {
            setContainerWidth(entry.contentRect.width);
        }
    }, []);

    useResizeObserver(containerRef, resizeObserverOptions, onResize);

    

    return (
        <div className="resume">
            
            <div className="resume-container">
                
                <div className="resume-container-document" ref={setContainerRef}>
                    <Document file={pdf} options={options}>
                            <Page  
                                pageNumber={1}
                                width={containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth}
                            />
                    </Document>
                </div>
            </div>
        </div>
    );
}

// export default {Resume};