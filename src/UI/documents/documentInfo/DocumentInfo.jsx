
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

    const downloadFil = () => {
        const link = document.createElement('a');
        link.href = `data:${downloadedFile.mime_type};base64,${downloadedFile.file}`;
        link.download = downloadedFile.title;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    const [downloadFile, isFileLoading, errors] = useApiCall( (id) => {
        DocumentsService.downloadFIleById(id);
   })


//     const showDoc = () => {
//         // Decode the Base64 string
//     const byteCharacters = atob(downloadedFile.file);

//     // Create an array for each byte
//     const byteNumbers = new Array(downloadedFile.file.length);
//     for (let i = 0; i < downloadedFile.file.length; i++) {
//         byteNumbers[i] = downloadedFile.file.charCodeAt(i);
//     }

//     // Convert the array to a Uint8Array
//     const byteArray = new Uint8Array(byteNumbers);

//     // Create a Blob from the Uint8Array
//    const blob = new Blob([byteArray], { type: downloadedFile.mime_type });
//     const blobUrl = window.URL.createObjectURL(blob);
//     console.log(blobUrl)

//         setDocs([...docs, {uri: blobUrl, fileType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'}])
//     }

    return (
        <div className={cl.page}>
            <InfoComponent title={downloadedFile.title} date={downloadedFile.date} description={downloadedFile.description} />
            <div className={cl.button} onClick={() => {downloadFile(downloadedFile.id)}}>
                <TbFileDownload className={cl.icon} />
                <p>Завантажити файл</p>
            </div>
            {/* <div>
                <DocViewer
                    documents ={
                        docs
                    }
                    pluginRenderers={DocViewerRenderers}
                />
            </div>
    
             */}
        </div>
    );
};

export default DocumentInfo;
