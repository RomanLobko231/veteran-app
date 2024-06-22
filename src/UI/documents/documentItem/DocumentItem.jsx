import { useNavigate } from 'react-router-dom';
import cl from './DocumentItem.module.css'
import { TbFileDownload } from "react-icons/tb";
import { FILE_DOWNLOAD_BASE_URL } from './../../../api/api';



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

   const downloadURL = FILE_DOWNLOAD_BASE_URL + document.id;


    return (
        <div className={cl.card} onClick={() => {navigate(`/documents/${document.id}`)}}>
            <div className={cl.document__info}>
                <div className={cl.title__date}>
                    <h3>{document.title}</h3>
                    <p>{formattedCreatedDate}</p>
                </div>
            </div>
            <div onClick={(e) => {e.stopPropagation();}} style={{display: "contents"}}>
                <a href={downloadURL} download className={cl.button}>
                <TbFileDownload className={cl.icon} />
                <p>
                    Завантажити
                </p>
            </a>
            </div>
        </div>
    );
};

export default DocumentItem;
