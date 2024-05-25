
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';
import InfoComponent from '../../infoComponent/InfoComponent';
import cl from './DocumentInfo.module.css'
import { TbFileDownload } from "react-icons/tb";
import { useEffect, useState } from 'react';
import DocumentsService from '../../../api/DocumentsService';
import { useApiCall } from '../../../hooks/useApiCall';


const DocumentInfo = ({ downloadedFile }) => {

    const [displayFile, setDisplayFile] = useState('');
    const [docs, setDocs] = useState([]);

    const downloadFile = () => {
        console.log(downloadedFile)
        const link = document.createElement('a');
        link.href = `data:${downloadedFile.mime_type};base64,${downloadedFile.file}`;
        link.download = downloadedFile.title;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    const [pdfUrl, setPdfUrl] = useState(null);

    useEffect(() => {
        console.log(downloadedFile)
        if (downloadedFile.file) {
            // Convert byte array to Blob
            const blob = new Blob([new Uint8Array(downloadedFile.file)], { type: 'application/pdf' });

            // Create an object URL for the Blob
            const url = URL.createObjectURL(blob);

            // Set the URL to state
            setPdfUrl(url);

            // Clean up the URL object when the component unmounts
            return () => URL.revokeObjectURL(url);
        }
    }, [downloadedFile.file]);



    // const showDoc = () => {
    //     function base64ToArrayBuffer(base64) {
    //         const binaryString = atob(base64);
    //         const len = binaryString.length;
    //         const bytes = new Uint8Array(len);
    //         for (let i = 0; i < len; i++) {
    //             bytes[i] = binaryString.charCodeAt(i);
    //         }
    //         return bytes.buffer;
    //     }

    //     // Convert base64 to ArrayBuffer
    //     const arrayBuffer = base64ToArrayBuffer(dow);

    //     // Create a Blob from the ArrayBuffer
    //     const blob = new Blob([arrayBuffer], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });

    //     // Create an Object URL
    //     const url = URL.createObjectURL(blob);

    //     console.log(url)

    //     // const byteCharacters = atob(downloadedFile.file);

    //     // const byteNumbers = new Array(downloadedFile.file.length);
    //     // for (let i = 0; i < downloadedFile.file.length; i++) {
    //     //     byteNumbers[i] = downloadedFile.file.charCodeAt(i);
    //     // }

    //     // // Convert the array to a Uint8Array
    //     // const byteArray = new Uint8Array(byteNumbers);

    //     // // Create a Blob from the Uint8Array
    //     // const blob = new Blob([byteArray], { type: downloadedFile.mime_type });
    //     // const blobUrl = window.URL.createObjectURL(blob);
    //     // console.log(blobUrl)

    //     setDocs([...docs, { uri: url, fileType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' }])
    //     console.log(docs)
    // }

    return (
        <div className={cl.page}>
            <InfoComponent title={downloadedFile.title} date={downloadedFile.date} description={downloadedFile.description} />
            <div className={cl.button} onClick={downloadFile}>
                <TbFileDownload className={cl.icon} />
                <p>Завантажити файл</p>
            </div>
            <div>
                {pdfUrl ? (
                    <iframe src={pdfUrl} width="100%" height="600px"></iframe>
                ) : (
                    <p>Loading PDF...</p>
                )}
            </div>
        </div>
    );
};

export default DocumentInfo;
