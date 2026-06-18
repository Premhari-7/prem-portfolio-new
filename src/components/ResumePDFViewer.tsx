"use client";

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface ResumePDFViewerProps {
  pdfUrl: string;
  pageWidth: number;
  onDocumentLoadSuccess: ({ numPages }: { numPages: number }) => void;
  numPages: number | undefined;
}

export default function ResumePDFViewer({
  pdfUrl,
  pageWidth,
  onDocumentLoadSuccess,
  numPages,
}: ResumePDFViewerProps) {
  return (
    <Document
      file={pdfUrl}
      onLoadSuccess={onDocumentLoadSuccess}
      loading={<div className="text-gray-500 font-medium py-10">Loading Resume...</div>}
      className="flex flex-col items-center gap-6 w-full h-auto overflow-visible mx-auto"
    >
      {Array.from(new Array(numPages || 0), (el, index) => (
        <Page
          key={`page_${index + 1}`}
          pageNumber={index + 1}
          width={pageWidth}
          renderTextLayer={false}
          renderAnnotationLayer={true}
          className="shadow-2xl rounded-xl overflow-hidden bg-white"
        />
      ))}
    </Document>
  );
}
