
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';
import InfoComponent from '../../infoComponent/InfoComponent';
import cl from './DocumentInfo.module.css'
import { TbFileDownload } from "react-icons/tb";
import { useEffect, useState } from 'react';


const DocumentInfo = ({ downloadedFile }) => {

    const [displayFile, setDisplayFile] = useState(null);

    const downloadFile = () => {
        const link = document.createElement('a');
        link.href = `data:${downloadedFile.mime_type};base64,${downloadedFile.file}`;
        link.download = downloadedFile.title;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    const base64ToBlob = (base64, mimeType) => {
        const byteCharacters = atob(base64);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        return new Blob([byteArray], { type: mimeType });
    }

    useEffect(() => {
        const blob = base64ToBlob(downloadedFile.file, downloadedFile.mime_type);
        setDisplayFile(blob);
    }, []);

    return (
        <div className={cl.page}>
            <InfoComponent title={downloadedFile.title} date={downloadedFile.date} description={downloadedFile.description} />
            <div className={cl.button} onClick={downloadFile}>
                <TbFileDownload className={cl.icon} />
                <p>Завантажити файл</p>
            </div>
            <div>
                <DocViewer
                    document={
                        {
                            uri: window.URL.createObjectURL(displayFile),
                            fileName: downloadedFile.name
                        }
                    }
                    pluginRenderers={DocViewerRenderers}
                />
            </div>
        </div>
    );
};

export default DocumentInfo;
