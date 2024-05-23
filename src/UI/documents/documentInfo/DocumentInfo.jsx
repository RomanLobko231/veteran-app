
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';
import InfoComponent from '../../infoComponent/InfoComponent';
import cl from './DocumentInfo.module.css'
import { TbFileDownload } from "react-icons/tb";
import { useEffect, useState } from 'react';


const DocumentInfo = ({ downloadedFile }) => {

    const [displayFile, setDisplayFile] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const downloadFile = () => {
        const link = document.createElement('a');
        link.href = `data:${downloadedFile.mime_type};base64,${downloadedFile.file}`;
        link.download = downloadedFile.title;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    const base64ToBlob = async () => {
        const file = await fetch(`data:${downloadedFile.mime_type};base64,${downloadedFile.file}`)
        const blob = await file.blob();
        return blob;
    }

    useEffect(async () => {

        const blob  = base64ToBlob();
        setDisplayFile(blob);
    }, []);

    return (
        <div className={cl.page}>
            <InfoComponent title={downloadedFile.title} date={downloadedFile.date} description={downloadedFile.description} />
            <div className={cl.button} onClick={downloadFile}>
                <TbFileDownload className={cl.icon} />
                <p>Завантажити файл</p>
            </div>
            {isLoading
            ? <h1>Loading</h1>
            :<div>
                <DocViewer
                    documents ={
                        {
                            uri: window.URL.createObjectURL(displayFile),
                            fileName: downloadedFile.name
                        }
                    }
                    pluginRenderers={DocViewerRenderers}
                />
            </div>
            }
            
        </div>
    );
};

export default DocumentInfo;
