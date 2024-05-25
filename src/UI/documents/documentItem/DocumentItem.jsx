import { useNavigate } from 'react-router-dom';
import DocumentsService from '../../../api/DocumentsService';
import { useApiCall } from '../../../hooks/useApiCall';
import cl from './DocumentItem.module.css'
import { TbFileDownload } from "react-icons/tb";


const DocumentItem = ({ document }) => {

    const navigate = useNavigate();

    const formattedCreatedDate = document.date == null ? "01.01.2024" : new Date(document.date).toLocaleString('en-UK', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    }).replace(/\//g, '.');

    const [downloadFile, isFileLoading, errors] = useApiCall( (id) => {
        DocumentsService.downloadFIleById(id);
   })


    return (
        <div className={cl.card} onClick={
            console.log("not implemented")
            // () => {navigate(`/documents/${document.id}`)}
            }>
            <div className={cl.document__info}>
                <div className={cl.title__date}>
                    <h3>{document.title}</h3>
                    <p>{formattedCreatedDate}</p>
                </div>
            </div>
            <div className={cl.download} onClick={(e) => {
                downloadFile(document.id);
                e.stopPropagation();
            }}>
                <TbFileDownload className={cl.icon} />
                <p>Завантажити</p>
            </div>
        </div>
    );
};

export default DocumentItem;
