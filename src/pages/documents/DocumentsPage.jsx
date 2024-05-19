import { useNavigate } from 'react-router-dom';
import cl from './DocumentsPage.module.css'
import { TailSpin } from 'react-loader-spinner';
import DocumentsService from '../../api/DocumentsService';
import DocumentsList from '../../UI/documents/documentsList/DocumentsList';
import { useEffect, useState } from 'react';
import { useApiCall } from '../../hooks/useApiCall';

const DocumentsPage = () => {

    const navigate = useNavigate();
    const [documents, setDocuments] = useState([]);
    const [fetchDocuments, isLoading, error] = useApiCall( async () => {
        const response = await DocumentsService.getAll();
        setDocuments(response.data)
    })

    useEffect(() => {
        fetchDocuments()
    }, [])

    return (
        <div className={cl.page}>
            <div className={cl.info__choice}>
                <button className={cl.button} onClick={() => navigate('/news')}>Новини</button>
                <p className={cl.title}>Документи</p>
            </div>
            <p>Всього документiв: {documents.length}</p>
            {isLoading
                    ? <TailSpin
                        visible={true}
                        height="50"
                        width="50"
                        color="#2c425f"
                        ariaLabel="tail-spin-loading"
                        radius="1"
                        wrapperStyle={{ marginTop: '15%' }}
                        wrapperClass="" />
                    : <DocumentsList documents={documents} />
                }
        </div>
    );
};

export default DocumentsPage;
