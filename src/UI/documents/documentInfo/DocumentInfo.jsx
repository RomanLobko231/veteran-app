
import DocViewer, { DocViewerRenderers, PDFRenderer } from '@cyntler/react-doc-viewer';
import InfoComponent from '../../infoComponent/InfoComponent';
import cl from './DocumentInfo.module.css'
import { TbFileDownload } from "react-icons/tb";
import { useEffect, useState } from 'react';
import DocumentsService from '../../../api/DocumentsService';
import { useApiCall } from '../../../hooks/useApiCall';
import { TailSpin } from 'react-loader-spinner';


const DocumentInfo = ({ downloadedFile }) => {

    const [pdfUrl, setPdfUrl] = useState(null);
    const [downloadFile, isFileLoading, errors] = useApiCall( (id) => {
        DocumentsService.downloadFIleById(id);
   })

    useEffect(() => {
        if(downloadedFile.file){
        const arrayBuffer = base64ToArrayBuffer();
        const blob = new Blob([arrayBuffer], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        setPdfUrl(url);
        }
    }, [downloadedFile.file])


    const base64ToArrayBuffer = () => {
        console.log(downloadedFile);
        const binaryString = atob(downloadedFile.file);
        const len = binaryString.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        return bytes.buffer;
    }

    return (
        <div className={cl.page}>
            <InfoComponent title={downloadedFile.title} date={downloadedFile.date} description={downloadedFile.description} />
            <div className={cl.button} onClick={() => {downloadFile(downloadedFile.id)}}>
                <TbFileDownload className={cl.icon} />
                <p>Завантажити файл</p>
            </div>
            {pdfUrl 
                ? <DocViewer documents={{uri: pdfUrl, fileName: downloadedFile.title}} pluginRenderers={PDFRenderer} />
                //<iframe src={pdfUrl} className={cl.doc__display}></iframe>
                : <TailSpin
                visible={true}
                height="50"
                width="50"
                color="#2c425f"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{ marginTop: '5%' }}
                wrapperClass="" />
            }
        </div>
    );
};

export default DocumentInfo;
