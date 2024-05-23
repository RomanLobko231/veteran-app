
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';
import InfoComponent from '../../infoComponent/InfoComponent';
import cl from './DocumentInfo.module.css'
import { TbFileDownload } from "react-icons/tb";
import { useEffect, useState } from 'react';


const DocumentInfo = ({ downloadedFile }) => {

    const [displayFile, setDisplayFile] = useState('');
    const [docs, setDocs] = useState([]);

    const downloadFile = () => {
        console.log(downloadedFile.file)
        const link = document.createElement('a');
        link.href = `data:${downloadedFile.mime_type};base64,${downloadedFile.file}`;
        link.download = downloadedFile.title;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    const base64ToBlob = () => {
        const dataURI = `data:${downloadedFile.mime_type};base64,${downloadedFile.file}`;
        var byteString = atob(dataURI.split(',')[1]);

    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

    // write the bytes of the string to an ArrayBuffer
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    // write the ArrayBuffer to a blob, and you're done
    var bb = new Blob([ab]);
    return bb;
    }

    useEffect(() => {

        const blob  = base64ToBlob();
        console.log(blob);
        const file =  window.URL.createObjectURL(blob);
        // setDocs([...docs, {
        //     uri: file,
        //     fileName: downloadedFile.title,
        //     fileType: '.docx'
        // }])
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
                    documents ={
                        docs
                    }
                    pluginRenderers={DocViewerRenderers}
                />
            </div>
    
            
        </div>
    );
};

export default DocumentInfo;
